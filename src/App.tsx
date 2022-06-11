import { Navigate, Route, Routes } from 'react-router-dom';
import { HomeContainer } from './containers/HomeContainer';

export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HomeContainer />} />
      <Route path={'*'} element={<Navigate to={'/'} />} />
    </Routes>
  );
};
