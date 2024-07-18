// ==UserScript==
// @name         chatgpt.com - wide screen
// @namespace    http://chatgpt.com/
// @version      0.1
// @description  Change the max-width of elements with both mx-auto and text-base classes to 100%
// @author       cosrah
// @match        *://chatgpt.com/*
// @icon         https://www.google.com/s2/favicons?domain=chatgpt.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Function to change the CSS
    function changeCSS() {
        const style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = `
            .mx-auto.text-base {
                max-width: 100% !important;
            }
        `;
        document.head.appendChild(style);
    }

    // Wait for the DOM to be fully loaded before applying the CSS change
    window.addEventListener('load', changeCSS);
})();
