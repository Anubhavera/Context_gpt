chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'showExplanation') {
    document.getElementById('content').textContent = request.explanation;
  }
});
