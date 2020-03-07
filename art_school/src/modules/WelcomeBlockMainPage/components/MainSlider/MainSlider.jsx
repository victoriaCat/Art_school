import './MainSlider.scss';
import React, {Component} from 'react';
import LibSlider from '~/libs/LibSlider/LibSlider.jsx';

class MainSlider extends Component {
    render() {
        const mainSlider = {
            className: 'welcome-block__slide',
            images: this.props.images,
        };

        return (
            <LibSlider {...mainSlider}/>
        );
    }
}

export default MainSlider;
