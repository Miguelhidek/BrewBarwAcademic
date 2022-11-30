// JS Events
let el = document.getElementById('miniature-container');
el.addEventListener('click', function(e) {
    miniatureChanges(parseInt(e.target.id));
});

//Menu Toggle
let menuOpened = false;


function menuToggle(){
	let menu = document.querySelector('.menu');	

	changeMenu();

	if(menuOpened==!true){
		menu.style.width = '0vw';
	} else{
		menu.style.width = '100vw';
	}

}

function changeMenu(){
	let lines = document.querySelectorAll('.menu-line');
	let buttonMenu = document.querySelector('.menu-opened');
	
	if(menuOpened==false){
		menuOpened = true;
		buttonMenu.classList.add('actived');
		lines[0].style.transform = "rotate(45deg)";
		lines[1].style.display = 'none';
		lines[2].style.transform = "rotate(-45deg)";
	}else{
		menuOpened = false;
		buttonMenu.classList.remove('actived');
		lines[0].style.transform = "rotate(0deg)";
		lines[1].style.display = 'flex';
		lines[2].style.transform = "rotate(0deg)";
	}
}

//Menu Interaction Scroll Functions


function scrollButton(){
	let scrollSectionApp = document.querySelector("#section-beers").getBoundingClientRect();
	if(window.scrollY >= scrollSectionApp.y){
		document.querySelector('.scrollButton').style.display='flex';
	}else{
		document.querySelector('.scrollButton').style.display='none';
	}
}

//Events
window.addEventListener('scroll', scrollButton);


function scrollSections(divid){
	let scrollPositions = document.querySelector(divid).getBoundingClientRect();
	window.scrollTo({
		top: scrollPositions.y,
		left:scrollPositions.x,
		behavior:'smooth'
		});
}

function scrollZero(){
	window.scrollTo({
		top: 0,
		left:0,
		behavior:'smooth'
	});
}

//Miniature Values
let currentMiniature = 0;
let miniature = document.querySelectorAll(".miniature");
let miniatureWidth = miniature[0].clientWidth;
let miniatureContainerWidth = document.querySelector(".miniature-container").clientWidth;
let widthAllMiniature = miniature.length * (miniatureWidth+10);
let marginWidth = 0;
let marginMiniature = document.getElementById("miniatures");
let aQuarter = miniatureContainerWidth - (miniatureContainerWidth / 4);


if(widthAllMiniature>miniatureContainerWidth){
	document.getElementById("miniature-button-back").classList.remove("hidden");
	document.getElementById("miniature-button-next").classList.remove("hidden");
}


//Change Main Image in Section Our Space
function miniatureChanges(divid){

	let addressImage = miniature[divid].getAttribute("src");
	let mainImage = document.getElementById('main-image');
	mainImage.src = addressImage;

	console.log(divid);

	if(divid != currentMiniature){
		console.log("Aqui "+divid);
		miniature[divid].classList.add("active");
		miniature[currentMiniature].classList.remove("active");
		currentMiniature = divid;
	}

}

function goBack(){
	let currentMiniatureTemp = currentMiniature-1;

	if(currentMiniature != 0){
		miniatureChanges(currentMiniatureTemp);
	}

	let widthUsed = miniatureWidth * (currentMiniatureTemp);
	

	if(widthUsed > aQuarter ){
		if(marginWidth<0){
			marginWidth = marginWidth + 110;
		}
		marginMiniature.style.marginLeft = marginWidth+"px";
	}else{
		marginWidth = 0;
		marginMiniature.style.marginLeft = "0px";
	}
}

function goNext(){
	let currentMiniatureTemp = currentMiniature+1;

	let widthUsed = miniatureWidth * (currentMiniatureTemp);

	if(currentMiniature < miniature.length-1){
		miniatureChanges(currentMiniature+1);
	}

	if(widthUsed > aQuarter ){
		if(currentMiniatureTemp < miniature.length-1){
			marginWidth = marginWidth - 110;
		}
		marginMiniature.style.marginLeft = marginWidth+"px";
	}else{
		marginWidth = marginWidth;
	}

}


//Photo Gallery
let galleryContainer = document.querySelector(".photos");
let gallery = document.querySelectorAll(".photo");
let boxView = document.querySelector(".gallery-view");

galleryContainer.addEventListener("click", function(e){
	openView(e.target.id);
});

function openView(elid){
	//let photo = document.getElementById("photo-gallery");
	let photo2 = document.querySelector(".photo-view");
	boxView.style.display = "flex";

	photo2.style.backgroundImage = "url("+gallery[elid].getAttribute("src")+")";
	//photo.src = ;
}

function galleryClose(){
	boxView.style.display = "none";
}

