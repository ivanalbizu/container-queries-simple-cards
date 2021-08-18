import * as dat from 'dat.gui'

const container = document.getElementById('container');
let text;

const sampleText = function() {
  this.width = 720;
};

window.onload = function() {
  text = new sampleText();
  setValue();
  const gui = new dat.GUI();

  gui.add(text, 'width', 360, 1420).onChange(setValue);
};

function setValue() {
  container.style.width = text.width+"px";
}
