const taskAddInput = document.getElementById("taskAddInput")
const addTask = document.getElementById("addTask")
const addTaskText = document.getElementById("addTaskText")
const addTaskNumber = document.getElementById("addTaskNumber")
const addTaskDelete = document.getElementById("addTaskDelete")
const deleteAllTaskBtn = document.getElementById("deleteAllTaskBtn")
const taskAddBtn = document.getElementById("taskAddBtn")
const classListForLi = ["flex", "items-center", "justify-between", "p-2", "rounded-lg", "bg-white", "shadow-sm", "hover:shadow-md", "hover:-translate-y-[2px]", "transition", "duration-200",]
const classListForDiv = ["flex", "items-center", "gap-2"]
const classListForInput = ["accent-purple-600"]

taskAddBtn.addEventListener("click", ()=>{
    let li = document.createElement("li")
    addTask.appendChild(li)
    li.classList.add(...classListForLi)
    let div = document.createElement("div")
    li.appendChild(div)
    div.classList.add(...classListForDiv)
    let input = document.createElement("input")
    input.type = "checkbox"
    input.classList.add(...classListForInput)
    div.appendChild(input)
    let span = document.createElement("span")
    span.classList.add("text-sm")
    div.appendChild(span)
    



    span.innerText = taskAddInput.value
    
    
})