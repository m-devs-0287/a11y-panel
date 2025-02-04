export const initTTS = () => {
  // Select elements from the DOM
  const ttsContainer = document.getElementById("tts-component");
  const playButton = document.getElementById("tts-play-btn");
  const stopButton = document.getElementById("tts-stop-btn");

  /**
   * 
   * The browser API SpeechSynthesisUtterance is used to create and manage 
   * speech synthesis tasks. It allows you to specify the text to be spoken,
   * the language, and other settings. 
   * 
   * NOTE: SpeechSynthesisUtterance is supported in Firefox. But it's not 
   * working correctly. 
   * 
   * 
   * ✅ chrome 
   * ✅edge 
   * ✅safari
   * ❌firefox
   * 
   * 
   */
};
