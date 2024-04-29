var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname){
   for(tablink of tablinks){
       tablink.classList.remove("active-link");
   }
   for(tabcontent of tabcontents){
       tabcontent.classList.remove("active-tab");
   }
   event.currentTarget.classList.add("active-link");
   document.getElementById(tabname).classList.add("active-tab");
   const scriptURL = '<https://script.google.com/macros/s/AKfycbxmuny0-uPMPi5JvB4uo9XGFtPGnp4dn-VxSZKDcy_S_skAFn205xtRiubAb-3goXo8Mw/exec>'
   const form = document.forms['submit-to-google-sheet']
 
   form.addEventListener('submit', e => {
     e.preventDefault()
     fetch(scriptURL, { method: 'POST', body: new FormData(form)})
       .then(response => console.log('Success!', response))
       .catch(error => console.error('Error!', error.message))
   })
}