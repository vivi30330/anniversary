/* ===== 小測驗 ===== */
const quiz=[
 {q:"第一次一起過夜的外縣市？",a:["台中","台南","苗栗"],c:0},
 {q:"99的五專及碩士科系分別是什麼？",a:["醫檢科/生命科學系-生理組","醫管科/生命科學系-生理組","醫檢科/生技醫藥"],c:0},
 {q:"99的鞋子穿幾號？",a:["23","23.5","22.5"],c:1}
];

let qi=0;

function showQ(){
 const q=quiz[qi];
 document.getElementById("q").textContent=q.q;
 const o=document.getElementById("opts");
 o.innerHTML="";
 q.a.forEach((t,i)=>{
  const b=document.createElement("button");
  b.textContent=t;
  b.onclick=()=>{
    if(i===q.c){
      qi++;
      qi<quiz.length?showQ():startMain();
    }else{
      alert("你死定了");
    }
  };
  o.appendChild(b);
 });
}

function startMain(){
 document.getElementById("quiz").style.display="none";
 const main=document.getElementById("main");
 main.style.visibility="visible";
 main.style.opacity="1";
 document.getElementById("bgm").play();
}

/* ===== 輪播 ===== */
const loves=[
"看屁",
"一直睡一直睡",
"我的珍藏都被你看光光了",
"堅持下去✊",
"也不是",
"多點幾次總會中獎的",
"猜錯了",
"按看看右邊那張",
"哈哈哈哈不是這個 再按看看右邊那張😈",
"嗶嗶嗶啵啵 𖤣𖥧𖥣｡𖥧𖧧"
];

const carousel=document.getElementById("carousel");

for(let i=0;i<10;i++){
 const card=document.createElement("div");
 card.className="card";
 card.style.transform=`rotateY(${i*36}deg) translateZ(380px)`;

 card.innerHTML=`
  <div class="face"><img src="${i+1}.jpg"></div>
  <div class="face back">${loves[i]}</div>
 `;

 card.onclick=()=>{
  card.classList.toggle("flip");
  if(i===9){
    setTimeout(()=>{
      alert("我想跟你說：\n\n謝謝你一直在我身邊。\n未來我也想一直牽著你。");
    },500);
  }
 };

 carousel.appendChild(card);
}

showQ();