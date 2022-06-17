import { Navigate, Route, Routes } from 'react-router-dom';
import { ArticleFull } from './components/article/ArticleFull';
import { CategoryPage } from './components/CategoryPage';
import { HomeContainer } from './containers/HomeContainer';

export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HomeContainer />} />
      <Route path='/article/:id' element={<ArticleFull />} />
      <Route path='/category/:category' element={<CategoryPage />} />
      <Route path='/new' element={<div>forma</div>} />
      <Route path='/admin' element={<div>admin</div>} />
      <Route path={'*'} element={<Navigate to={'/'} />} />
    </Routes>
  );
};
