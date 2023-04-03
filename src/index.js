import { Page } from './scripts/staticPage/renderStatic';
import { eventListeners } from './scripts/dynamicPage/events';

import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

import './styles/style.css';




const body = document.querySelector('.content');

// appending Starting Page;
Page.renderPagewithStart(body);
eventListeners.startEvent();






