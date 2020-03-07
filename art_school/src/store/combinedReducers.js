import { combineReducers } from 'redux';
import mainPageImages from '~/modules/WelcomeBlockMainPage/reducer';
import aboutMePageImages from '~/modules/AboutMe/reducer';
import adultsDrawImages from '~/modules/AdultsDraw/reducer';
import kidsDrawImages from '~/modules/KidsDraw/reducer';
import freeStudioImage from '~/modules/FreeStudio/reducer';
import gallery from '~/modules/Gallery/reducer';
import workshopsCatalog from '~/layouts/WorkshopsCatalog/reducer';
import workshop from '~/layouts/Workshop/reducer';

export default combineReducers({
    mainPageImages,
    aboutMePageImages,
    adultsDrawImages,
    kidsDrawImages,
    freeStudioImage,
    gallery,
    workshopsCatalog,
    workshop
});