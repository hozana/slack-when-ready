console.error("SLACK WHEN READY INJECTING");

let readyButton;
let focusButton;
let currentMode;
console.error("SLACK WHEN READY INJECTING 2");
function init() {
  console.error("SLACK WHEN READY INIT");
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
  injectCSS();
  focusMode();
  console.error("SLACK WHEN READY INIT DONE");
}
console.error("SLACK WHEN READY INJECTING 3");

function focusMode() {
  currentMode = 'focus';
  document.body.classList.add('focusMode');
  document.body.classList.remove('inboxMode');
}
console.error("SLACK WHEN READY INJECTING 4");

function inboxMode() {
  currentMode = 'inbox';
  document.body.classList.remove('focusMode');
  document.body.classList.add('inboxMode');
}
console.error("SLACK WHEN READY INJECTING 5");

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
console.error("SLACK WHEN READY INJECTING 6");

window.addEventListener('load', init);
console.error("SLACK WHEN READY INJECTING DONE");
console.error("SLACK WHEN READY INJECTING DONE2");
console.error("SLACK WHEN READY INJECTING DONE3");
