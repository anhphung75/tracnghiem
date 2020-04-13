import Vue from './Vue-dev.2.6.11.js';
import App from './components/App.js';

// TODO style frame wieder raus?
// TODO stattdessen global styles und css in js als alternative?
// TODO examples schöner machen
// TODO CSS in JS example
// TODO CSS kopieren
// TODO babel

new Vue({
  el: "#app",
  render: h => h(App),
})
