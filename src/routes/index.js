import Authorization from 'Hocs/Authorization/';
import Loadable from 'react-loadable';

import ScreenLoading from 'Components/Loading/ScreenLoading/'

const LazyHome = Loadable({
    loader: () => import('Pages/Home/'),
    loading: ScreenLoading
})

const routes = [
    {
        exact: true,
        path: '/',
        component: Authorization(LazyHome)(),
        name: 'home-page'
    },
];

export default routes;
