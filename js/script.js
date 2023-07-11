const runTypingEffect = () => {
  const text = 'I am Guy Saloniki.';
  const typingElement = document.getElementById('typing-text');
  const typingDelay = 150;

  typeText(text, typingElement, typingDelay);
};

const typeText = (text, typingElement, typingDelay) => {
  for (let i = 0; i < text.length; i++) {
    setTimeout(() => {
      typingElement.textContent += text.charAt(i);
    }, typingDelay * i);
  }
};

document.addEventListener('DOMContentLoaded', runTypingEffect);
