import App from "./App.jsx";
import MainPage from "./layouts/MainPage/MainPage.jsx";
import OptionsLayout from "./layouts/OptionsLayout/OptionsLayout.jsx";
import Workshop from "./layouts/Workshop/Workshop.jsx";
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

const workshopsPaths = ['/workshops/adults/impressionisty', '/workshops/adults/solnechnyi_zakat',
    '/workshops/adults/viva_la_vida', '/workshops/adults/sezann_otkroisya',
    '/workshops/adults/cvety_s_natury', '/workshops/adults/koty', '/workshops/adults/polnyi_jazz',
    '/workshops/adults/bugry', '/workshops/kids/murlyka', '/workshops/kids/podsolnuhi',
    '/workshops/kids/rozhdestvo', '/workshops/kids/portret_zimy', '/workshops/kids/ananas',
    '/workshops/kids/voshod', '/workshops/kids/yabloki_sezanna', '/workshops/kids/sovushka'];

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
                        path: ['/workshops', '/workshops/adults', '/workshops/kids']
                    }
                ]
            },
            {
                ...OptionsLayout,
                path: ['/adults_draw', '/kids_draw', '/free_studio', '/gallery', '/policy'].concat(workshopsPaths),
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
                        ...Workshop,
                        path: workshopsPaths
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