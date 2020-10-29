/*

here is the counter calculation part
~FRC~

*/


//new Date(year, month, day, hours, minutes, seconds, milliseconds)
//moths form 0 to 11

let eventDate = new Date(2020,11,25);

let timer = setInterval(tick,1000);

function tick(){
	let now = new Date().getTime();


	let t = eventDate-now;

	if(t>0){
		let days = Math.floor(t/(1000*60*60*24));
		if(days<10){
			days = "0"+days;
		}

		let hours = Math.floor(t%(1000*60*60*24)/(1000*60*60));
		if(hours<10){
			hours = "0"+hours;
		}

		let mins = Math.floor(t%(1000*60*60)/(1000*60));
		if(mins<10){
			mins = "0"+mins;
		}

		let secs = Math.floor(t%(1000*60)/1000);
		if(secs<10){
			secs = "0"+secs;
		}

		//let time = days + " : " + hours " : " + mins + " : "+secs;
		let time = days + " : " +hours+" : "+mins+" : "+secs;
		document.querySelector('.counter').innerText =time;
	}
}