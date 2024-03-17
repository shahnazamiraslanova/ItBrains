const addInput = document.getElementsByClassName("addInput")[0];
const submitToDo = document.getElementsByClassName("submitToDo")[0];
const listOfToDoes = document.getElementsByClassName("listOfToDoes")[0];
const changeMode = document.getElementById("mode");
const addingToDo = document.getElementsByClassName("addingToDo")[0];
let atLight = true;
// console.log(addInput);

const addToDo = () => {
    const todoText = addInput.value.trim();
    if (todoText !== "") {
        const listItem = document.createElement("li");
        listItem.textContent = todoText;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "❌"; 
        listItem.appendChild(deleteButton);

        deleteButton.addEventListener("click", () => {
            listItem.remove();
        });

        listOfToDoes.appendChild(listItem);

        addInput.value = "";
    } else {
        alert("Please enter a valid to-do item!");
    }
};

submitToDo.addEventListener("click", addToDo);

const chMode = () => {
    atLight = !atLight;
    if (atLight) {
        changeMode.classList.remove("darkMode");
        addingToDo.classList.remove("darkMode");
        listOfToDoes.classList.remove("darkMode");

        changeMode.classList.add("changeMode");
        addingToDo.classList.add("changeMode");
        listOfToDoes.classList.add("changeMode");
    } else {
        changeMode.classList.remove("changeMode");
        addingToDo.classList.remove("changeMode");
        listOfToDoes.classList.remove("changeMode");

        changeMode.classList.add("darkMode");
        addingToDo.classList.add("darkMode");
        listOfToDoes.classList.add("darkMode");
    }
};

changeMode.addEventListener("click", chMode);
