const sudoku = Sudoku.generate(51);

document
  .querySelector("#app")
  .append(sudoku.getHTML(500));
document.querySelector("#app")



function toggleBg() {
  for (const cell of sudoku.body) {
    if (!cell.started) {
      cell.number = 0;
    }
  }
}