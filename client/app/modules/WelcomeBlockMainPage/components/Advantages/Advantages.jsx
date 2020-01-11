import './Advantages.scss';

import React from 'react';

const Advantages = () => {
    return (
        <div className="main-advantages">
            <div className="main-advantages__item">
                <h3>Сотвори картину</h3>
                <p className="advantages-text">Вы создадите картину, которая будет дорога вашему сердцу. Соприкоснётесь с «кухней» художника. Узнаете
                    любопытные факты из истории искусств.</p>
            </div>
            <div className="main-advantages__item">
                <h3>Порадуйся краскам</h3>
                <p className="advantages-text">Атмосфера в мастерской живая и демократичная, способствует тому, чтобы любовь к искусству вспыхнула в
                вас необычайной силой и пробудила вдохновение.</p>
            </div>
            <div className="main-advantages__item">
                <h3>Ощути комфорт</h3>
                <p className="advantages-text">Подготовлены все условия для того, чтобы занятия шли легко. Мастерская в центре Москвы. Художественные
                материалы входят в стоимость занятия.</p>
            </div>
        </div>
    );
};

export default Advantages;
