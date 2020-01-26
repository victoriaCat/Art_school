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
        component: App,
        routes: [
            {
                component: MainPage,
                path: ['/', '/about', '/contacts'],
                exact: true,
                routes: [
                    {
                        component: WelcomeBlockMainPage,
                        path: '/',
                        exact: true,
                    },
                    {
                        component: AboutMe,
                        path: '/about'
                    },
                    {
                        component: Contacts,
                        path: '/contacts'
                    }
                ]
            },
            {
                component: RandomLayout,
                path: ['/random', '/gallery'],
                routes: [
                    {
                        component: RandomPage,
                        path: '/random'
                    },
                    {
                        component: RandomGallery,
                        path: '/gallery'
                    }
                ]
            },
            {
                component: PageNotFound
            }
        ]
    }
]