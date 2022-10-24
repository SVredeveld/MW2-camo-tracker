function helloWorld() {
  const element= document.getElementById("hello-world");
  
  if (element) {
    element.textContent = "Hello, World!";
  }
}
helloWorld();

function Test() {
	var arr = new Array("orange", "mango", "banana", "sugar");         
	var str = arr.toString(); 
	console.log("Returned string is : " + str );
}
Test();
