$(document).ready(function() {
  	const introLeft = document.querySelector('#intro-left');
  	const introRight = document.querySelector('#intro-right');

	const numberPics = 8;

  	//creating an array with two random values (between 0 and 8)
  	const randomPic = () => {
      		const array = [];
      		for (let i=0; i<2; i++){
        		array.push(parseInt(Math.random()*numberPics));
    		}
		console.log(array);
		while (array[0] == array[1]){
			array[1] = parseInt(Math.random()*numberPics);
		}
    		return array;
  	}

	//setting the intro left and right random pics
	const setPics = () => {
		const pics = randomPic();
		const leftUrl = "https://raw.githubusercontent.com/marcorampin/haiku/main/images/intro/"+String(pics[0])+".jpg";
		const rightUrl = "https://raw.githubusercontent.com/marcorampin/haiku/main/images/intro/"+String(pics[1])+".jpg";
		$(introLeft).attr("src", leftUrl);
		$(introRight).attr("src", rightUrl);
	}

	const loadFunctions = () => {
		setPics();
	}

  	window.addEventListener('load', loadFunctions());
});
