import React, { useEffect } from 'react' // https://redux.js.org/tutorials/quick-start
import axios from 'axios'

import { useSelector, useDispatch } from 'react-redux'
import { Counter } from './features/counter/Counter';

const API_LOGIN = `http://localhost:8000/auth/login`


function App() {

  return (
    <div className="App">
      Redux Toolkit Quick Start
      <Counter />
    </div>
  );
}

export default App;
