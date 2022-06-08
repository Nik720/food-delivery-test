import { useContext } from 'react';
import LoginPage from "./pages/Login-page";
import HomePage from "./pages/Home/Home-page";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthContext from './context/AuthProvider';

function App() {
  const { auth } = useContext(AuthContext);
  return (
    <main className="App">

      <Router>
        <Routes>
          <Route exact path="/" element={ 
              auth && auth.email ? <HomePage /> : <LoginPage />
            }>
            
          </Route>
          <Route path="/home" element={<HomePage /> } />
        </Routes>
      </Router>
		</main>
  )
}

export default App;
