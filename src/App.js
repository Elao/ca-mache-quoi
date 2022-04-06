import './assets/styles/app.scss';

import Categories from './data/categories.json';
/* import Category from './components/Category'; */
import Form from './components/Form';
import Footer from './components/Footer';


console.log(Categories);
function App() {
  return (
    <div className="container">
      <Form />
      {
        /* Categories.map( category => {
          return(
            <div className="box" key={ category.id }>
              { category.name }
            </div>
          )
        }) */
      }
      <Footer />
    </div>
  );
}

export default App;
