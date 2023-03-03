import Error404 from 'containers/errors/Error404';
import PrincipalPage from 'containers/pages/PrincipalPage';
import { Route, Routes } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='*' element = {<Error404/>}/>
        <Route path='/' element = {<PrincipalPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
