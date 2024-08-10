import TrangChu from '../Components/TrangChu/Trangchu';
import Operator from '../Components/pages/Operator/Guest';
import Login from '../Components/TrangChu/Login/Login';
import Vehicle from '../Components/pages/Operator/Vehicle';
import Place from '../Components/pages/Operator/Place';
import Tours from '../Components/pages/Operator/Tours';

const publicRoutes = [
    { path: '/', component: TrangChu },
    { path: '/operator', component: Operator },
    { path: '/login', component: Login },
    { path: '/vehicle', component: Vehicle },
    { path: '/place', component: Place },
    { path: '/tour', component: Tours },
];

export { publicRoutes };
