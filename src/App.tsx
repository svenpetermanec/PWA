import { Navigate, Route, Routes } from 'react-router-dom';
import { ArticleFull } from './components/article/ArticleFull';
import { HomeContainer } from './containers/HomeContainer';

export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HomeContainer />} />
      <Route path='/article/:id' element={<ArticleFull />} />
      <Route path={'*'} element={<Navigate to={'/'} />} />
    </Routes>
  );
};
