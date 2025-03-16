let gameSeq=[];
let userSeq=[];
let start=false;
let level=0;
let color=["yellow","red","green","blue"];
let h4=document.querySelector('h4');
let p=document.querySelector('p');
let h5=document.querySelector('h5');
let hs=0;
document.addEventListener('keypress',()=>
{
    if(!start)
    {
        console.log("Started")
        start=true
        levelup();
    }
})

function flashbtn(btn)
{
    btn.classList.add('flash');
    setTimeout(() =>
    {
        btn.classList.remove('flash');
    },250);
}
function levelup()
{
    userSeq=[];
    level++;
    h4.innerText= `Level ${level}`;
    let ranidx=Math.floor(Math.random()*4);
    let rancol=color[ranidx];
    let ranbtn=document.querySelector(`.${rancol}`);
    gameSeq.push(rancol);
    console.log(gameSeq);
    flashbtn(ranbtn);
}
function btnpress()
{
    let btn=this;
    let color=btn.getAttribute("id");
    userSeq.push(color);
    flashbtn(this);
    check(userSeq.length-1);
}
function check(idx)
{
    if(gameSeq[idx] === userSeq[idx])
    {
        if(gameSeq.length == userSeq.length)
        {
            setTimeout(levelup,1000);
        }
    }
    else{
        h4.innerHTML=`Game Over! Your score was <b>${level-1}</b> <br> Press any key to start `;
        document.querySelector('body').style.backgroundColor="red";
        setTimeout(()=>
        {
            document.querySelector('body').style.backgroundColor="white";
        },150);
        hs=Math.max(hs,level-1);
        h5.innerText=`HS:${hs}`;
        reset();
    }
}
let all=document.querySelectorAll('.btn');

for(btn of all)
{
    btn.addEventListener('click',btnpress);
}
function reset()
{
    start=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}