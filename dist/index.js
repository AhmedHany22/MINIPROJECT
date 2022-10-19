"use strict";
const todos = localStorage.getItem("todoArr");
let todoArr = todos ? JSON.parse(todos) : [];
const saveTodos = () => {
    localStorage.setItem("todoArr", JSON.stringify(todoArr));
};
// Type Non_Null Assertion : the ! mark assure it'snot null
const btn = document.getElementById("btn");
btn.addEventListener("click", () => console.log('New Todo "' + input.value + '" added'));
// const btn = document.getElementById("btn");
// btn?.addEventListener("click", () => console.log("Hello TS"));
// Type Assertion : it doesn't change the type of mestry
let mastery = "hi hi hi";
const numChars = mastery.length;
const input = document.getElementById("todoinput");
const form = document.querySelector("form"); // Syntax only works to select 1st element
const list = document.querySelector(".card-body");
// 2 ways to use function
// 1 : the (e) is defined in the handleSubmit function
function handleSubmit(e) {
    e.preventDefault();
    console.log("Submitted !");
}
form.addEventListener("submit", handleSubmit);
// 2: the (e) is auto defined by the eventListener
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const newTodo = { title: input.value, status: false };
    todoArr.push(newTodo);
    ctreateNewTodo(newTodo);
    // Save to the local storage
    saveTodos();
    input.value = "";
});
// Creating new Todo item
const ctreateNewTodo = (newTodo) => {
    const todoitem = document.createElement("div");
    todoitem.className = "form-check mb-3 d-flex";
    const inputCheckbox = document.createElement("input");
    inputCheckbox.className = "form-check-input";
    inputCheckbox.type = "checkbox";
    inputCheckbox.id = newTodo.title;
    inputCheckbox.checked = newTodo.status;
    inputCheckbox.addEventListener("change", () => {
        newTodo.status = inputCheckbox.checked;
        saveTodos();
    });
    const label = document.createElement("label");
    label.className = "form-check-label pl-1 flex-grow-1";
    label.htmlFor = newTodo.title;
    label.textContent = newTodo.title;
    const i = document.createElement("i");
    i.className = "text-danger px-1 bi bi-trash3";
    i.addEventListener("click", () => {
        todoArr = todoArr.filter((object) => {
            return object.title !== newTodo.title;
        });
        saveTodos();
        document.location.reload();
    });
    todoitem.append(inputCheckbox);
    todoitem.append(label);
    todoitem.append(i);
    list === null || list === void 0 ? void 0 : list.append(todoitem);
};
todoArr.forEach((todo) => ctreateNewTodo(todo));
//  Add the today date
const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "WEDNESDAY",
    "Thursday",
    "Friday",
    "Saturday",
];
const day = document.getElementById("day");
const date = document.getElementById("date");
const n = new Date();
const y = n.getFullYear();
const m = n.getMonth() + 1;
const d = n.getDay();
const dnumber = n.getDate();
day.textContent = weekday[d];
const p = document.createElement("p");
p.className = "text-gray fst-italic mb-0";
date.textContent = dnumber + " " + monthNames[m - 1] + " " + y;
