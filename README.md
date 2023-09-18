# Calculator-js
#html
<!DOCTYPE html>
<html>
<head>
	<title>CALCULATOR</title>
	<link rel="stylesheet" type="text/css" href="css/main.css">
</head>
<body>
	<section>
		<div class="container">
			<div id="display"></div>
			<div class="buttons">
				<div class="button">C</div>
				<div class="button">/</div>
				<div class="button">*</div>
				<div class="button">&larr;</div>
				<div class="button">7</div>
				<div class="button">8</div>
				<div class="button">9</div>
				<div class="button">-</div>
				<div class="button">4</div>
				<div class="button">5</div>
				<div class="button">6</div>
				<div class="button">+</div>
				<div class="button">1</div>
				<div class="button">2</div>
				<div class="button">3</div>
				<div class="button">.</div>
				<div class="button">(</div>
				<div class="button">0</div>
				<div class="button">)</div>
				<div id="equal" class="button">=</div>
				<!--<div class="button">4</div>
				<div class="button">5</div>-->
			</div>
		</div>
	</section>

	<script src="js/main.js"></script>
</body>
</html>

#css
.container{
	width: 30%; margin: 5vh auto 0 auto;
	box-shadow: 0 0 4em 1.2em rgba(153,153,153,0.5);
}
#display{
	text-align: right; height: 4.4em;	line-height: 4.4em;
	padding: 1em 0.5em;	font-size: 1.56em;
}
.buttons{
	display: grid; border: 0 0 .06em .06 solid #999;
	grid-template-columns: 1fr 1fr 1fr 1fr;
}
.buttons > div{
	border: 0.06em 0.06em 0 0 solid #999;
}
.button{
	border:0.013em solid #999;line-height: 4em; text-align: center;
	font-size: 1.5em; cursor: pointer;
}
#equal {background-color: #5555ff; color: white;}
.button:hover {
	background-color: grey; color: white; transition: 0.5s ease-in-out;
}

#js
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
		
	}); 
});
