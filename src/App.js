// useRef (디자인)
// dom을 변경할 때 사용

import Footer from './components/Footer';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import { Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';

// exact = 주소를 정확하게 읽어라. ("/"와 "login" 구분)

function App() {
  return (
    <div>
      <Header />
      <Route path="/" exact={true} component={HomePage} />
      <Route path="/login" exact={true} component={LoginPage} />
      <Footer />
    </div>
  );
}

export default App;
