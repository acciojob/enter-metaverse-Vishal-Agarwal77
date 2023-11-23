//your JS code here. If required.
const p=document.getElementById("status");
const btn=document.getElementById("enterBtn");
const body=document.getElementsByTagName("body")[0];
let count=0;
btn.addEventListener("click",()=>{
	if(count>0){
		return ;
	}
	p.remove();
	const h1=document.createElement("h1");
	h1.id="status";
	h1.innerHTML="Entered Metaverse";
	body.insertBefore(h1,btn);
	count++;
});

