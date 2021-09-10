// async function postTasks() {
//   const posts = await postData();
//   return posts;
// }
// console.log(postData());

async function getTasks() {
  const todos = await getData();
  addToDoToDom(todos);
}
getTasks(); //functie callen moet dus hier en niet in de api-client

// define elements
const addButton = document.querySelector("#addTask");
const checkBox = document.createElement("checkBox");
const inputNewTask = document.querySelector("#taskField");
const todoList = document.querySelector(".tasks");
const buttonRemove = document.createElement("button");

//main addDom function
const addToDoToDom = (todos) => {
  todoList.innerHTML = "";
  todos.forEach((task) => {
    const child = document.createElement("li");
    const child2Input = document.createElement("input");
    const child2Label = document.createElement("label");
    child.classList = "listItem";
    child.id = task._id;
    child2Input.type = "checkbox";
    child2Input.name = task._id;
    child2Label.innerHTML = task.description;
    buttonRemove.type = "reset";
    todoList.appendChild(child);
    child.appendChild(child2Input);
    child.appendChild(child2Label);
    child.appendChild(buttonRemove);
  });
  // console.log(child);
};
// addToDoToDom(); //deze call moet aangeroepen worden in de Getfunctie met parameters de betreffende items van de getfunctie

const addNewToDo = async () => {
  if (inputNewTask.value === "") {
    alert("veld mag niet leeg zijn");
    return;
  }
  const todo = {
    description: inputNewTask.value,
    done: false,
  };
  await postData(todo);
  await getTasks();
};

const removeItemFromDom = async () => {
  const thisListItem = this.parentNode;
  console.log(thisListItem);
  const ul = thisListItem.parentNode;
  ul.removeChild(thisListItem);
  await delData();
  return;
};

addButton.addEventListener("click", addNewToDo);
buttonRemove.addEventListener("click", removeItemFromDom);
