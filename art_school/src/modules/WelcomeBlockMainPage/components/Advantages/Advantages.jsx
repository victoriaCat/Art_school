import './Advantages.scss';

import React from 'react';
import {FS_IMG_URL} from '~/libs/api';

const Advantages = (props) => {
    return (
        <>
            <div className="main-advantages">
                <div className="flex-container-numbers">
                    <div className="advantages-number">1</div>
                    <div className="advantages-number">2</div>
                    <div className="advantages-number">3</div>
                </div>
                <div className="flex-container-text">
                    <div className="main-advantages__item">
                        <h3>Сотвори картину</h3>
                        <div className="advantages-text">Вы создадите картину, которая будет дорога вашему сердцу. Соприкоснётесь с «кухней» художника. Узнаете
                            любопытные факты из истории искусств.</div>
                    </div>
                    <div className="main-advantages__item">
                        <h3>Порадуйся краскам</h3>
                        <div className="advantages-text">Атмосфера в мастерской живая и демократичная, способствует тому, чтобы любовь к искусству вспыхнула в
                            вас необычайной силой и пробудила вдохновение.</div>
                    </div>
                    <div className="main-advantages__item">
                        <h3>Ощути комфорт</h3>
                        <div className="advantages-text">Подготовлены все условия для того, чтобы занятия шли легко. Мастерская в центре Москвы. Художественные
                            материалы входят в стоимость занятия.</div>
                    </div>
                </div>
            </div>
            <div className="mobile-advantages">
                <div className="mobile-advantages__item">
                    <div className="mobile-advantages-number">1</div>
                    <h3>Сотвори картину</h3>
                    <div className="mobile-advantages-text"><div className="text-wrap">Вы создадите картину, которая будет дорога вашему сердцу. Соприкоснётесь с «кухней» художника. Узнаете
                        любопытные факты из истории искусств.</div></div>
                    <div className="mobile-advantages-image">
                        <img src={`${FS_IMG_URL}5e77e5b36e9f76498811e3b3/mobile-advantage-1.png?`} alt=""/>
                    </div>
                </div>
                <div className="mobile-advantages__item">
                    <div className="mobile-advantages-number">2</div>
                    <h3>Порадуйся краскам</h3>
                    <div className="mobile-advantages-text"><div className="text-wrap">Атмосфера в мастерской живая и демократичная, способствует тому, чтобы любовь к искусству вспыхнула в
                        вас необычайной силой и пробудила вдохновение.</div></div>
                    <div className="mobile-advantages-image">
                        <img src={`${FS_IMG_URL}5e77e5b36e9f76498811e3b6/mobile-advantage-2.png?`} alt=""/>
                    </div>
                </div>
                <div className="mobile-advantages__item">
                    <div className="mobile-advantages-number">3</div>
                    <h3>Ощути комфорт</h3>
                    <div className="mobile-advantages-text"><div className="text-wrap">Подготовлены все условия для того, чтобы занятия шли легко. Мастерская в центре Москвы. Художественные
                        материалы входят в стоимость занятия.</div></div>
                    <div className="mobile-advantages-image">
                        <img src={`${FS_IMG_URL}5e77e5b36e9f76498811e3ba/mobile-advantage-3.png?`} alt=""/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Advantages;
