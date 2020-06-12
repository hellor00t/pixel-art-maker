
  document.addEventListener("DOMContentLoaded", () => {
    let colorTable = document.getElementsByClassName("colors")[0].children[0].children[0].children
    let canvas = document.getElementsByClassName("canvas")[0].children[0].children
    // create rows
    let rows = 50
    let newRows = 0;
    
    while(newRows < rows) {
      let newPixelRow = document.createElement("tr")
      document.querySelector("#canvas > tbody").append(newPixelRow)
      let newPixels = 0;
      while(newPixels < 60) {
        let newPixel = document.createElement("td")
        newPixel.id = "white"
        document.querySelector("#canvas > tbody").append(newPixel)
        newPixels++;
      }
      newRows++;
    }
    // fill pixels


    // Select Color
    let selectColor = (event) => brushColor = event.target.id;
    for (let item of colorTable) {
      item.addEventListener("click", selectColor)
    }
    //Draw
    let drawColor = (event) => event.target.id = brushColor;
    for (let item of canvas) {
      item.addEventListener("click", drawColor)
    }
  });

let brushColor = ""