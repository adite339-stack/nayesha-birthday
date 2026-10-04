const $=s=>document.querySelector(s);
const opening=$('#opening'), main=$('#main'), music=$('#music'), musicBtn=$('#musicBtn');
$('#openGift').addEventListener('click',()=>{
  opening.style.display='none'; main.classList.remove('hidden');
  document.body.style.overflow='auto';
  try{music.play(); musicBtn.textContent='♫ Music on'}catch(e){}
  petals();
});
musicBtn.addEventListener('click',()=>{
  if(music.paused){music.play();musicBtn.textContent='♫ Music on'}else{music.pause();musicBtn.textContent='♫ Play music'}
});
function petals(){
  const box=$('.petals');
  for(let i=0;i<28;i++){
    const p=document.createElement('span');p.className='petal';p.textContent=['✿','❀','•'][Math.floor(Math.random()*3)];
    p.style.left=Math.random()*100+'%';p.style.setProperty('--x',(Math.random()*240-120)+'px');
    p.style.animationDuration=(5+Math.random()*7)+'s';p.style.animationDelay=(Math.random()*3)+'s';box.appendChild(p);
    setTimeout(()=>p.remove(),15000);
  }
}
const slides=$('.slides'), imgs=[...slides.querySelectorAll('img')], dots=$('#dots');let idx=0;
imgs.forEach((_,i)=>{const d=document.createElement('span');d.className='dot'+(i===0?' active':'');d.onclick=()=>go(i);dots.appendChild(d)});
function go(i){idx=(i+imgs.length)%imgs.length;slides.scrollTo({left:slides.clientWidth*idx,behavior:'smooth'});[...dots.children].forEach((d,n)=>d.classList.toggle('active',n===idx))}
$('.next').onclick=()=>go(idx+1);$('.prev').onclick=()=>go(idx-1);
let timer=setInterval(()=>go(idx+1),4200);slides.addEventListener('pointerdown',()=>clearInterval(timer));
$('#wishBtn').onclick=()=>{const t=$('#toast');t.classList.add('show');petals();setTimeout(()=>t.classList.remove('show'),3200)};
$('#bigGift').onclick=()=>{document.querySelector('.surprise').scrollIntoView({behavior:'smooth'});$('#wishBtn').focus()};
function clock(){const d=new Date(),s=d.getSeconds(),m=d.getMinutes(),h=d.getHours()%12;$('.second').style.transform=`rotate(${s*6}deg)`;$('.minute').style.transform=`rotate(${m*6+s*.1}deg)`;$('.hour').style.transform=`rotate(${h*30+m*.5}deg)`}
setInterval(clock,1000);clock();
