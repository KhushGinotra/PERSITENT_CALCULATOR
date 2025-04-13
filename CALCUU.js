function entry(value) {
  var display = document.getElementById("display");
  if (display.value === "0") {
      display.value = value;
  } else {
      display.value += value;
  }
}

function clearALL() {
  document.getElementById("display").value = "0";
}

function clearone() {
  var display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}

function divide() {
  var display = document.getElementById("display");
  display.value += "/";
}

function equalto() {
  const display = document.getElementById("display");
  try {
      const expression = display.value;
      const result = eval(expression);
      display.value = result;
      saveToHistory(expression + " = " + result);
  } catch (e) {
      display.value = "Error";
  }
}

function multy() {
  var display = document.getElementById("display");
  display.value += "*";
}

function percent() {
  var display = document.getElementById("display");
  display.value += "%";
}

function minus() {
  var display = document.getElementById("display");
  display.value += "-";
}

function plus() {
  var display = document.getElementById("display");
  display.value += "+";
}

function decimale() {
  var display = document.getElementById("display");
  if (display.value.slice(-1) !== '.') {
      display.value += '.';
  }
}

function doublezero() {
  var display = document.getElementById("display");
  display.value += "00";
}

function saveToHistory(entry) {
  const historyDiv = document.getElementById("history");
  const item = document.createElement("div");
  item.textContent = entry;
  item.className = "history-item";
  historyDiv.appendChild(item);

  let history = JSON.parse(sessionStorage.getItem("calcHistory")) || [];
  history.push(entry);
  sessionStorage.setItem("calcHistory", JSON.stringify(history));
}

window.onload = function () {
  let history = JSON.parse(sessionStorage.getItem("calcHistory")) || [];
  const historyDiv = document.getElementById("history");
  history.forEach(entry => {
      const item = document.createElement("div");
      item.textContent = entry;
      item.className = "history-item";
      historyDiv.appendChild(item);
  });
};
function updateHistory(expression, result) {
  const historyDiv = document.getElementById("history");
  const item = document.createElement("div");
  item.classList.add("history-item");
  item.textContent = `${expression} = ${result}`;
  historyDiv.prepend(item);
  let history = JSON.parse(sessionStorage.getItem("calcHistory")) || [];
  history.unshift(`${expression} = ${result}`);
  sessionStorage.setItem("calcHistory", JSON.stringify(history));

  toggleClearHistoryButton(); 
}

function clearHistory() {
  sessionStorage.removeItem("calcHistory");
  const historyDiv = document.getElementById("history");
  historyDiv.innerHTML = "";
  toggleClearHistoryButton();
}

function toggleClearHistoryButton() {
  const container = document.getElementById("clear-history-container");
  const history = JSON.parse(sessionStorage.getItem("calcHistory"));
  if (history && history.length > 0) {
      container.style.display = "block";
  } else {
      container.style.display = "none";
  }
}

window.onload = () => {
  const historyDiv = document.getElementById("history");
  const savedHistory = JSON.parse(sessionStorage.getItem("calcHistory")) || [];

  savedHistory.forEach(item => {
      const div = document.createElement("div");
      div.classList.add("history-item");
      div.textContent = item;
      historyDiv.appendChild(div);
  });

  toggleClearHistoryButton();
};
