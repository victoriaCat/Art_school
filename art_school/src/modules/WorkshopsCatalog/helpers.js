import React from 'react';

export function formatDate(dateStr) {
    const dateArr = dateStr.split('.', 3);
    const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа',
        'сентября', 'октября', 'ноября', 'декабря'];
    let formatedDD = dateArr[0];
    let formatedMM = months[+dateArr[1] - 1];
    return formatedDD + ' ' + formatedMM;
}

export function checkIfBygone(workshops) {
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

export function showIfBygone(workshop) {
    if (workshop.bygone)
        return <p>Мастер-класс завершен, ожидайте анонс</p>
}

export function sortByDate(workshops) {
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