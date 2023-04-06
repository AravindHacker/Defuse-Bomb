let timerEl=document.getElementById("timer");
let countdown=10;
let uniqueId=setInterval(function(){
    countdown=countdown-1;
    timerEl.textContent=countdown;
    if(countdown===0)
    {
        timerEl.textContent="BooM";
        clearInterval(uniqueId);
    }
},1000);
let defuseEl=document.getElementById("defuse");
defuseEl.addEventListener("keydown",function(event)
{
    let bombText=defuseEl.value;
    if(bombText==="defuse"&&event.key==="Enter"&&countdown!==0)
    {
        timerEl.textContent="you did it!";
        clearInterval(uniqueId);
    }
});