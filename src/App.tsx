import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import MyPage from './pages/MyPage';
import Layout from './components/layout/Layout';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='signup' element={<SignUp />} />
          <Route path='signin' element={<SignIn />} />
          <Route path='mypage' element={<MyPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default function App() {
  return <Router />;
}
