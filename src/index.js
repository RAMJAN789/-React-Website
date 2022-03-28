import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './asset/css/style.css';
import './asset/css/bootstrap.min.css';
import './asset/css/animate.css';
import './asset/css/magnific-popup.css';
import './asset/css/aos.css';
import './asset/fonta/css/all.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Main from './Main';


import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Main />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
