const taskContainer = document.getElementById('taskContainer');
const inputBox = document.getElementById('inputBox');



function addTask(){
  if(inputBox.value == ''){
    alert('you must enter a text!')
  }
  else{
    let li = document.createElement('li');
    li.innerHTML = inputBox.value;
    taskContainer.appendChild(li);
    let span = document.createElement('span');
    span.innerHTML = "\u00d7";
    li.appendChild(span)
  }
  inputBox.value = '';
  saveTask()
}

taskContainer.addEventListener('click',(e)=>{
  if(e.target.tagName === 'LI'){
    e.target.classList.toggle('checked');
    saveTask()
  }else if(e.target.tagName === 'SPAN'){
    e.target.parentElement.remove();
    saveTask()
  } 
},false)

function saveTask(){
  localStorage.setItem('data',taskContainer.innerHTML);
}

function showTask(){
  taskContainer.innerHTML = localStorage.getItem('data');
}
showTask();