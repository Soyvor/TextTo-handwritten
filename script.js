function convertText() {
    const inputText = document.getElementById('text-input').value;
    const outputDiv = document.getElementById('handwritten-output');
  
    // Replace line breaks with <br> tags
    const convertedText = inputText.replace(/\n/g, '<br>');
  
    // Set the handwritten output
    outputDiv.innerHTML = convertedText;
  }
  
  function savePDF() {
    window.print();
  }
  