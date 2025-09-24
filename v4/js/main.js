document.addEventListener('DOMContentLoaded',()=>{
  const toggle=document.querySelector('.nav-toggle');
  const nav=document.querySelector('.nav-links');
  if(toggle){toggle.addEventListener('click',()=>{nav.style.display=nav.style.display==='flex'?'':'flex';});}
  const estimateBtn=document.getElementById('estimateBtn');
  if(estimateBtn){
    estimateBtn.addEventListener('click',()=>{
      const veg=document.getElementById('veg').value, act=document.getElementById('activity').value;
      let score=(veg==='low'?40:veg==='medium'?20:5)+(act==='high'?40:act==='medium'?20:5);
      const el=document.getElementById('estimateResult');
      el.textContent=score>60?'High risk!':score>30?'Moderate risk':'Low risk';
    });
  }
  const rain=document.getElementById('rain'),slope=document.getElementById('slope');
  if(rain&&slope){
    const rv=document.getElementById('rainVal'),sv=document.getElementById('slopeVal');
    rain.addEventListener('input',()=>rv.textContent=rain.value);
    slope.addEventListener('input',()=>sv.textContent=slope.value);
    document.getElementById('erosionBtn').addEventListener('click',()=>{
      const sens=(rain.value/100*0.6*100 + slope.value/60*0.4*100).toFixed(1);
      document.getElementById('erosionResult').textContent=sens>50?'High sensitivity':sens>25?'Moderate sensitivity':'Low sensitivity';
    });
  }
});
