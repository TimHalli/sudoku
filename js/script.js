const sudoku = Sudoku.generate(51);

document
  .querySelector("#app")
  .append(sudoku.getHTML(500));
document.querySelector("#app")

