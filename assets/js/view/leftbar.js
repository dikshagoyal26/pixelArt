let left_icons = {
  "fa-pencil": { tooltip: "Edit", callback: "edit" },
  "fa-eraser": { tooltip: "Erase", callback: "erase" },
  "fa-refresh": { tooltip: "Clear", callback: "clearAll" },
  "fa-eyedropper": { tooltip: "Paint", callback: "paint" },
  "fa-th": { tooltip: "Grid", callback: "grid" },
  "fa-undo": { tooltip: "Undo", callback: "undo" },
  "fa-repeat": { tooltip: "Redo", callback: "redo" },
  "fa-floppy-o": { tooltip: "Save", callback: "save" },
  "fa-download": { tooltip: "Download", callback: "download" },
  "fa-question-circle": { tooltip: "Help", callback: "help" },
};
let leftbar = document.querySelector("#leftbar");
let ul = document.createElement("ul");
let icon_keys = Object.keys(left_icons);
icon_keys.forEach((key) => {
  let li = document.createElement("li");
  let itag = document.createElement("i");
  itag.className = `fa ${key}`;
  if (left_icons[key].callback) {
    li.setAttribute("data-callback", left_icons[key].callback);
    itag.setAttribute("data-callback", left_icons[key].callback);
  }
  li.appendChild(itag);
  let tooltip = document.createElement("span");
  tooltip.className = `tooltiptext`;
  tooltip.innerHTML = left_icons[key].tooltip;
  li.appendChild(tooltip);
  li.className = "leftbar_icon";
  ul.appendChild(li);
});
leftbar.appendChild(ul);
leftbar.addEventListener("click", leftbarevents);
function leftbarevents(e) {
  let activeEl = document.querySelector(".active");
  if (activeEl) activeEl.classList.remove("active");

  if (e.target.localName == "li") e.target.classList.add("active");
  else e.target.parentNode.classList.add("active");

  if (e.target.dataset && e.target.dataset.callback) {
    let callback = e.target.dataset.callback;
    window[callback]();
  }
}
function edit() {
  console.log("edit clicked");
}
function erase() {
  console.log("erase clicked");
}
function clearAll() {
  console.log("clearAll clicked");
}
function paint() {
  console.log("paint clicked");
}
function grid() {
  console.log("grid clicked");
}
function undo() {
  console.log("undo clicked");
}
function redo() {
  console.log("redo clicked");
}
function save() {
  console.log("save clicked");
}
function download() {
  console.log("download clicked");
}
function help() {
  console.log("help clicked");
}
function openModal() {}
// function executeFunctionByName(functionName, context /*, args */) {
//   var args = Array.prototype.slice.call(arguments, 2);
//   var namespaces = functionName.split(".");
//   var func = namespaces.pop();
//   for (var i = 0; i < namespaces.length; i++) {
//     context = context[namespaces[i]];
//   }
//   return context[func].apply(context, args);
// }
