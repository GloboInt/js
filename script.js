 //test js script file
 
// function createParagraph() 
// {
//   var para = document.createElement('p');
//   para.textContent = 'You clicked the button!';
//   document.body.appendChild(para);
// }

// var buttons = document.querySelectorAll('button');

// for (var i = 0; i < buttons.length ; i++) 
// {
//   buttons[i].addEventListener('click', createParagraph);
// }

function set_button(elem, str)
{
  var title = document.getElementById("title");
    
  elem.onclick = () =>
  {
      title.innerHTML = str;
  }
}

var b1 = document.getElementById("b1");
var b2 = document.getElementById("b2");
var b3 = document.getElementById("b3");
var b4 = document.getElementById("b4");

set_button(b1, "This is button B1 Test");
set_button(b2, "This is button B2 Test");
set_button(b3, "This is button B3 Test");
set_button(b4, "This is button B4 Test");