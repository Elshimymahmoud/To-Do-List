const heart =document.getElementsByClassName("icon-heart");
const card_task=document.querySelector(".cards");
const button =document.querySelector(".task_upload")
const input =document.querySelector(".input");
const trash =document.querySelector(".icon-trash-o icon");

button.addEventListener("click",(eo) => {
eo.preventDefault();
const x= 
`
<div class="cardone">
<span class="icon-star icon" style="padding: 2rem 2rem"> </span>
<p>${input.value}</p>
<div style="padding: 2rem 1rem">
<span class="icon-trash-o icon" style="padding: 2rem 2rem"></span>
  <span class="icon-sad2 icon" style="padding: 2rem 2rem"></span>

</div>

`
card_task.innerHTML += x ;
});


card_task.addEventListener("click",(eo) => {
    if(eo.target.classList=="icon-trash-o icon"){
        eo.target.parentElement.parentElement.remove();
    }
    
    else if(eo.target.classList=="icon-sad2 icon")
    
    {   eo.target.classList.add("crash")
        const x=`  <span class="  icon-heart  " style="position: relative;
        "></span>`

    eo.target.parentElement.innerHTML +=x;
}
    
})

card_task.addEventListener("click",(eo) => {
    if(eo.target.classList=="  icon-heart  "){
        eo.target.classList.add("crash");
        const TRAH=`<span class="icon-sad2 icon" style=""></span>`
        eo.target.parentElement.innerHTML +=TRAH;
    }
})
    