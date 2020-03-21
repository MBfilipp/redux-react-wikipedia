import React from 'react'
import WikiSearch from './components/WikiSearch';
import Cards from './components/Cards';

function App() {
  return (
    <div className="container">
      <div className="row mt-5 border bg-light">
            <div className="col-12 px-3 mt-3 border-bottom">
              <h2 className="text-center">WikiApi Search</h2>
              <WikiSearch />
            </div>
            <div className="col-11 mb-5 h-50 mx-auto">
              <h3 className="text-center mt-3 mb-5">Результат</h3>
              <Cards result={[1 ,2 ,3]}/>
            </div>
        </div>
    </div>
  );
}

export default App;
