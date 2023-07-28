chrome.runtime.onInstalled.addListener(function() {
  chrome.contextMenus.create({
    "id": "sampleContextMenu",
    "title": "Explain with ChatGPT",
    "contexts": ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
  if (info.menuItemId == "sampleContextMenu") {
    chrome.scripting.executeScript({
      target: {tabId: tab.id},
      function: getTextSelection
    }, function(results) {
      if (chrome.runtime.lastError) {
        console.error(chrome.runtime.lastError);
      } else {
        console.log(results[0].result);
        // Make request to OpenAI API with the selected text
        fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
          method: 'POST',
          headers: {
            "Content-Type": 'application/json',
            Authorization: `Bearer ${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}`
          },
          body: JSON.stringify({
            model: "text-davinci-003",
            prompt: results[0].result,
            max_tokens: 50
          })
        }).then(response => response.json()).then(data => {
          console.log(data);
          fetchdata()
          // Send the explanation to the popup
          chrome.runtime.sendMessage({action: showExplanation, explanation: data.choices[0].text});
        });
      }
    });
  }
});

function getTextSelection() {
  return window.getSelection().toString();
}