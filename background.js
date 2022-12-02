chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  // Listen to updates on the tabs and find the most recent tab and see if its yourube

  if (tab.url && tab.url.includes('youtube.com/watch')) {
    // Send message saying new video loaded and this is the video
    chrome.tabs.sendMessage(tabId, {
      type: 'NEW',
    });
  }
});
