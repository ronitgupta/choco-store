import classes from './App.module.css';
import { BrowserRouter } from 'react-router-dom';

import MainPage from '../Components/MainPage/MainPage';

function App() {
  return (
    <BrowserRouter>
      <div className={classes.App}>
        <MainPage />
      </div>
    </BrowserRouter>
  );
}

export default App;
