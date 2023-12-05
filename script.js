const taskInput = document.getElementById('task-input');
const addButton = document.getElementById('add-button');
const taskList = document.getElementById('task-list');

addButton.addEventListener('click',function(){
    //Getting Entered data
    const taskText = taskInput.value.trim();

    //Check if the task is not empty
    if(taskText!==""){
        //Create new li
        const listItem = document.createElement('li');
        //create span for li
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;
        taskSpan.classList.add('task-text');

        //create a delete button
        const deleteButton = document.createElement("button");
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-button');
        listItem.appendChild(taskSpan);
        listItem.appendChild(deleteButton);

        //Append the list item to the task list
        taskList.appendChild(listItem);

        //clear the input field
        taskInput.value="";
    }
});

taskList.addEventListener('click',function(event){
    if(event.target.classList.contains('delete-button')){
        const listItem = event.target.parentNode;
        taskList.removeChild(listItem);
    }
});