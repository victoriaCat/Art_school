import './AboutMe.scss';

import React from 'react';

import CarouselMyWorks from '~/modules/AboutMe/components/CarouselMyWorks/CarouselMyWorks.jsx';

import pushkarevaImg from '~/assets/images/about_me/pushkareva.png';
import signatureImg from '~/assets/images/about_me/signature.png';

const AboutMe = () => {
    return (
        <>
            <div className="about-me">
                <div className="about-me-container">
                    <div className="my-portrait">
                        <img src={pushkarevaImg} alt=""/>
                    </div>
                    <div className="about-me-presentation">
                        <p><strong>Sample Text</strong> – кандидат в члены союза художников РФ. Получила художественно-педагогическое
                            образование в Академии архитектуры и искусств, Московском педагогическом университете.
                            Постоянный участник выставок и пленэров.</p>

                        <p>«Что значит быть художником? Отказаться от расчёта и счёта. Быть терпеливым. Беззаботно, тихо и
                            широко. Я учусь этому ежедневно. Желаю всем смотреть на этот мир ещё более добрыми глазами.
                            Созидать и совершенствоваться».</p>
                    </div>
                    <div className="about-me-signature">
                        <img src={signatureImg} alt=""/>
                    </div>
                    <div className="about-me-ask">

                        <h3 className="about-me-ask__header">ВОПРОСЫ ХУДОЖНИКУ</h3>

                        <h4>Художник – это кто?</h4>

                        <p>Художник – тот, кто смог увидеть так, как мог только он один, а потом на основании увиденного
                            создать нечто, чего не мог создать никто другой. Своего рода, специалист по визуализации и
                            неважно с помощью какого материала.</p>

                        <h4>Чего в вас больше, художника или педагога?</h4>

                        <p>Искусство и преподавание одинаково меня увлекают. Говорят «Не всякий художник имеет способность
                            учить, и не всякий преподаватель искусства – большой художник». Я бы хотела быть
                            исключением.</p>

                        <h4>Что для вас важно в работе художника-педагога?</h4>

                        <p>В моей работе есть доля иррациональности, того, что держится не только на разуме, но и на
                            чувстве, когда делаешь все возможное и невозможное, работаешь с максимальной собранностью, вниманием и
                            концентрацией. Мне кажется, самое важное для педагога ИЗО – умение разжигать внутренний
                            творческий потенциал ученика.</p>

                        <h4>Какую позицию вы занимаете как педагог?</h4>

                        <p>Чаще всего я исповедую принцип не вторжения, а созерцания. Наблюдаю, как пишет человек, и
                            чуть-чуть подправляю, помогаю. Но в некоторых случаях позволяю себе вмешаться в творческий
                            процесс, объяснить тот или иной принцип рисования непосредственно на картине ученика.
                            С детьми моя работа строится на принципе наглядности обучения – то есть, совместной поэтапной
                            работе. Я пишу - ребёнок повторяет за мной.
                            В конечном результате моя цель – научить цельному видению – то есть, видеть все изображаемые
                            предметы одновременно, всю натуру целиком. В будущем это позволит передавать впечатление
                            пространства и точность образа.</p>

                        <h4>Почему люди во взрослом возрасте начинают рисовать?</h4>

                        <p>В больших городах, мегаполисах люди живут в нон-стоп режиме, когда стирается граница между днём и
                            ночью, а маршрут «дом-работа-дом» становится замкнутыми кругом, вырваться из которого порой нет сил
                            и желания. Абстрагироваться от временной петли помогает созидательная деятельность. Не секрет, что
                            рисование обладает арт-терапевтическим эффектом. Успокаивает, помогает расслабиться. Возвыситься над
                            «бытовухой» и суетой будней. К тому же, живопись это просто очень красивое хобби.</p>

                        <h4>Зачем рисовать детям, которые не собираются быть художниками?</h4>

                        <p>Рисование - это новый язык, углубляющий чувства. На языке образов возможно передать то, что никаким
                            другим путём не может быть доведено до сознания. Рисование взвращивает и расширяет кругозор, поэтому
                            очень полезно детям в практике.</p>

                        <h4>Нравится ли вам работать с людьми?</h4>

                        <p>Да, я вообще с большим интересом к людям отношусь. Они меня интригуют. Всегда.
                            И я бесконечно в людей верю. Думаю, каждый из нас способен на удивительные вещи!</p>
                    </div>
                </div>
                <h3>Работы</h3>
                <CarouselMyWorks />
            </div>
        </>
    );
};

export default AboutMe;
