import MainPage from "./layouts/MainPage/MainPage.jsx";
import WelcomeBlockMainPage from "./modules/WelcomeBlockMainPage/containers/WelcomeBlockMainPage.jsx";
import AboutMe from "./modules/AboutMe/containers/AboutMe.jsx";
import Contacts from "./modules/Contacts/containers/Contacts.jsx";
import PageNotFound from "./modules/PageNotFound/PageNotFound.jsx";
import RandomLayout from "./layouts/RandomLayout.jsx";
import RandomPage from "./modules/RandomPage.jsx";
import RandomGallery from "./modules/RandomGallery.jsx";
import App from "./App.jsx";

export default [
    {
        ...App,
        routes: [
            {
                ...MainPage,
                path: ['/', '/about', '/contacts'],
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
                    }
                ]
            },
            {
                ...RandomLayout,
                path: ['/random', '/gallery'],
                routes: [
                    {
                        ...RandomPage,
                        path: '/random'
                    },
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