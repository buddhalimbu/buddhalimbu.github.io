function createPreloader(e){var t={backgroundColor:"#ededed",spinnerColor:"#ff3747",spinnerSpeed:"2s",delay:200,duration:1e3};if(e)for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);var o=document.createElement("div");o.style.position="fixed",o.style.top=0,o.style.left=0,o.style.width="100%",o.style.height="100%",o.style.backgroundColor=t.backgroundColor,o.style.zIndex=999999999,o.style.display="flex",o.style.justifyContent="center",o.style.alignItems="center",o.style.transition="0.4s ease-in-out",o.style.animationDelay=t.delay+"ms",o.style.animationDuration=t.duration+"ms";var r=document.createElement("div");r.style.border="2px solid #f1f1f1",r.style.borderTop="2px solid "+t.spinnerColor,r.style.borderRadius="50%",r.style.width="33px",r.style.height="33px",r.style.animation="spin "+t.spinnerSpeed+" linear infinite";var i=document.createElement("style");i.innerHTML="@keyframes spin {0% { transform: rotate(0deg); }100% { transform: rotate(360deg); }}",document.getElementsByTagName("head")[0].appendChild(i),o.appendChild(r),document.body.appendChild(o),setTimeout(function(){document.body.removeChild(o)},t.duration)}createPreloader({});