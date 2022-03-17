import Home from './Home';
import Settings from './Settings';
import Admission from './Admission';

//admission components
import ApplicantList from './Admission/ApplicantList';


const routes = [
    {
        name: 'Home',
        path: "/",
        component: Home,
        icon: '',
        routes: []
    },
    {
        name: 'Students',
        path: '/students',
        component: Settings,
        icon: '',
        routes: []
    }, {
        name: 'Sponsors',
        path: '/sponsors',
        component: Settings,
        icon: '',
        routes: []
    }, {
        name: 'Sponsorship',
        path: '/sponsorship',
        component: Settings,
        icon: '',
        routes: []
    },
    {
        name: 'Admission',
        path: '/admission',
        component: Admission,
        icon: '',
        routes: [
            {
                name: 'Applicant List',
                path: '/admission/applicant-list',
                component: ApplicantList,
                icon: 'https://img.icons8.com/ios-glyphs/344/list--v1.png',
                routes: []
            }, {
                name: 'Primary Verification',
                path: '/',
                component: Admission,
                icon: 'https://img.icons8.com/ios-glyphs/344/user--v1.png',
                routes: []
            }, {
                name: 'Secondary Verification',
                path: '/',
                component: Admission,
                icon: 'https://img.icons8.com/pastel-glyph/344/page-orientation--v2.png',
                routes: []
            }, {
                name: 'Officer Approval',
                path: '/',
                component: Admission,
                icon: 'https://img.icons8.com/material/344/checked--v1.png',
                routes: []
            },
            {
                name: 'Campus Manager Approval',
                path: '/',
                component: Admission,
                icon: 'https://img.icons8.com/material/344/facebook-like--v1.png',
                routes: []
            },
        ]
    },
    {
        name: 'Accounts',
        path: '/accounts',
        component: Settings,
        icon: '',
        routes: []
    }, {
        name: 'Settings',
        path: '/settings',
        component: Settings,
        icon: '',
        routes: []
    },
    // {
    //     name: '',
    //     path: '',
    //     component: '',
    //     icon: '',
    //     routes: []
    // }
]

export default routes;