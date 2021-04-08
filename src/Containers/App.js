import { BrowserRouter } from 'react-router-dom';

import MainPage from '../Components/MainPage/MainPage';

function App() {
  return (
    <BrowserRouter>
      <div>
        <MainPage />
      </div>
    </BrowserRouter>
  );
}

export default App;
