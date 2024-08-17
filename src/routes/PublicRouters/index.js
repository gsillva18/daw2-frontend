import PaginaCadastro from '../../pages/PaginaCadastro'
import PaginaLogin from '../../pages/PaginaLogin'


const PublicRoutes = {
    path: '/',
    children: [
        {
            path: 'cadastro',
            element: <PaginaCadastro />
        },
        {
            path: 'login',
            element: <PaginaLogin />
        }
    ]
};

export default PublicRoutes;