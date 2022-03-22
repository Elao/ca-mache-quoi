import logo from './logo.svg';
import './App.scss';

import Categories from './data/categories.json';

function App() {
  return (
    <div className="App">
      ...Ça mâche quoi ?!...
      <br /><br />

      {
        Categories.map( category => {
          return(
            <div className="box" key={ category.id }>
              { category.name }
            </div>
          )
        })
      }

    </div>
  );
}

export default App;
