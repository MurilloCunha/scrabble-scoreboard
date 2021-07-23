import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Logo from './components/logo/'
import Footer from './components/footer'
import Routes from './routes/'

ReactDOM.render(
  <React.StrictMode>
    <Logo />
    <Routes />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);