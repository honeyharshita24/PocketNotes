import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.css";
import Counters from './components/counters';
import Typography1 from './components/atoms/typography/typography.jsx';
import Avatar1 from './components/atoms/Avatar/Avatar.jsx';
import LockIcon from './components/atoms/lockIcon/lockIcon.jsx';
import SendIcon from './components/atoms/sendIcon/sendIcon.jsx';
import CreateButton from './components/atoms/createButton/createButton.jsx';
import HomePage from './components/atoms/homePageImg/homePageImg.jsx';
import GroupName from './components/molecules/groupNames/groupNames.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Typography1 styles={{color:'red'}}>color</Typography1>
    <LockIcon/>
    <SendIcon/>
    <CreateButton/>
    <HomePage/>
    <GroupName name="Lokesh Gayam"/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
