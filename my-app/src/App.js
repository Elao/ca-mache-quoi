import logo from './logo.svg';

import './assets/styles/app.scss';
import Title from './components/Title.js';

import Categories from './data/categories.json';

function App() {
  return (
    <div className="App">
      <Title />

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
