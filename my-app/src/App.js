import logo from './logo.svg';

import './assets/styles/app.scss';
import Title from './components/Title.js';

import Categories from './data/categories.json';
import Category from './components/Category';

console.log(Categories);
function App() {
  return (
    <div className="App">
      <Title />
      <Category />

      {
        /* Categories.map( category => {
          return(
            <div className="box" key={ category.id }>
              { category.name }
            </div>
          )
        }) */
      }
    </div>
  );
}

export default App;
