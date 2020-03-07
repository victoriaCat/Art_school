import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {FS_IMG_URL} from '~/libs/api';
import {WORKSHOPS_ADULTS} from "~/assets/productVars";

class WorkshopsAdults extends Component {
    constructor(props) {
        super(props);
    }

    formatDate(dateStr) {
        const dateArr = dateStr.split('.', 3);
        const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа',
            'сентября', 'октября', 'ноября', 'декабря'];
        let formatedDD = dateArr[0];
        let formatedMM = months[+dateArr[1] - 1];
        return formatedDD + ' ' + formatedMM;
    }

    checkIfBygone(workshops) {
        workshops.map(workshop => {
            let date = new Date();
            let currentDD = date.getDate();
            let currentMM = date.getMonth() + 1;
            let currentYYarr = ('' + date.getFullYear()).split('', 4);
            let currentYY = parseInt(currentYYarr[2] + currentYYarr[3]);
            const workshopDateArr = workshop.date.split('.', 3);
            const workshopDD = +workshopDateArr[0];
            const workshopMM = +workshopDateArr[1];
            const workshopYY = +workshopDateArr[2];
            if ((currentYY > workshopYY) || ((currentMM > workshopMM) && (currentYY >= workshopYY)) ||
                ((currentDD > workshopDD) && (currentMM >= workshopMM) && (currentYY >= workshopYY))) {
                workshop.bygone = true;
            }
        });
        return workshops;
    }

    showIfBygone(workshop) {
        if (workshop.bygone)
            return <p>Мастеркласс завершен, ожидайте анонс</p>
    }

    sortByDate(workshops) {
        let filteredComing = workshops.filter(workshop => workshop.bygone === false);
        let filteredBygone = workshops.filter(workshop => workshop.bygone === true);
        filteredComing.sort((a, b) => {
            let workshopADateArr = a.date.split('.', 3);
            let workshopA_DD = +workshopADateArr[0];
            let workshopA_MM = +workshopADateArr[1] - 1;
            let workshopA_YY = parseInt('20' + workshopADateArr[2]);
            let workshopBDateArr = b.date.split('.', 3);
            let workshopB_DD = +workshopBDateArr[0];
            let workshopB_MM = +workshopBDateArr[1] - 1;
            let workshopB_YY = parseInt('20' + workshopBDateArr[2]);
            let dateA = new Date(workshopA_YY, workshopA_MM, workshopA_DD),
                dateB = new Date(workshopB_YY, workshopB_MM, workshopB_DD);
            return dateA - dateB;
        });
        return filteredComing.concat(filteredBygone);
    }

    render() {
        return (
            <div className="workshops-wrapper">
                <h2>МАСТЕР-КЛАССЫ</h2>
                {this.sortByDate(this.checkIfBygone(WORKSHOPS_ADULTS)).map(workshop => (
                    <div key={workshop.id} className="workshops-unit">
                        <h3>{workshop.header}</h3>
                        <Link to={`/workshops/adults/${workshop.link}`}><img
                            src={`${FS_IMG_URL}${this.props.images.find(image => image.name === workshop.imgName).id}/${workshop.imgName}?`}
                            alt={workshop.imgName}/></Link>
                        <p>{this.formatDate(workshop.date)} | {workshop.time}</p>
                        <p>{workshop.place}</p>
                        {this.showIfBygone(workshop)}
                    </div>))}
            </div>
        );
    }
}

export default WorkshopsAdults;

