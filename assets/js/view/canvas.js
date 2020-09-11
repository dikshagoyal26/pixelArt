// class Board {
//   constructor(el, x, y) {
//     this.el = document.querySelector(el);
//     this.x = x;
//     this.y = y;
//     this.createBoard();
//   }
// }
function Board(el, x, y, dim) {
  this.el = document.querySelector(el);
  this.x = x;
  this.y = y;
  this.createBoard();
  this.bindEvents();
  this.color = "#000000";
  this.dimenEl = document.querySelector(dim);
  this.drag = false;
}
Board.prototype.createBoard = function () {
  let frag = document.createDocumentFragment();
  for (let i = 1; i <= this.x; i++) {
    let row = document.createElement("div");
    row.className = "row";
    for (let j = 1; j <= this.y; j++) {
      let col = document.createElement("div");
      col.className = "col";
      col.setAttribute("data-attr", `${i}.${j}`);
      row.appendChild(col);
    }
    frag.appendChild(row);
  }
  this.el.innerHTML = "";
  this.el.appendChild(frag);
  return;
};
Board.prototype.bindEvents = function () {
  this.el.addEventListener("mouseup", () => {
    this.drag = false;
  });
  this.el.addEventListener("mousedown", () => {
    this.drag = true;
    event.target.style.background = this.color;
  });
  this.el.addEventListener("mouseover", () => {
    let rowcol = event.target.getAttribute("data-attr").split(".");
    if (this.drag) event.target.style.background = this.color;
    this.dimenEl.innerHTML = `<span>Row: ${rowcol[0]} Col: ${rowcol[1]}</span>`;
  });
};
new Board("#canvasbox", 30, 50, "#rowcol");
