
//create

const alert = document.querySelector('.alert');// glob variable
const sucessColor = "#006666";
const errorColor = "#ff9900";



var li = document.querySelectorAll('.ul li');
var i; 
        for(i=0;i<li.length;i++){
        const list = li[i];
          const span = document.createElement('span');
        span.className ="delete";
        span.appendChild(document.createTextNode('\u00D7'));
      list.appendChild(span);
     }
       

var remove= document.getElementsByClassName('delete');
var i;
for(i=0;i<remove.length;i++){
        var del = remove[i];
        del.onclick = function(){
        var par = this.parentElement;
            par.remove();
            alert.innerHTML = '<b>' + "Oooos!!" + '</b>' + " Item removed by user.";
            alert.classList.add('active');
           if(document.querySelector('.ul li')===null){
             const p = document.createElement('p');
             p.id ='no-notes';
             var txt = document.createTextNode('No any notes found. Please create new notes');
             p.appendChild(txt); document.querySelector('.ul').appendChild(p);
             
                }
                
            
            
            
            setTimeout(function(){
    alert.classList.remove('active');
},2000);
    }

}


function addNotes() {
    var ul = document.querySelector(".ul");
    var text = document.querySelector('.text');
    var fullText = text.value ;    
    //alert transition and remove
    alert.classList.add('active');
         
    //create new list
    const li = document.createElement('li');
       li.innerHTML = fullText;
       
   
    
    if(fullText==="" || fullText.length===0){
        alert.innerHTML = '<b>' + "Error !!" + '</b>' + " Write something please";
        alert.style.backgroundColor = errorColor;
        
        
    }
    else if(text.value.length<10) {
        alert.innerHTML = '<b>' + "Sorry!!" + '</b>' + " Note is too short.";
    }
    else {
    ul.appendChild(li);
    
    
        alert.innerHTML = '<b>' + "Sucess!!" + '</b>' + " Note has been added.";
        alert.style.backgroundColor = sucessColor;
        if(document.querySelector('.ul > #no-notes') !== null){
    document.querySelector('.ul p').remove();
}
                console.log('Post Added');
    }
        document.querySelector('.text').value="";
         const span = document.createElement('span');
        span.className ="delete";
        span.appendChild(document.createTextNode('\u00D7'));
        
        li.appendChild(span);
        
        for(i=0;i<remove.length;i++){
        var del = remove[i];
        del.onclick = function(){
        var par = this.parentElement;
            par.remove();
            alert.innerHTML = '<b>' + "Ooops!!" + '</b>' + " Item removed by user.";
            alert.classList.add('active');
            if(document.querySelector('.ul li')===null){
             const p = document.createElement('p');
             p.id ='no-notes';
             var txt = document.createTextNode('No any notes found. Please create new notes');
             p.appendChild(txt); document.querySelector('.ul').appendChild(p);
             
                }
            
            //settimeout
            setTimeout(function(){
    alert.classList.remove('active');
},2000);
    }
}          

   
    setTimeout(function(){
    alert.classList.remove('active');
},2000);
}


function Clear(){
alert.classList.add('active');
    var text = document.querySelector('textarea');
    var empty = text.value;
    if(empty===""){
        alert.innerHTML = '<b>' + "Ops !!" + '</b>' + " Nothing to clear here.";
    }
    
    else {
        text.value = "";
        alert.innerHTML = '<b>' + "Sucess !!" + '</b>' + " Text has been cleared.";
        alert.style.backgroundColor = sucessColor;
    }
    setTimeout(function(){
    alert.classList.remove('active');
},2000);
}
 
 
