class Guitar{
  static notes = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];
  static scales = {
    "minor": [0, 2, 3, 5, 7, 8, 10],
    "major": [0, 2, 4 ,5, 7, 9, 11]
  }
  static tunings = {
    "Standard": ["E", "A", "D", "G", "B", "E"],
    "Drop D": ["D", "A", "D", "G", "B", "E"],
    "Drop C": ["C", "G", "C", "F", "A", "D"],
    "Open D": ["D", "A", "D", "F#", "A", "D"],
  };

  static getScale(note, scaleType) {
    scaleType = Guitar.scales[scaleType];
    var noteIndex = Guitar.notes.indexOf(note);
    var scale = [];
    for (let i = 0; i < scaleType.length; i++){
      scale.push(Guitar.notes[(scaleType[i] + noteIndex) % Guitar.notes.length]);
    }
    return scale;
  }

  constructor(tuning, note, scale) {
    this.fretCount = 23;
    this.fretSize = width / this.fretCount;
    this.stringCount = 6;
    this.tuning = Guitar.tunings[tuning];
    this.fretboard = [];
    this.scale = Guitar.getScale(note, scale);
    for (let i = 0; i < this.stringCount; i++){
      var string = [this.tuning[i]];
      var noteIndex = Guitar.notes.indexOf(this.tuning[i]);
      for (let j = 1; j < this.fretCount; j++){
        string.push(Guitar.notes[(j + noteIndex) % Guitar.notes.length]);
      }
      this.fretboard.push(string.reverse());
    }
    this.fretboard = this.fretboard.reverse();
    this.show();
  }
  show() {
    background(255);
    fill(200);
    noStroke();
    ellipse(width - (this.fretSize * 3.5), height / 2, 25, 25);
    ellipse(width - (this.fretSize * 5.5), height / 2, 25, 25);
    ellipse(width - (this.fretSize * 7.5), height / 2, 25, 25);
    ellipse(width - (this.fretSize * 9.5), height / 2, 25, 25);

    ellipse(width - (this.fretSize * 12.5), height / 6, 25, 25);
    ellipse(width - (this.fretSize * 12.5), 5 * height / 6, 25, 25);

    ellipse(width - (this.fretSize * 15.5), height / 2, 25, 25);
    ellipse(width - (this.fretSize * 17.5), height / 2, 25, 25);
    ellipse(width - (this.fretSize * 19.5), height / 2, 25, 25);
    ellipse(width - (this.fretSize * 21.5), height / 2, 25, 25);
	  rect(width - this.fretSize, 0, width, height);
    for (let i = 0; i < this.fretboard.length; i++){
      for (let j = 0; j < this.fretboard[i].length; j++){
        if (this.scale.includes(this.fretboard[i][j])) {
          fill(0, 255, 0);
          rect(j * this.fretSize, i * (height / 6) + (height / 24), this.fretSize, (height / 12));
          
        }
        fill(0);
        
        text(this.fretboard[i][j], j * this.fretSize, i * (height / 6) + (height / 24) + textSize());
      }
    }

    noStroke();
    
    for (let i = 0; i < this.fretCount; i++){
      stroke(150);
      strokeWeight(2);
      line(i * this.fretSize, 0, i * this.fretSize, height);
    }
    for (let i = 0; i < this.stringCount; i++){
      var stringY = (i+1) * (height / 6) - height / 12;
      stroke(0);
      strokeWeight(i+2);
      line(0, stringY, width, stringY);
    }

    

  }
    
}