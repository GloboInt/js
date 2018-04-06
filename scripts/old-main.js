var myImage = document.querySelector('img');

myImage.onclick = function() 
{
    var mySrc = myImage.getAttribute('src');
    if(myScr === 'images/firefox-icon.png') 
    {
    myImage.setAttribute ('src','images/firefox2.jpg');
} else 
{
    myImage.setAttribute ('src','images/firefox-icon.png');
}
}