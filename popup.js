'use strict';
console.log("Running");
let random = document.getElementById('random');
chrome.storage.sync.get('color', function(data) {
    random.style.backgroundColor = data.color;
    random.setAttribute('value', data.color);
});
random.onclick = function(element) {
    let color = element.target.value;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(tabs[0].id, {cod: 'document.body.style.backgroundColor = "' + color + '";'})
    });
};