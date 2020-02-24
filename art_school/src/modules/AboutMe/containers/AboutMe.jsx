import './AboutMe.scss';

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Preloader from '~/libs/Preloader/Preloader.jsx';
import CarouselMyWorks from '~/modules/AboutMe/components/CarouselMyWorks/CarouselMyWorks.jsx';
import {fetchImages} from '~/libs/commonActions';
import {
    FETCH_ABOUT_ME_IMAGES,
    FETCH_CAROUSEL_IMAGES_MY_WORKS
} from '~/modules/AboutMe/actionTypes';
import {FS_IMG_URL} from '~/libs/api';

class AboutMe extends Component {
    /*
   * returns {Preloader || CarouselMyWorks}
   * */
    showCarouselMyWorksImages(allProps) {
        let {isLoading, payload = []} = allProps;
        if (allProps === this.props.carouselMyWorksImages)
            return isLoading ? <Preloader/> : <CarouselMyWorks images={payload}/>;
    };

    render() {
        return (
            <div className="about-me">
                <div className="about-me-container">
                    <div className="my-portrait">
                        <img
                            src={`${FS_IMG_URL}${this.props.aboutMeImages.payload[0].id}/${this.props.aboutMeImages.payload[0].name}?`}
                            alt={this.props.aboutMeImages.payload[0].name}/>
                    </div>
                    <div className="about-me-presentation">
                        <p><strong>Sample Text</strong> – кандидат в члены союза художников РФ. Получила
                            художественно-педагогическое
                            образование в Академии архитектуры и искусств, Московском педагогическом университете.
                            Постоянный участник выставок и пленэров.</p>

                        <p>«Что значит быть художником? Отказаться от расчёта и счёта. Быть терпеливым. Беззаботно, тихо
                            и
                            широко. Я учусь этому ежедневно. Желаю всем смотреть на этот мир ещё более добрыми глазами.
                            Созидать и совершенствоваться».</p>
                    </div>
                    <div className="about-me-signature">
                        <img
                            src={`${FS_IMG_URL}${this.props.aboutMeImages.payload[1].id}/${this.props.aboutMeImages.payload[0].name}?`}
                            alt={this.props.aboutMeImages.payload[1].name}/>
                    </div>
                    <div className="about-me-ask">

                        <h3 className="about-me-ask__header">ВОПРОСЫ ХУДОЖНИКУ</h3>

                        <h4>Художник – это кто?</h4>

                        <p>Художник – тот, кто смог увидеть так, как мог только он один, а потом на основании увиденного
                            создать нечто, чего не мог создать никто другой. Своего рода, специалист по визуализации и
                            неважно с помощью какого материала.</p>

                        <h4>Чего в вас больше, художника или педагога?</h4>

                        <p>Искусство и преподавание одинаково меня увлекают. Говорят «Не всякий художник имеет
                            способность
                            учить, и не всякий преподаватель искусства – большой художник». Я бы хотела быть
                            исключением.</p>

                        <h4>Что для вас важно в работе художника-педагога?</h4>

                        <p>В моей работе есть доля иррациональности, того, что держится не только на разуме, но и на
                            чувстве, когда делаешь все возможное и невозможное, работаешь с максимальной собранностью,
                            вниманием и концентрацией. Мне кажется, самое важное для педагога ИЗО – умение разжигать
                            внутренний
                            творческий потенциал ученика.</p>

                        <h4>Какую позицию вы занимаете как педагог?</h4>

                        <p>Чаще всего я исповедую принцип не вторжения, а созерцания. Наблюдаю, как пишет человек, и
                            чуть-чуть подправляю, помогаю. Но в некоторых случаях позволяю себе вмешаться в творческий
                            процесс, объяснить тот или иной принцип рисования непосредственно на картине ученика.
                            С детьми моя работа строится на принципе наглядности обучения – то есть, совместной
                            поэтапной
                            работе. Я пишу - ребёнок повторяет за мной.
                            В конечном результате моя цель – научить цельному видению – то есть, видеть все изображаемые
                            предметы одновременно, всю натуру целиком. В будущем это позволит передавать впечатление
                            пространства и точность образа.</p>

                        <h4>Почему люди во взрослом возрасте начинают рисовать?</h4>

                        <p>В больших городах, мегаполисах люди живут в нон-стоп режиме, когда стирается граница между
                            днём и
                            ночью, а маршрут «дом-работа-дом» становится замкнутыми кругом, вырваться из которого порой
                            нет
                            сил
                            и желания. Абстрагироваться от временной петли помогает созидательная деятельность. Не
                            секрет,
                            что
                            рисование обладает арт-терапевтическим эффектом. Успокаивает, помогает расслабиться.
                            Возвыситься
                            над
                            «бытовухой» и суетой будней. К тому же, живопись это просто очень красивое хобби.</p>

                        <h4>Зачем рисовать детям, которые не собираются быть художниками?</h4>

                        <p>Рисование - это новый язык, углубляющий чувства. На языке образов возможно передать то, что
                            никаким
                            другим путём не может быть доведено до сознания. Рисование взвращивает и расширяет кругозор,
                            поэтому
                            очень полезно детям в практике.</p>

                        <h4>Нравится ли вам работать с людьми?</h4>

                        <p>Да, я вообще с большим интересом к людям отношусь. Они меня интригуют. Всегда.
                            И я бесконечно в людей верю. Думаю, каждый из нас способен на удивительные вещи!</p>
                    </div>
                </div>
                <h3>Работы</h3>
                {this.showCarouselMyWorksImages(this.props.carouselMyWorksImages)}
            </div>
        );
    }

    componentDidMount() {
        if (!this.props.aboutMeImages)
            this.props.fetchImages('about_me', FETCH_ABOUT_ME_IMAGES);
        if (!this.props.carouselMyWorksImages)
            this.props.fetchImages('about_me_works', FETCH_CAROUSEL_IMAGES_MY_WORKS);
    }
}

const loadData = (store) => {
    return Promise.all([
        store.dispatch(fetchImages('about_me', FETCH_ABOUT_ME_IMAGES)),
        store.dispatch(fetchImages('about_me_works', FETCH_CAROUSEL_IMAGES_MY_WORKS))
    ]);
};

const mapStateToProps = state => ({
    aboutMeImages: state.aboutMePageImages.aboutMeImages,
    carouselMyWorksImages: state.aboutMePageImages.carouselMyWorksImages
});

const mapDispatchToProps = {fetchImages};

AboutMe.propTypes = {
    fetchImages: PropTypes.func.isRequired,
    aboutMeImages: PropTypes.shape({
        isLoading: PropTypes.bool.isRequired,
        payload: PropTypes.array,
    }).isRequired,
    carouselMyWorksImages: PropTypes.object.isRequired
};

export default {
    component: connect(
        mapStateToProps,
        mapDispatchToProps
    )(AboutMe), loadData
};
