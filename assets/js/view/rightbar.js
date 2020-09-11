const _colors = [
  "#050505",
  "#ff5f40",
  "#ffa931",
  "#00bcd4",
  "#bac964",
  "#c8d5b9",
  "#6f4a8e",
  "#fbe2e5",
  "#065446",
  "#2bb2bb",
  "#ec0101",
  "#fff591",
];
let colors = document.querySelector(".colors");
let themes = document.querySelector(".themes");

_colors.forEach((col, index) => {
  colors.innerHTML += `<span class="color" style="background-color:${col};" data-col="${col}"></span>`;
  if (index * 2 <= _colors.length)
    themes.innerHTML += `<span class="color" style="background-color:${col};" theme-col="${col}"></span>`;
});
