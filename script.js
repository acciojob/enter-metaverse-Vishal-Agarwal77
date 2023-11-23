//your JS code here. If required.
const p=document.getElementById("status");
const btn=document.getElementById("enterBtn");
const body=document.getElementsByTagName("body")[0];
let count=0;
btn.addEventListener("click",()=>{
	if(count>0){
		return ;
	}
	p.innerHTML="";
	const h1=document.createElement("h1");
	h1.innerHTML="Entered Metaverse";
	p.appendChild(h1);
	body.insertBefore(h1,btn);
	count++;
});

