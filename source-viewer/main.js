function view(){
var input = document.querySelector('.input');
var button = document.querySelector('.sub');
var htmlHolder = document.querySelector('.source-viewer');
document.querySelector('.source-href').innerHTML = input.value;
  const URL = "https://" + input.value;
  fetch("https://api.codetabs.com/v1/proxy?quest=" +URL)
  .then(res => res.text())
  .then(text => {
   htmlHolder.innerHTML = text;
})
 .catch(err =>console.log(err));
 input.value = "www.google.com";
  
}

function refresh(){
  window.location.reload();
}

  
