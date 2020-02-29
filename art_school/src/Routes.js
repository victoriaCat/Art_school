import App from "./App.jsx";
import MainPage from "./layouts/MainPage/MainPage.jsx";
import OptionsLayout from "./layouts/OptionsLayout/OptionsLayout.jsx";
import GalleryLayout from "./layouts/GalleryLayout/GalleryLayout.jsx";
import PageNotFound from "./modules/PageNotFound/PageNotFound.jsx";
import WelcomeBlockMainPage from "./modules/WelcomeBlockMainPage/containers/WelcomeBlockMainPage.jsx";
import AboutMe from "./modules/AboutMe/containers/AboutMe.jsx";
import Contacts from "./modules/Contacts/containers/Contacts.jsx";
import Workshops from "./modules/Workshops/containers/Workshops.jsx";
import AdultsDraw from "./modules/AdultsDraw/containers/AdultsDraw.jsx";
import KidsDraw from "./modules/KidsDraw/containers/KidsDraw.jsx";
import FreeStudio from "./modules/FreeStudio/containers/FreeStudio.jsx";
import RandomGallery from "./modules/RandomGallery.jsx";

export default [
    {
        ...App,
        routes: [
            {
                ...MainPage,
                path: ['/', '/about', '/contacts', '/workshops'],
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
                        ...Workshops,
                        path: '/workshops'
                    }
                ]
            },
            {
                ...OptionsLayout,
                path: ['/adults_draw', '/kids_draw', '/free_studio'],
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
                    }
                ]
            },
            {
                ...GalleryLayout,
                path: ['/gallery'],
                routes: [
                    {
                        ...RandomGallery,
                        path: '/gallery'
                    }
                ]
            },
            {
                ...PageNotFound
            }
        ]
    }
]