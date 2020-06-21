const userWord = [
    ["good morning", "hello", "hi", "good afternoon", "good evening", "good day"],
    ["how can you help me", "what can you do for me", "help me", "what can i ask you", "what can you do"],
    ["how?", "how"],
    ["no", "yes"],
    ["no","yes"],
    ["no","yes"],
    ["who code you", "who build you", "who created you", "who made you", "where are you from", "what language can you speak"],
    ["are you a chatbot", "are you tajubot", "are you human or chatbot", "who are you"],
    ["how are you", "how are you doing", "how things"],
    ["what is your name", "may i know your name", "what can i call you", "what do you call yourself", "your name", "your name please"],
    ["thank you", "thanks", "thank you bot"],
    ["wow", "nice", "really", "ok", "okay", "that is nice"],
    ["can you tell me something", "tell me something", "tell me a story", "tell me a joke"],
    ["what", "why", "how", "where", "when"],
    ["bye", "good bye", "goodbye", "see you later"],
];

const reply = [
    ["Hello!", "Hello there!", "Hi"],
    ["You can ask me to help you to check your Covid-19 status and other health related issues, ask me how?"],
    ["Do you have headache?"],
    ["Do you have malaria?"],
    ["Do you have pains?"],
    ["Congratulations you are negative", "Sorry you are positive"],
    ["Mr. Tajudeen", "from Javascript", "I can speak Javascript and Yoruba"],
    ["Yes i am a bot, and you?", "Yes i am Tajubot, and you?"],
    ["I'm fine, thank you"],
    ["My name is Taju chatbot"],
    ["You are welcome", "Nice meeting you"],
    ["Thank you for the compliment"],
    ["i will love to", "Tell me if there is something you need to know", "Tell me about you"],
    ["Do you have headache, Fever and Soar throat?"],
    ["Do you have malaria?"],
    ["Do you have pains?"],
    ["Goodbye", "Bye"]
];

const alternative = [
    "Fantastic",
    "Continue...",
    "Good",
    "i don't understand you, try again",
    "I'm listening..."
  ];
  
 
  
  const coronavirus = ["Please endeavour to wash your hands and stay save"];
  
  document.addEventListener("DOMContentLoaded", () => {
      const inputField = document.getElementById("input")
      inputField.addEventListener("keydown", function(e) {
          if (e.code === "Enter") {
              let input = inputField.value;
              inputField.value = "";
              output(input);
      }
    });
  });
  
  function output(input) {
    let product;
  
   
    let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");
  
    
    text = text
      .replace(/ a /g, " ")
      .replace(/i feel /g, "")
      .replace(/whats/g, "what is")
      .replace(/please /g, "")
      .replace(/ please/g, "");
  
    
    if (compare(userWord, reply, text)) {
      product = compare(userWord, reply, text);
    } else if (text.match(/coronavirus/gi)) {
      product = coronavirus[Math.floor(Math.random() * coronavirus.length)];
    } else {
      product = alternative[Math.floor(Math.random() * alternative.length)];
    }
  
    
    addChat(input, product);
  }
  
  function compare(userWordArray, replyArray, string) {
    let item;
    for (let x = 0; x < userWordArray.length; x++) {
      for (let y = 0; y < replyArray.length; y++) {
        if (userWordArray[x][y] == string) {
          items = replyArray[x];
          item = items[Math.floor(Math.random() * items.length)];
        }
      }
    }
    return item;
  }
  
  function addChat(input, product) {
    const chatDiv = document.getElementById("chatbot");
    let userDiv = document.createElement("div");
    userDiv.id = "user";
    userDiv.innerHTML = 'You: <span id="user-response">${input}</span>';
    chatDiv.appendChild(userDiv);
  
    let botDiv = document.createElement("div");
    botDiv.id = "bot";
    botDiv.innerHTML = `TajuBot: <span id="bot-response">${product}</span>`;
    chatDiv.appendChild(botDiv);
  }