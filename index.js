let bodyPage = document.querySelector('#bodyPage')
let numberItem = document.querySelector('#numberItem')
let click = document.querySelector('#click')
console.log('hi');
let imageContainer = document.querySelector('#imageContainer')
let showTasksButton = document.querySelector('#showTasks')
let showTasksAdd = document.querySelector('#showTasksContainer')
let deleteTasks = document.querySelector('#deleteTasks')


createTasks('HowAreYou????').then((data) =>{
  console.log(data)
} )

let onDataReceived = (data) => {
  data.forEach(el => {
    const img = document.createElement('img');
    img.src  = el.thumbnail
    imageContainer.appendChild(img)
  });
} 

let onTasksReceived = (task) => {
  
  showTasksAdd.innerHTML = ''
 
  task.forEach(task => {
    const li = document.createElement('li')
    li.innerHTML = task.title
    showTasksAdd.appendChild(li)
  })
}

showTasksButton.onclick = () =>{
  const promise = getTasks()
  promise
  .then(onTasksReceived)
}
click.onclick = () => { 
  const promise = getImages(numberItem.value,)
   promise
   .then(onDataReceived)
 }
 deleteTasks.onclick = () => {
   let kays = []
   let promise = getTasks()
   promise.then((task) => {
    task.forEach(el => {
      kays.push(el.id);
    })
    let theLastEll = kays[kays.length - 1]
    deleteTask(theLastEll)
    promise.then(onTasksReceived)

  
   })
 }