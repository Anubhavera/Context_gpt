const chat = new OpenAIChat({
    // Add your ChatGPT API credentials here
    instance: 'CHAT DCP',
    apiKey: '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'
  });
  
  const chatWindow = document.getElementById('chat-window');
  const chatForm = document.getElementById('chat-form');
  const chatInput = document.getElementById('chat-input');
  const chatSubmit = document.getElementById('chat-submit');

  
  
  // Event listener for form submission
  chatForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const userInput = chatInput.value;
    chatInput.value = '';
    chat.addUserMessage(userInput);
    chat.send(userInput).then((response) => {
      chat.addBotMessage(response.data[0].text);
    }).catch((error) => {
      console.error(error);
    });
  });
  