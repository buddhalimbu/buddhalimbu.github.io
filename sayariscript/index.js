console.log('Hello World!');

document.addEventListener('DOMContentLoaded', function() {
  let sayariElements = document.querySelectorAll('.sayari');
  
  sayariElements.forEach(function(element) {
    let parentElement = document.createElement('div');
    parentElement.classList.add('sayari-box');
    element.parentNode.insertBefore(parentElement, element);
    parentElement.appendChild(element);
    
    if (parentElement.classList.contains('sayari-box')) {
      let grandparentElement = document.createElement('div');
      grandparentElement.classList.add('sayari-wrapper');
      parentElement.parentNode.insertBefore(grandparentElement, parentElement);
      grandparentElement.appendChild(parentElement);
    }
  });
  
  let sayariBoxElements = document.querySelectorAll('.sayari-box');
  
  sayariBoxElements.forEach(function(element) {
    let copyBoxElement = document.createElement('div');
    copyBoxElement.classList.add('copy-box');
    element.appendChild(copyBoxElement);
    
    let sharemeElement = document.createElement('span');
    sharemeElement.classList.add('shareme');
    sharemeElement.innerText=" Share Me ";
    let sharemeIconElement = document.createElement('i');
    sharemeIconElement.classList.add('fab');
    sharemeIconElement.classList.add('fa-whatsapp');
    sharemeElement.appendChild(sharemeIconElement);
    copyBoxElement.appendChild(sharemeElement);
    
    let copymeElement = document.createElement('span');
    copymeElement.classList.add('copyme');
    copymeElement.innerText= "Copy Me";
    let copymeIconElement = document.createElement('i');
    copymeIconElement.classList.add('fa');
    copymeIconElement.classList.add('fa-clipboard');
    copymeElement.appendChild(copymeIconElement);
    copyBoxElement.appendChild(copymeElement);
  });
  
  let copymeElements = document.querySelectorAll('.copyme');  
  copymeElements.forEach(function(element) { 
    
    element.addEventListener('click', function(event) {
      event.preventDefault();
         
    let c = document.createElement("span");
    c.className = "alert";
    c.innerText=" Sayari Has Been Copied";
         
      let textElement = document.createElement('input');
      document.body.appendChild(textElement);
      let parentElement = this.parentElement.parentElement;
      parentElement.append(c);
      let sayariElement = parentElement.querySelector('.sayari');
      textElement.value = sayariElement.textContent.trim();
      textElement.select();
      document.execCommand('copy');
      textElement.remove();
      parentElement.querySelector('.alert').classList.add("show");
      setTimeout(function() {
        parentElement.querySelector('.alert').classList.remove("show");
      }, 3000);
    });
  });
  
  let sharemeElements = document.querySelectorAll('.shareme');
  
  sharemeElements.forEach(function(element) {
    element.addEventListener('click', function(event) {
      event.preventDefault();
      let parentElement = this.parentElement.parentElement;
      let sayariElement = parentElement.querySelector('.sayari');
      let title = document.location.origin;
      let text = sayariElement.textContent;
      let msg = encodeURIComponent(text) + ' - ' + title;
      let open_url = 'https://api.whatsapp.com/send?text=' + msg;
      window.open(open_url, '_blank');
    });
  });
});
