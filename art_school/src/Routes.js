import App from "./App.jsx";
import MainPage from "./layouts/MainPage/MainPage.jsx";
import OptionsLayout from "./layouts/OptionsLayout/OptionsLayout.jsx";
import WorkshopPage from "./layouts/Workshop/Workshop.jsx";
import WorkshopsCatalog from "./layouts/WorkshopsCatalog/WorkshopsCatalog.jsx";
import PageNotFound from "./modules/PageNotFound/PageNotFound.jsx";
import WelcomeBlockMainPage from "./modules/WelcomeBlockMainPage/containers/WelcomeBlockMainPage.jsx";
import AboutMe from "./modules/AboutMe/containers/AboutMe.jsx";
import Contacts from "./modules/Contacts/containers/Contacts.jsx";
import AdultsDraw from "./modules/AdultsDraw/containers/AdultsDraw.jsx";
import KidsDraw from "./modules/KidsDraw/containers/KidsDraw.jsx";
import FreeStudio from "./modules/FreeStudio/containers/FreeStudio.jsx";
import Gallery from "./modules/Gallery/containers/Gallery.jsx";
import PrivacyPolicy from "./modules/PrivacyPolicy/PrivacyPolicy.jsx";
import WorkshopsAll from "./modules/WorkshopsCatalog/containers/WorkshopsAll/WorkshopsAll.jsx";
import WorkshopsAdults, {loadDataAdults} from "./modules/WorkshopsCatalog/containers/WorkshopsAdults/WorkshopsAdults.jsx";
import WorkshopsKids, {loadDataKids} from "./modules/WorkshopsCatalog/containers/WorkshopsKids/WorkshopsKids.jsx";
import Workshop from "./modules/Workshop/containers/Workshop/Workshop.jsx";

import {WORKSHOPS_ADULTS, WORKSHOPS_KIDS} from "~/assets/productVars";

const workshopsAdultsPaths = WORKSHOPS_ADULTS.map(workshop => (`/workshops/adults/${workshop.id}/${workshop.link}`));
const workshopsKidsPaths = WORKSHOPS_KIDS.map(workshop => (`/workshops/kids/${workshop.id}/${workshop.link}`));
const workshopsPaths = workshopsAdultsPaths.concat(workshopsKidsPaths);

export default [
    {
        ...App,
        routes: [
            {
                ...MainPage,
                path: ['/', '/about', '/contacts', '/workshops', '/workshops/adults', '/workshops/kids'],
                exact: true,
                routes: [
                    {
                        ...WelcomeBlockMainPage,
                        path: '/',
                        exact: true
                    },
                    {
                        ...AboutMe,
                        path: '/about'
                    },
                    {
                        ...Contacts,
                        path: '/contacts'
                    },
                    {
                        ...WorkshopsCatalog,
                        path: ['/workshops', '/workshops/adults', '/workshops/kids'],
                        exact: true,
                        routes: [
                            {
                                component: WorkshopsAll,
                                path: '/workshops',
                                exact: true
                            },
                            {
                                component: WorkshopsAdults,
                                loadData: loadDataAdults,
                                path: '/workshops/adults'
                            },
                            {
                                component: WorkshopsKids,
                                loadData: loadDataKids,
                                path: '/workshops/kids'
                            }

                        ]
                    }
                ]
            },
            {
                ...OptionsLayout,
                path: ['/adults_draw', '/kids_draw', '/free_studio', '/gallery', '/policy'].concat(workshopsPaths),
                exact: true,
                routes: [
                    {
                        ...AdultsDraw,
                        path: '/adults_draw'
                    },
                    {
                        ...KidsDraw,
                        path: '/kids_draw'
                    },
                    {
                        ...FreeStudio,
                        path: '/free_studio'
                    },
                    {
                        ...Gallery,
                        path: '/gallery'
                    },
                    {
                        ...WorkshopPage,
                        path: workshopsPaths,
                        exact: true,
                        routes: [
                            {
                                ...Workshop,
                                path: workshopsPaths
                            }
                        ]
                    },
                    {
                        ...PrivacyPolicy,
                        path: '/policy'
                    }
                ]
            },
            {
                ...PageNotFound
            }
        ]
    }
]