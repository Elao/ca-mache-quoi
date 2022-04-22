import { Routes, Route } from 'react-router-dom';
import './assets/styles/app.scss';

import Categories from './data/categories.json';
/* import Category from './components/Category'; */
import Form from './components/Form';
import Footer from './components/Footer';
import Results from './components/Results'


console.log(Categories);
function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Form />}/>
        <Route path="/results" element={<Results />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
