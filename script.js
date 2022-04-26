import checkComplete from "./components/checkComplete.js";
import deleteTaskIcon from "./components/deleteTask.js";

// Immediately Invoked Function Expresion (IIFE)
(() => {

    

    const btn = document.querySelector("[data-form-btn]");

    const createTask = (event) => {
        event.preventDefault();
        const input = document.querySelector("[data-form-input]");
        const value = input.value;
        const list = document.querySelector("[data-list]")
        const task = document.createElement("li");
        task.classList.add("card");
        input.value = "";

        const taskContent = document.createElement("div");
        const titleTask = document.createElement("spam");
        titleTask.classList.add("task");
        titleTask.innerText = value;
        taskContent.appendChild(checkComplete());
        taskContent.appendChild(titleTask);
        
        //task.innerHTML = content;
        task.appendChild(taskContent);
        task.appendChild(deleteTaskIcon());
        list.appendChild(task);
    };


    // Arrow functions o funciones anónimas
    btn.addEventListener("click", createTask);

})();

// backticks ``
