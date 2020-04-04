import { combineReducers } from 'redux';
import workshopsData from '~/root/reducer';
import mainPageImages from '~/modules/WelcomeBlockMainPage/reducer';
import aboutMePageImages from '~/modules/AboutMe/reducer';
import adultsDrawImages from '~/modules/AdultsDraw/reducer';
import kidsDrawImages from '~/modules/KidsDraw/reducer';
import freeStudioImage from '~/modules/FreeStudio/reducer';
import gallery from '~/modules/Gallery/reducer';
import workshopsAdults from '~/modules/WorkshopsCatalog/containers/WorkshopsAdults/reducer';
import workshopsKids from '~/modules/WorkshopsCatalog/containers/WorkshopsKids/reducer';
import workshopPage from '~/modules/Workshop/containers/Workshop/reducer';

export default combineReducers({
    workshopsData,
    mainPageImages,
    aboutMePageImages,
    adultsDrawImages,
    kidsDrawImages,
    freeStudioImage,
    gallery,
    workshopsAdults,
    workshopsKids,
    workshopPage
});