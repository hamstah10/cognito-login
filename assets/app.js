/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */



// any CSS you import will output into a single css file (app.css in this case)
import '../node_modules/@fortawesome/fontawesome-pro/css/all.css';
import '../node_modules/@fortawesome/fontawesome-pro/js/all.js';
import './styles/app.scss';
import './styles/theme.scss';

const $ = require('jquery');
// this "modifies" the jquery module: adding behavior to it
// the bootstrap module doesn't export/return anything
require('bootstrap');
import theme from './js/theme';
import custom from './js/custom';








