import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hooks from './components/Hooks';
import Classes from './components/Classes'
import BaseLayout from './components/layout/BaseLayout'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducers/reducerTemplate'
import App from './App';
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom'


const saveToLocalStorage = (reduxGlobalState) => {
  // serialization - converting js object to a string
  const serializeState = localStorage.getItem('state');
try {
  const serializeState = JSON.stringify(reduxGlobalState);
  localStorage.setItem('state',serializeState)
}
catch(e){

}
}

const loadFromLocalStorage = (params) => {
  const serializeState = localStorage.getItem('state');

  if(serializeState === null){
    return undefined;
  } else {
    return JSON.parse(serializeState);
  }
}

const persistedState = loadFromLocalStorage();

//Initializing REDUX store
let store = createStore(reducer, persistedState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

store.subscribe(()=>{

  saveToLocalStorage(store.getState());
})
//Provider hooks react to redux
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <Router>
      <BaseLayout>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/hooks" component={Hooks} />
          <Route path="/classes" component={Classes} />
        </Switch>
      </BaseLayout>
    </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


