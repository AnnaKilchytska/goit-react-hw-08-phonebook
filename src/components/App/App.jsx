import Navigation from 'components/Navigation/Navigation';
import Contacts from 'pages/Contacts';
import Login from 'pages/Login';
import Register from 'pages/Register';
import { Route, Routes } from 'react-router-dom';
import css from './App.module.css';

function App() {
  return (
    <div className={css.AppContainer}>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
