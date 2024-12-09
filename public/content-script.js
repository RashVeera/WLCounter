chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.command === 'getWordCount') {
    const text = document.body.innerText || "";
    const wordCount = text.split(/\s+/g).length;
    const letterCount = text.replace(/\s+/g, "").length;

    sendResponse({ wordCount,letterCount });
  }
});