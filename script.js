//your JS code here. If required.
const ele= document.getElementByID("output");
const input= document.getElementById("text");
const time = document.getElementById("delay");
async function displayText(){
	let val=time.value.trim();
	setTimeOut(
		()=>{
			ele.innerText=input.value;
		},val*1000);
	
}