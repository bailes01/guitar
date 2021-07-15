///<reference path='../../node_modules/@types/p5/global.d.ts'/>
var body = document.getElementsByTagName("body")[0];
var margin = parseInt(window.getComputedStyle(body)['margin'].replace(/\D/g, ''));
var scaleSelect;
var noteSelect;
var tuningSelect;
var guitar;

function setup() {
  const hHeight = windowHeight * 0.4;
  const wWidth = windowWidth - margin * 2;
  createCanvas(wWidth, hHeight);
  noteSelect = createSelect();
  for (let i = 0; i < Guitar.notes.length; i++){
    noteSelect.option(Guitar.notes[i]);
  }
  noteSelect.selected("A");
  scaleSelect = createSelect();
  for (let i = 0; i < Object.keys(Guitar.scales).length; i++){
    scaleSelect.option(Object.keys(Guitar.scales)[i]);
  }
  scaleSelect.selected("minor");
  
  tuningSelect = createSelect();
  for (let i = 0; i < Object.keys(Guitar.tunings).length; i++){
    tuningSelect.option(Object.keys(Guitar.tunings)[i]);
  }
  tuningSelect.selected("Standard");
  background(255);
  newGuitar()
  // guitar.show();

  scaleSelect.changed(newGuitar);
  noteSelect.changed(newGuitar);
  tuningSelect.changed(newGuitar);
}

function newGuitar() {
  guitar = new Guitar(tuningSelect.value(), noteSelect.value(), scaleSelect.value());
}