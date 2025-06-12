const faqData = {
  "how do i send a photo on whatsapp": [
    "1. Open WhatsApp and a chat.",
    "2. Tap the paperclip 📎 icon.",
    "3. Choose 'Gallery' and select a photo.",
    "4. Tap 'Send' ➤."
  ],
  "what is google pay": [
    "Google Pay is a digital wallet for payments.",
    "You can send money, pay bills, or scan UPI QR codes."
  ],
  "how to use google maps": [
    "1. Open Google Maps app.",
    "2. Enter a place name or address.",
    "3. Tap 'Directions' and choose travel mode.",
    "4. Tap 'Start' to begin navigation."
  ],
  "how to pay on paytm": [
  "1. Open Paytm app.",
  "2. Tap on 'Pay' and scan the QR code.",
  "3. Enter amount and tap 'Pay'."
],

"hi":[
    "Hello, How are You ?",
]

};

function handleUserInput() {
  const input = document.getElementById("userInput").value.toLowerCase().trim();
  addMessage(input, 'user');

  let reply = "Sorry, I don't know that yet.";
  for (let key in faqData) {
    if (input.includes(key)) {
      reply = faqData[key].join("<br>");
      break;
    }
  }

  setTimeout(() => addMessage(reply, 'bot'), 500);
  document.getElementById("userInput").value = "";
}

function addMessage(text, sender) {
  const chatlog = document.getElementById("chatlog");
  const bubble = document.createElement("div");
  bubble.className = "bubble " + (sender === 'user' ? 'user' : '');
  bubble.innerHTML = text;
  chatlog.appendChild(bubble);
  chatlog.scrollTop = chatlog.scrollHeight;
}
