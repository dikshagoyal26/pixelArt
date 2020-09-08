let left_icons = {
  "fa-pencil": { tooltip: "Edit" },
  "fa-eraser": { tooltip: "Erase" },
  "fa-refresh": { tooltip: "Clear" },
  "fa-eyedropper": { tooltip: "Paint" },
  "fa-th": { tooltip: "Grid" },
  "fa-undo": { tooltip: "Undo" },
  "fa-repeat": { tooltip: "Redo" },
  "fa-floppy-o": { tooltip: "Save" },
  "fa-download": { tooltip: "Download" },
  "fa-question-circle": { tooltip: "Help" },
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
  li.tooltip = left_icons[key].tooltip;
  ul.appendChild(li);
});
leftbar.appendChild(ul);
