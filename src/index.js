
import React from 'react';
import ReactDOM from 'react-dom';
import Demo from './demo';
import { Provider } from "react-redux";
import store from "./Redux/store";
store.subscribe(()=>{
    console.log(store.getState())
})
console.log(store)
ReactDOM.render(<Provider store={store}><Demo /></Provider>, document.querySelector('#root'));
    