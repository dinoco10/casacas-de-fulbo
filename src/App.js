import { Navigate, useRoutes } from 'react-router-dom';
import Basket from './pages/Basket/Basket';
import ContextFilter from './components/Context/ContextFilter';
import ContextProvider from './components/Context/ContextProvider';
import Details from './pages/Details/Details';
import FavoritePage from './components/Favorite/FavoritePage';
import Header from './layout/Header/Header';
import Products from './pages/Products/Products';
import Signup from './components/Sign/Signup';
import Signin from './components/Sign/Signin';
import { AuthContextProvider } from './components/Context/AuthContext';




function App() {
  let router = useRoutes([
    { path: '/', element: <Products /> },
    { path: '/:id', element: <Details /> },
    { path: '/favorite', element: <FavoritePage /> },
    { path: '/basket', element: <Basket /> },
    { path: '*', element: <Navigate to={'/'} /> },
    { path: '/signup', element: <Signup /> },
    { path: '/signin', element: <Signin /> },
  ])
  return (
    <ContextProvider>
      <AuthContextProvider>
        <ContextFilter>     
          <Header />
          {router}        
        </ContextFilter>
      </AuthContextProvider>   
    </ContextProvider>
  );
}

export default App;
