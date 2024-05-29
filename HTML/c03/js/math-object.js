var randomNum= Math.Floor((Math.Random()*10)+1);
var el=document.getElementById('info');
el.innerHTML = '<h2>random number</h2><p>' + randomNum + '</p>';