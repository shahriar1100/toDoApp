// const taskAddInput = document.getElementById("taskAddInput")
// const addTask = document.getElementById("addTask")
// // if user put value and click enter then user valu add in plan list section
// taskAddInput.addEventListener("keypress", function (e) {
//     if (e.key === "Enter") {
//         taskAddBtn.click();
//     }
// });


// const addTaskText = document.getElementById("addTaskText")
// const addTaskNumber = document.getElementById("addTaskNumber")
// const addTaskDelete = document.getElementById("addTaskDelete")
// const deleteTask = document.getElementById("deleteTask")
// const taskAddBtn = document.getElementById("taskAddBtn")
// const classListForLi = ["flex", "items-center", "justify-between", "p-2", "rounded-lg", "bg-white", "shadow-sm", "hover:shadow-md", "hover:-translate-y-[2px]", "transition", "duration-200",]
// const classListForDiv = ["flex", "items-center", "gap-2"]
// const classListForInput = ["accent-purple-600"]
// const classListForButton = ["text-red-400", "hover:text-red-600", "transition"]

// taskAddBtn.addEventListener("click", () => {
//     if (taskAddInput.value === "") {
//         alert("please add your note")
//     } else {
//         let li = document.createElement("li")
//         addTask.appendChild(li)
//         li.classList.add(...classListForLi)
//         let div = document.createElement("div")
//         li.appendChild(div)
//         div.classList.add(...classListForDiv)
//         let input = document.createElement("input")
//         input.type = "checkbox"
//         input.classList.add(...classListForInput)
//         div.appendChild(input)
//         let span = document.createElement("span")
//         span.classList.add("text-sm")
//         div.appendChild(span)
//         let button = document.createElement("button")
//         button.innerText = "✕"
//         button.classList.add(...classListForButton)
//         li.appendChild(button)

//         input.addEventListener("change", function () {
//             if (input.checked) {
//                 span.classList.add("line-through", "text-gray-400")
//             } else {
//                 span.classList.remove("line-through", "text-gray-400")
//             }

//         })

//         button.addEventListener("click", function () {
//             li.classList.add("scale-90", "opacity-0")
//             setTimeout(() => li.remove(), 200)
//         })

//         span.innerText = taskAddInput.value
//         taskAddInput.value = ""
//     }

// })

// deleteTask.addEventListener("click", function () {
//     addTask.innerHTML = "";
// })


//  clean structure js code

// ====== Elements ======
const taskAddInput = document.getElementById("taskAddInput");
const addTask = document.getElementById("addTask");
const deleteTask = document.getElementById("deleteTask");
const taskAddBtn = document.getElementById("taskAddBtn");

// ====== Class Lists ======
const classListForLi = [
  "flex","items-center","justify-between","p-2","rounded-lg",
  "bg-white","shadow-sm","hover:shadow-md","hover:-translate-y-[2px]",
  "transition","duration-200"
];

const classListForDiv = ["flex","items-center","gap-2"];
const classListForInput = ["accent-purple-600"];
const classListForButton = ["text-red-400","hover:text-red-600","transition"];


// ====== Event Listeners ======

// Add task (button click)
taskAddBtn.addEventListener("click", handleAddTask);

// Add task (Enter press)
taskAddInput.addEventListener("keydown", function(e){
  if(e.key === "Enter"){
    e.preventDefault();
    handleAddTask();
  }
});

// Clear all
deleteTask.addEventListener("click", function(){
  addTask.innerHTML = "";
});


// ====== Functions ======

// Main handler
function handleAddTask(){
  const value = taskAddInput.value.trim();

  if(value === ""){
    alert("please add your note");
    return;
  }

  createTask(value);
  taskAddInput.value = "";
}


// Create Task UI
function createTask(text){
  const li = document.createElement("li");
  li.classList.add(...classListForLi);

  const div = document.createElement("div");
  div.classList.add(...classListForDiv);

  const input = document.createElement("input");
  input.type = "checkbox";
  input.classList.add(...classListForInput);

  const span = document.createElement("span");
  span.classList.add("text-sm");
  span.innerText = text;

  const button = document.createElement("button");
  button.innerText = "✕";
  button.classList.add(...classListForButton);

  // append structure
  div.appendChild(input);
  div.appendChild(span);
  li.appendChild(div);
  li.appendChild(button);
  addTask.appendChild(li);

  // checkbox behavior
  input.addEventListener("change", function(){
    span.classList.toggle("line-through");
    span.classList.toggle("text-gray-400");
  });

  // delete single task
  button.addEventListener("click", function(){
    li.classList.add("scale-90","opacity-0");
    setTimeout(()=> li.remove(), 200);
  });
}