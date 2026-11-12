'use strict';
(() => {
 const menuButton=document.querySelector('.menu-btn');
 const menu=document.querySelector('.mobile-menu');
 if(menuButton && menu){
  const close=()=>{menu.hidden=true;menuButton.setAttribute('aria-expanded','false');menuButton.setAttribute('aria-label',document.documentElement.lang==='it'?'Apri il menu':'Open menu');};
  menuButton.addEventListener('click',()=>{const isOpen=menuButton.getAttribute('aria-expanded')==='true';menu.hidden=isOpen;menuButton.setAttribute('aria-expanded',String(!isOpen));menuButton.setAttribute('aria-label',isOpen?'Apri il menu':'Chiudi il menu');});
  menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',close));
  document.addEventListener('keydown',ev=>{if(ev.key==='Escape')close();});
 }
 const filters=document.querySelectorAll('.filter-btn');
 if(filters.length){const cards=document.querySelectorAll('.filtered-projects [data-category]');const empty=document.querySelector('.empty-state');
 filters.forEach(button=>button.addEventListener('click',()=>{const value=button.dataset.filter;filters.forEach(b=>{const active=b===button;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));});let shown=0;cards.forEach(card=>{const match=value==='all'||card.dataset.category===value;card.hidden=!match;if(match)shown++;});if(empty)empty.hidden=shown>0;}));}
 const form=document.querySelector('#contact-form');
 if(form)form.addEventListener('submit',ev=>{ev.preventDefault();if(!form.reportValidity())return;
 const data=new FormData(form);const name=String(data.get('name')||'').trim();const email=String(data.get('email')||'').trim();const topic=String(data.get('topic')||'');const message=String(data.get('message')||'').trim();const subject=encodeURIComponent('Europe United — '+topic);const body=encodeURIComponent((document.documentElement.lang==='it'?'Da':'From')+': '+name+'\nEmail: '+email+'\n\n'+message);
 const feedback=document.querySelector('#form-feedback');if(feedback)feedback.textContent=document.documentElement.lang==='it'?'Si apre il programma email. Se non succede, scrivi direttamente all’indirizzo indicato.':'Your email app should open. If it does not, please use the address provided.';
 window.location.href='mailto:centrostudieuropeunited@gmail.com?subject='+subject+'&body='+body;
 });
})();
