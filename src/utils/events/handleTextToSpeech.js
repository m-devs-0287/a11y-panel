// Reference to the current utterance
let currentUtterance = null;

// Function to handle Text-to-Speech
export const handleTextToSpeech = () => {
  const selectedText = window.getSelection().toString();
  const buttonText = document.getElementById("text-to-speech").getAttribute("data-text");
  const content = selectedText || buttonText || "Please select some text to read aloud.";

  const utterance = new SpeechSynthesisUtterance(content);
  utterance.lang = "en-US"; // Default language, change if needed

  // Show the stop button while TTS is active
  const stopButton = document.getElementById("stop-tts");
  stopButton.style.display = "inline-block";

  // Add event listener to hide the stop button when speaking ends
  utterance.onend = () => {
    stopButton.style.display = "none"; // Hide the stop button
  };

  // Speak the content
  window.speechSynthesis.speak(utterance);

  // Reference to manage stopping
  currentUtterance = utterance;
};

// Function to stop Text-to-Speech
export const stopTextToSpeech = () => {
  if (window.speechSynthesis.speaking || window.speechSynthesis.paused) {
    window.speechSynthesis.cancel(); // Stops and clears all queued utterances
    const stopButton = document.getElementById("stop-tts");
    stopButton.style.display = "none"; // Hide the stop button
  }
};

// // Add event listeners for buttons
// document.getElementById("text-to-speech").addEventListener("click", handleTextToSpeech);
// document.getElementById("stop-tts").addEventListener("click", stopTextToSpeech);
 export default { handleTextToSpeech, stopTextToSpeech };