document.addEventListener('keydown', (event) => {
	if(event.key == "ArrowDown"){
		let arrowDown = document.querySelector(".key#keyDown");
		arrowDown.setAttribute("active", true);
		setTimeout(() => {  arrowDown.setAttribute("active", false); }, 100);
		merge("down");
		updateTableGame();
	}
	else if(event.key == "ArrowUp"){
		let arrowUp = document.querySelector(".key#keyUp");
		arrowUp.setAttribute("active", true);
		setTimeout(() => {  arrowUp.setAttribute("active", false); }, 100);	
		merge("up");
		updateTableGame();
	}
	else if(event.key == "ArrowLeft"){
		let arrowLeft = document.querySelector(".key#keyLeft");
		arrowLeft.setAttribute("active", true);
		setTimeout(() => {  arrowLeft.setAttribute("active", false); }, 100);	
		merge("left");
		updateTableGame();
	}
	else if(event.key == "ArrowRight"){
		let arrowRight = document.querySelector(".key#keyRight");
		arrowRight.setAttribute("active", true);
		setTimeout(() => {  arrowRight.setAttribute("active", false); }, 100);
		merge("right");
		updateTableGame();
	}
})
