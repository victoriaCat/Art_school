import './Advantages.scss';

import React from 'react';

const Advantages = () => {
    return (
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
    );
};

export default Advantages;
