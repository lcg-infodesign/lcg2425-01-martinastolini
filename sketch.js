function setup() {
  createCanvas(400, 600);
  noLoop();
  
  let cols = 10;
  let rows = 15;
  let squareSize = 20; //20x20 dimensione quadrato
  
  //definisco quanto spazio occuperà la composizione
// in modo da sapere dove disegnare il primo quadrato
  let compositionWidth = cols * squareSize;
  let compositionHeight = rows * squareSize;
  
  let startX = (width - compositionWidth) / 2; // centrato orizzontalmente 
  let startY = (height - compositionHeight) / 2; // centrato verticalmente
  
  let colors = [
    color(255, 87, 34, 200),  // rosso trasparente
    color(255, 152, 0, 200),  // arancione trasparente
  ];
  
  background(235,228,222);
  
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      // randomizzo il colore
      let c = random(colors);
      fill(c);
      noStroke();
      
      // voglio che si sovrappongano leggermente
      let offsetX = random(-3, 3);
      let offsetY = random(-3, 3);
      
      // disegno il primo quadrato e di conseguenza tutti gli altri
      rect(startX + x * squareSize + offsetX, startY + y * squareSize + offsetY, squareSize, squareSize);
    }
  }
}
