chrome.contextMenus.create({
  id: "myContextMenuId",
  title: "Explain Selection with ChatGPT",
  contexts: ["selection"]
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
  if (info.menuItemId == "myContextMenuId") {
    var text = info.selectionText;

    // Send the selected text to the ChatGPT server
    fetch("https://api.openai.com/v1/engine/davinci-codex/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer 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"
      },
      body: JSON.stringify({
        prompt: "Explain " + text + ".",
        max_tokens: 100,
        temperature: 0.7,
        n: 1,
        stop: "\n"
      })
    })
    .then(response => response.json())
    .then(data => {
      // Display the explanation in a popup
      var explanation = data.choices[0].text.trim();
      chrome.notifications.create({
        type: "basic",
        iconUrl: "icon.png",
        title: "Explain Selection",
        message: explanation
      });
    });
  }
});
