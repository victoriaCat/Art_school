import './Gallery.scss';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Header from "~/modules/Header/containers/Header.jsx";
import GallerySection from '~/modules/Gallery/components/GallerySection/GallerySection.jsx';
import {fetchImages} from '~/libs/commonActions';
import {
    FETCH_GALLERY_IMAGES_ADULTS_STUDENTS,
    FETCH_GALLERY_IMAGES_ADULTS_WORKS,
    FETCH_GALLERY_IMAGES_KIDS_STUDENTS,
    FETCH_GALLERY_IMAGES_KIDS_WORKS
} from '~/modules/Gallery/actionTypes';
import {FETCH_MAIN_CAROUSEL_IMAGES_STUDENTS} from '~/modules/WelcomeBlockMainPage/actionTypes';
import {FETCH_CAROUSEL_ADULTS_DRAW_IMAGES} from '~/modules/AdultsDraw/actionTypes';
import {FETCH_CAROUSEL_KIDS_DRAW_IMAGES} from '~/modules/KidsDraw/actionTypes';

class Gallery extends Component {
    render() {
        const gallerySections = {
            sectionAdults: {
                header: 'Работы взрослых',
                images: [this.props.carouselStudentsImages.payload, this.props.adultsDrawImages.payload,
                    this.props.galleryAdultsStudents.payload, this.props.galleryAdultsWorks.payload]
            },
            sectionKids: {
                header: 'Работы детей',
                images: [this.props.galleryKidsStudents.payload, this.props.kidsDrawImages.payload,
                    this.props.galleryKidsWorks.payload]
            }
        };
        return (
            <div className="gallery">
                <h2>Галерея работ учеников</h2>
                <GallerySection{...gallerySections.sectionAdults}/>
                <GallerySection{...gallerySections.sectionKids}/>
            </div>
        );
    }

    componentDidMount() {
        if(this.props.carouselStudentsImages.isLoading)
            this.props.fetchImages('main_carousel_students', FETCH_MAIN_CAROUSEL_IMAGES_STUDENTS);
        if(this.props.adultsDrawImages.isLoading)
            this.props.fetchImages('adults_draw', FETCH_CAROUSEL_ADULTS_DRAW_IMAGES);
        if(this.props.galleryAdultsStudents.isLoading)
            this.props.fetchImages('adults_students', FETCH_GALLERY_IMAGES_ADULTS_STUDENTS);
        if(this.props.galleryAdultsWorks.isLoading)
            this.props.fetchImages('adults_works', FETCH_GALLERY_IMAGES_ADULTS_WORKS);
        if(this.props.galleryKidsStudents.isLoading)
            this.props.fetchImages('kids_students', FETCH_GALLERY_IMAGES_KIDS_STUDENTS);
        if(this.props.kidsDrawImages.isLoading)
            this.props.fetchImages('kids_draw', FETCH_CAROUSEL_KIDS_DRAW_IMAGES);
        if(this.props.galleryKidsWorks.isLoading)
            this.props.fetchImages('kids_works', FETCH_GALLERY_IMAGES_KIDS_WORKS);
    }
}

const loadData = (store) => {
    return Promise.all([
        store.dispatch(fetchImages('main_carousel_students', FETCH_MAIN_CAROUSEL_IMAGES_STUDENTS)),
        store.dispatch(fetchImages('adults_draw', FETCH_CAROUSEL_ADULTS_DRAW_IMAGES)),
        store.dispatch(fetchImages('adults_students', FETCH_GALLERY_IMAGES_ADULTS_STUDENTS)),
        store.dispatch(fetchImages('adults_works', FETCH_GALLERY_IMAGES_ADULTS_WORKS)),
        store.dispatch(fetchImages('kids_students', FETCH_GALLERY_IMAGES_KIDS_STUDENTS)),
        store.dispatch(fetchImages('kids_draw', FETCH_CAROUSEL_KIDS_DRAW_IMAGES)),
        store.dispatch(fetchImages('kids_works', FETCH_GALLERY_IMAGES_KIDS_WORKS))
    ]);
};

const mapStateToProps = state => ({
    carouselStudentsImages: state.gallery.carouselStudentsImages,
    adultsDrawImages: state.gallery.adultsDrawImages,
    galleryAdultsStudents: state.gallery.galleryAdultsStudents,
    galleryAdultsWorks: state.gallery.galleryAdultsWorks,
    galleryKidsStudents: state.gallery.galleryKidsStudents,
    kidsDrawImages: state.gallery.kidsDrawImages,
    galleryKidsWorks: state.gallery.galleryKidsWorks,
});

const mapDispatchToProps = {fetchImages};

Gallery.propTypes = {
    fetchImages: PropTypes.func.isRequired,
    carouselStudentsImages: PropTypes.shape({
        isLoading: PropTypes.bool.isRequired,
        payload: PropTypes.array,
    }).isRequired,
    adultsDrawImages: PropTypes.shape({
        isLoading: PropTypes.bool.isRequired,
        payload: PropTypes.array,
    }).isRequired,
    galleryAdultsStudents: PropTypes.object.isRequired,
    galleryAdultsWorks: PropTypes.object.isRequired,
    galleryKidsStudents: PropTypes.object.isRequired,
    kidsDrawImages: PropTypes.object.isRequired,
    galleryKidsWorks: PropTypes.object.isRequired
};

export default {
    component: connect(
        mapStateToProps,
        mapDispatchToProps
    )(Gallery), loadData
};
