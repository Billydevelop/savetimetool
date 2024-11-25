// Navigation
function navigate(pageId) {
    document.querySelectorAll('.page').forEach((page) => page.classList.add('hidden'));
    document.getElementById(pageId).classList.remove('hidden');
  }
  
  // Text Converter Functions
  function convertToUpper() {
    const input = document.getElementById('text-input').value;
    document.getElementById('text-output').value = input.toUpperCase();
  }
  
  function convertToLower() {
    const input = document.getElementById('text-input').value;
    document.getElementById('text-output').value = input.toLowerCase();
  }
  
  function removeSpaces() {
    const input = document.getElementById('text-input').value;
    document.getElementById('text-output').value = input.replace(/\s+/g, ' ').trim();
  }
  
  // Unit Converter
  function convertUnit() {
    const value = parseFloat(document.getElementById('unit-input').value);
    const type = document.getElementById('unit-type').value;
    let result = '';
  
    if (isNaN(value)) {
      result = 'Invalid input';
    } else {
      switch (type) {
        case 'km-to-miles':
          result = `${value} km = ${(value * 0.621371).toFixed(2)} miles`;
          break;
        case 'miles-to-km':
          result = `${value} miles = ${(value / 0.621371).toFixed(2)} km`;
          break;
        case 'kg-to-lbs':
          result = `${value} kg = ${(value * 2.20462).toFixed(2)} lbs`;
          break;
        case 'lbs-to-kg':
          result = `${value} lbs = ${(value / 2.20462).toFixed(2)} kg`;
          break;
      }
    }
    document.getElementById('unit-output').textContent = result;
  }
  
  // Date Calculator
  function calculateDays() {
    const start = new Date(document.getElementById('start-date').value);
    const end = new Date(document.getElementById('end-date').value);
    const diff = Math.abs(end - start) / (1000 * 60 * 60 * 24);
    document.getElementById('date-output').textContent = `Days Difference: ${diff}`;
  }
  
  // QR Code Generator
  function generateQRCode() {
    const url = document.getElementById('url-input').value;
    const qrContainer = document.getElementById('qr-code-output');
    qrContainer.innerHTML = url ? `<img src="https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(url)}&size=150x150" alt="QR Code">` : 'Invalid URL';
  }
  
  // Data Cleanup
  function removeDuplicates() {
    const input = document.getElementById('data-input').value.split('\n');
    const uniqueData = [...new Set(input)].join('\n');
    document.getElementById('data-output').value = uniqueData;
  }
  
  function sortData() {
    const input = document.getElementById('data-input').value.split('\n');
    const sortedData = input.sort().join('\n');
    document.getElementById('data-output').value = sortedData;
  }
  
  // White Noise Generator
  let audio = null;
  function playNoise(type) {
    if (audio) stopNoise();
    audio = new Audio(`assets/sounds/${type}.mp3`);
    audio.loop = true;
    audio.play();
  }
  
  function stopNoise() {
    if (audio) {
      audio.pause();
      audio = null;
    }
  }
  