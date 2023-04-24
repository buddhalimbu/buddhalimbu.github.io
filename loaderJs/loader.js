// create a div element for the preloader

var mpreloader = document.createElement('div');

// set the preloader's styles

mpreloader.style.position = 'fixed';

mpreloader.style.top = 0;

mpreloader.style.left = 0;

mpreloader.style.width = '100%';

mpreloader.style.height = '100%';

mpreloader.style.backgroundColor = '#fff';

mpreloader.style.zIndex = 999999999;

mpreloader.style.display="flex";

mpreloader.style.justifyContent="center";

mpreloader.style.alignItems="center";

mpreloader.style.transition="0.4s ease-in-out";

// create a div element for the spinner

var mspinner = document.createElement('div');

// set the spinner's styles

mspinner.style.border = '2px solid #f1f1f1';

mspinner.style.borderTop = '2px solid #ff3747';

mspinner.style.borderRadius = '50%';

mspinner.style.width = '33px';

mspinner.style.height = '33px';

mspinner.style.animation = 'spin 2s linear infinite';

// create a keyframes animation for the spinner

var mkeyframes = '@keyframes spin {0% { transform: rotate(0deg); }100% { transform: rotate(360deg); }}';

var mstyle = document.createElement('style');

mstyle.innerHTML = mkeyframes;

document.getElementsByTagName('head')[0].appendChild(mstyle);

// add the spinner to the preloader

mpreloader.appendChild(mspinner);

// add the preloader to the body

document.body.appendChild(mpreloader);

setTimeout(()=>{

  document.body.removeChild(mpreloader)

},5000);
