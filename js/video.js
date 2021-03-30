var video = document.getElementById("player1");
var vidVolume = document.querySelector("#volume");
var speed = document.querySelector('video').playbackRate = 1.0;



window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play()
	vidVolume.innerHTML = video.volume * 100 + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause()
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down");
	video.playbackRate = (video.playbackRate - 0.05);
	console.log(video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("New speed");
	video.playbackRate = (video.playbackRate + 0.05);
	console.log(video.playbackRate)
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("New speed");
	if (video.currentTime < 52){
		video.currentTime += 15;
	} else {
		video.currentTime = 0;
	}
	console.log(video.currentTime)
});

//fix 
document.querySelector("#mute").addEventListener("click", function() {
	console.log("Mute");
	if (video.muted == false){
		video.muted = true;
		vidVolume.innerHTML = video.volume * 100 + "%";
		document.getElementById("mute").innerHTML = "Unmute"
	} 
	else{
		document.getElementById("mute").innerHTML = "Mute"
		video.muted = false;
		vidVolume.innerHTML = video.volume * 100 + "%";
		
	}
	
});

//fix this
document.querySelector("#slider").addEventListener("change", function() {
	console.log("Slider");
	video.volume = this.value / 100
	console.log(this.value);
	volume.innerHTML = this.value + "%"
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool")
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool")
});




