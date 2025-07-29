let button=document.querySelector('.toggle');
let nav=document.querySelector('.navbar');
let toggleframe=document.querySelector('.toggleframe');
let navtext=document.querySelectorAll('.nav li a');
let navlogo=document.querySelector('.logo');
let body=document.querySelector('body');
let box=document.querySelectorAll('.box');
let circle=document.querySelectorAll('.circle');
let h2=document.querySelectorAll('h2');
let cont=document.querySelector('.container');
let add=document.querySelector('.add');
let index=0; //0 for light and 1 for dark
const arrow = document.querySelector('.arrow');
let checkboxs=document.querySelectorAll('task');

arrow.animate([
    {left: '0'},
    {left: '30px'},
    {left: '0'}
  ],{
    duration: 1500,
    iterations: Infinity
  });
button.addEventListener('click',function(){
    body.classList.toggle('dark-mode');
    index = body.classList.contains('dark-mode') ? 1 : 0;
    button.style.transform = index ? 'translateX(30px)' : 'translateX(0px)';
});
function updatepercent(taskid){
  let checkbox = document.querySelectorAll(`.task[group="${taskid}"]`);
  let circle = document.querySelector(`.circle-${taskid}`);
  let percent = document.querySelectorAll(`.ptext-${taskid}`);
  let total = checkbox.length;
  let checked =Array.from(checkbox).filter(checkbox => checkbox.checked).length;
  let percentage = total === 0 ? 0 : Math.floor((checked / total) * 100);
  if(circle) circle.style.background = `conic-gradient(#4caf50 0% ${percentage}%, #e0e0e0 ${percentage}% 100%)`;
  percent.forEach(percent => percent.textContent = percentage + '%');
}
document.querySelectorAll('.task').forEach(checkbox => {
  checkbox.addEventListener('change', function() {
    updatepercent(this.getAttribute('group'));
  })
});
document.querySelectorAll('.box').forEach(box => {
  let firstTask = box.querySelector('.task');
  if(firstTask) updatepercent(firstTask.getAttribute('group'));
});


