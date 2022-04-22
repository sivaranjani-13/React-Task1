import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Components/Header/App';
import Box1 from './Components/Box1/Box1';
import Box2 from './Components/Box2/Box2';
import Box3 from './Components/Box3/Box3';
import Box4 from './Components/Box4/Box4';
import Content from './Components/Content/Content';
import Footer from './Components/Footer/Footer';
import reportWebVitals from './reportWebVitals';

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
    <Box1 />
    <Box2 /><Box3 /> <Box4 /><Content /><Footer />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
