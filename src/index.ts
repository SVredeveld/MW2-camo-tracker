import './style.scss';

function helloWorld() {
  const element= document.getElementById("hello-world");
  
  if (element) {
    element.textContent = "Hello, World!";
		element.style.color = 'red';
  }
}
helloWorld();

