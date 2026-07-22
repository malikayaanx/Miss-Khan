
const screens=[...document.querySelectorAll('.screen')];
let idx=0;
function show(i){screens[idx].classList.remove('show');idx=i;screens[idx].classList.add('show')}
setTimeout(()=>{show(1);typeAll()},3000);
document.querySelector('.next').onclick=()=>show(2);
function type(el,t,s=32){let i=0;const n=setInterval(()=>{el.textContent=t.slice(0,++i);if(i>=t.length)clearInterval(n)},s)}
function typeAll(){document.querySelectorAll('.type').forEach((e,k)=>setTimeout(()=>type(e,e.dataset.text),k*2200))}
const env=document.getElementById('envelope');
env.onclick=()=>{env.classList.add('open');setTimeout(()=>{show(3);moveNo()},2200)}
const no=document.getElementById('no');
function moveNo(){no.style.left=(30+Math.random()*(innerWidth-150))+'px';no.style.top=(30+Math.random()*(innerHeight-80))+'px'}
document.addEventListener('mousemove',e=>{if(idx!==3)return;const r=no.getBoundingClientRect();const d=Math.hypot(e.clientX-r.left-r.width/2,e.clientY-r.top-r.height/2);if(d<150)moveNo()});
moveNo();
yes.onclick=()=>{document.querySelector('.actions').style.display='none';end.style.display='block'}
function petal(){const p=document.createElement('div');p.className='petal';p.textContent='🌹';p.style.left=Math.random()*100+'vw';p.style.setProperty('--dx',(Math.random()*180-90)+'px');let t=7+Math.random()*5;p.style.animationDuration=t+'s';document.body.appendChild(p);setTimeout(()=>p.remove(),t*1000)}
setInterval(petal,700);
