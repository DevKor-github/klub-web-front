import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios'

import Head from './components/Head.js';
import Home from './pages/Home.js';
import NewText from './pages/NewText.js';
import LogIn from './pages/LogIn.js';
import Register from './pages/Register.js'
import MyPosts from './pages/MyPosts.js';

// 라우팅 구조 정의
const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route element={<Head />}>
          <Route index element={<Home />} /> 
          <Route path='newtext' element={<NewText />} />
          <Route path='register' element={<Register />} />
          <Route path='myposts' element={<MyPosts />} />
        </Route>
        <Route path='login' element={<LogIn />} />
      </Routes>
    </BrowserRouter>
    // url 경로에 따라 각각 다른 컴포넌트를 렌더링할수 있도록 함
  );
};

export default App;