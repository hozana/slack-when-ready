// ==UserScript==
// @name         Slack When Ready
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Hide Slack channels, contacts, and message pane, and notification dots, with an "I'm ready" button to reactivate them
// @author       Arnaud Bétrémieux
// @match        https://app.slack.com/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    let readyButton;
    let focusButton;

    let currentMode;

    function init() {
        readyButton = document.createElement('button');
        readyButton.textContent = "I'm ready";
        readyButton.id = 'readyButton';
        readyButton.style.position = 'fixed';
        readyButton.style.top = '50%';
        readyButton.style.right = '50%';
        readyButton.style.zIndex = '1000';
        readyButton.style.padding = '10px 20px';
        readyButton.style.backgroundColor = '#007a5a';
        readyButton.style.color = 'white';
        readyButton.style.border = 'none';
        readyButton.style.borderRadius = '5px';
        readyButton.style.cursor = 'pointer';
        document.body.appendChild(readyButton);

        focusButton = document.createElement('button');
        focusButton.textContent = "Focus mode";
        focusButton.id = 'focusButton';
        focusButton.style.position = 'fixed';
        focusButton.style.top = '4px';
        focusButton.style.right = '70px';
        focusButton.style.zIndex = '1000';
        focusButton.style.padding = '10px 20px';
        focusButton.style.backgroundColor = '#007a5a';
        focusButton.style.color = 'white';
        focusButton.style.border = 'none';
        focusButton.style.borderRadius = '5px';
        focusButton.style.cursor = 'pointer';
        document.body.appendChild(focusButton);

        focusButton.addEventListener('click', focusMode);
        readyButton.addEventListener('click', inboxMode);

        const observer = new MutationObserver(() => {
            if (currentMode === 'inbox') { return; }
            let searchWorkspace = document.querySelector('div.p-client_workspace[aria-label="Recherche"]');
            if (searchWorkspace) {
              document.body.classList.add('searchMode');
            } else {
               document.body.classList.remove('searchMode');
            }
        });
        observer.observe(document.body, { childList: true, subtree: true });
    }

    function focusMode() {
        currentMode = 'focus';
        document.body.classList.add('focusMode');
        document.body.classList.remove('inboxMode');
    }

    function inboxMode() {
        currentMode = 'inbox';
        document.body.classList.remove('focusMode');
        document.body.classList.add('inboxMode');
    }

    function injectCSS() {
        const style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = `
            body.focusMode
            :is(#focusButton,
                .c-mention_badge,
                div.p-client_workspace[aria-label="Accueil"],
                .p-ia__sidebar_list__badge--unread) {
              display: none !important;
            }
            body.searchMode #readyButton {
              display: none !important;
            }
            body.inboxMode #readyButton {
              display: none !important;
            }
        `;
        document.head.appendChild(style);
    }

    injectCSS();
    focusMode();
    window.addEventListener('load', init);

})();
