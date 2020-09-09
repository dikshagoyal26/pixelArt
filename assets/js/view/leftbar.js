let left_icons = {
  "fa-pencil": { tooltip: "Edit", data: "", modal: false },
  "fa-eraser": { tooltip: "Erase", data: "", modal: false },
  "fa-refresh": { tooltip: "Clear", data: "", modal: false },
  "fa-eyedropper": { tooltip: "Paint", data: "", modal: false },
  "fa-th": { tooltip: "Grid", data: "", modal: false },
  "fa-undo": { tooltip: "Undo", data: "", modal: false },
  "fa-repeat": { tooltip: "Redo", data: "", modal: false },
  "fa-floppy-o": { tooltip: "Save", data: "", modal: false },
  "fa-download": { tooltip: "Download", data: "", modal: false },
  "fa-question-circle": { tooltip: "Help", data: "", modal: false },
};
let leftbar = document.querySelector("#leftbar");

// let frag = document.createDocumentFragment();
let ul = document.createElement("ul");
let icon_keys = Object.keys(left_icons);
icon_keys.forEach((key) => {
  let li = document.createElement("li");
  let itag = document.createElement("i");
  itag.className = `fa ${key}`;
  li.appendChild(itag);
  let tooltip = document.createElement("span");
  tooltip.className = `tooltiptext`;
  tooltip.innerHTML = left_icons[key].tooltip;
  li.appendChild(tooltip);
  li.className = "leftbar_icon";
  // li.tooltip = left_icons[key].tooltip;
  ul.appendChild(li);
});
leftbar.appendChild(ul);
leftbar.addEventListener("click", leftbarevents);
function leftbarevents() {
  console.log(event);
}
