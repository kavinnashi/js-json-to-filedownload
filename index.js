// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
let jsonData = {};
function download(content, fileName, contentType) {
  var a = document.createElement('a');
  var file = new Blob([content], { type: contentType });
  a.href = URL.createObjectURL(file);
  a.download = fileName;
  a.click();
}
download(JSON.stringify(jsonData), 'json.txt', 'text/plain');
