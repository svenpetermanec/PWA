import { Navigate, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { ArticleFull } from './components/article/ArticleFull';
import { CategoryContainer } from './containers/CategoryContainer';
import { HomeContainer } from './containers/HomeContainer';
import { NewArticleContainer } from './containers/NewArticleContainer';
import 'react-toastify/dist/ReactToastify.css';

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
        <Route path='/admin' element={<div>admin</div>} />
        <Route path={'*'} element={<Navigate to={'/'} />} />
      </Routes>
    </>
  );
};
