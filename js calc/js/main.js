let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map(button=> {
	button.addEventListener('click', (e) => {
		switch(e.target.innerText){
			case 'C':
				display.innerText = '';
				break;
			case '←':
				if (display.innerText) {
					display.innerText = display.innerText.slice(0, -1);
				}
				break;
			case '=': //Do not use eval() for real wolrd apps
				try{
				display.innerText = eval(display.innerText);
			} catch {
				display.innerText = 'Error!';
			}
			break;
			default:
				display.innerText += e.target.innerText;
		}
		/*console.log('clicked');
		console.log(e);
		console.log(e.target);//which element was clicked
		console.log(e.target.innerText);//write it down to the console*/
	}); 
});