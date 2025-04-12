let PrintButton1 = new Image();
let PrintButton2 = new Image();
let logo1 = new Image();
let logo2 = new Image();

if (document.images) {
	PrintButton1.src = "images/print1.jpg";
	PrintButton2.src = "images/print2.jpg";
	logo1.src = "images/Logo2.png";
	logo2.src = "images/Logo2_dark.png";
}

const imgArray = [
	'SkiCoupleLg.jpg',
	'SkiCoupleLg1.jpg',
	'SkiCoupleLg2.jpg',
	'SnowBoard.jpg'
];

const titleArray = [
	'Newlyweds Skiing',
	'Ski Lift Couple',
	'Snowy Couple Closeup',
	'Snowboarder in Action'
];

const imgPath = "images/FullSize/";

function swapImage(imgID) {
	const theImage = document.getElementById('theImage');
	const textDiv = document.getElementById('bottomText');
	theImage.src = imgPath + imgArray[imgID];
	textDiv.innerHTML = titleArray[imgID];
}

function preloadImages() {
	for (let i = 0; i < imgArray.length; i++) {
		const tmpImg = new Image();
		tmpImg.src = imgPath + imgArray[i];
	}
}
