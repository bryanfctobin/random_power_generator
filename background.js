'use strict';
chrome.runtime.onInstalled.addListener(function() {
});
chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.update(undefined, {url: 'http://powerlisting.wikia.com/wiki/Special:Random'});
});