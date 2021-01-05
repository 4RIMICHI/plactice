import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  const div = document.createElement("div");
  div.className = "list-row";
  const li = document.createElement("li");
  li.innerText = inputText;
  div.appendChild(li);
  document.getElementById("incomplete").appendChild(div);

  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    const completeTarget = completeButton.parentNode;
    document.getElementById("A").appendChild(completeTarget);
  });
  div.appendChild(completeButton);

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    const deleteTarget = deleteButton.parentNode;
    document.getElementById("incomplete").removeChild(deleteTarget);
  });
  div.appendChild(deleteButton);
};

const completeAdd = () => {};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
