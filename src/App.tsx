import { Navigate, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { ArticleFull } from './components/article/ArticleFull';
import { CategoryContainer } from './containers/CategoryContainer';
import { HomeContainer } from './containers/HomeContainer';
import { NewArticleContainer } from './containers/NewArticleContainer';
import 'react-toastify/dist/ReactToastify.css';
import { LoginContainer } from './containers/LoginContainer';
import { RegisterContainer } from './containers/RegisterContainer';
import { AdminContainer } from './containers/AdminContainer';

export const App = () => {
  return (
    <>
      <ToastContainer
        position='top-center'
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
      />
      <Routes>
        <Route path='/' element={<HomeContainer />} />
        <Route path='/article/:id' element={<ArticleFull />} />
        <Route path='/category/:category' element={<CategoryContainer />} />
        <Route path='/new' element={<NewArticleContainer />} />
        <Route
          path='/new/:id'
          element={<NewArticleContainer adminView={true} />}
        />
        <Route path='/admin' element={<LoginContainer />} />
        <Route path='/admin/panel' element={<AdminContainer />} />
        <Route path='/register' element={<RegisterContainer />} />
        <Route path={'*'} element={<Navigate to={'/'} />} />
      </Routes>
    </>
  );
};
