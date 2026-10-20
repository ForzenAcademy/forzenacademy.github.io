const $=id=>document.getElementById(id);
const escape=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const keys=['front-idle','front-hurt','front-attack','back-idle','back-hurt','back-attack'];
let monsters=[];
function show(id){
 const monster=monsters.find(m=>m.id===id);if(!monster)return;
 $('detail-content').innerHTML=`<span class="family">${escape(monster.family)} · ${String(monster.number).padStart(3,'0')}</span><h2 id="detail-title">${escape(monster.name)}</h2>${monster.role?`<p class="concept">${escape(monster.habitat)} · Design role: ${escape(monster.role)}</p>`:''}<p>${escape(monster.design)}.</p><div class="poses">${keys.map(key=>`<figure><img src="${escape(monster.sprites[key].file)}" alt="${escape(monster.name)} ${key.replace('-',' ')}" width="512" height="512"><figcaption>${key.startsWith('front')?'Front':'Rear'} · ${key.split('-')[1]}</figcaption></figure>`).join('')}</div><p>Attack pose: ${escape(monster.attack)}.</p>`;
 $('detail').showModal();
}
function render(){
 const query=$('search').value.trim().toLowerCase(),family=$('family').value,collection=$('collection').value,key=`${$('view').value}-${$('pose').value}`;
 const shown=monsters.filter(m=>(!collection||(collection==='new'?m.number>150:m.number<=150))&&(!family||m.family===family)&&(!query||`${m.name} ${m.family} ${m.design} ${m.role||''} ${m.habitat||''}`.toLowerCase().includes(query)));
 $('count').textContent=`${shown.length} of ${monsters.length} creatures · select a monster to see all six poses`;
 $('empty').hidden=shown.length>0;
 $('creatures').innerHTML=shown.map(m=>`<button class="creature" data-id="${escape(m.id)}" aria-label="View all poses of ${escape(m.name)}"><span class="art"><img src="${escape(m.sprites[key].file)}" alt="${escape(m.name)}" width="512" height="512" loading="lazy" decoding="async"></span><span class="creature-info"><span class="number">${String(m.number).padStart(3,'0')}</span><span class="family">${escape(m.family)}</span><span class="name">${escape(m.name)}</span></span></button>`).join('');
}
$('creatures').addEventListener('click',e=>{const card=e.target.closest('[data-id]');if(card)show(card.dataset.id);});
for(const id of ['search','collection','family','view','pose'])$(id).addEventListener(id==='search'?'input':'change',render);
$('close').addEventListener('click',()=>$('detail').close());
$('detail').addEventListener('click',e=>{if(e.target===$('detail')){const rect=e.target.getBoundingClientRect();if(e.clientX<rect.left||e.clientX>rect.right||e.clientY<rect.top||e.clientY>rect.bottom)e.target.close();}});
$('background').addEventListener('click',()=>{const light=document.body.classList.toggle('light');$('background').setAttribute('aria-pressed',String(light));$('background').textContent=light?'Dark backdrop':'Light backdrop';});
try{
 const response=await fetch('manifest.json');if(!response.ok)throw new Error('Manifest unavailable');
 monsters=Object.entries((await response.json()).entries).map(([id,m])=>({id,...m})).sort((a,b)=>a.number-b.number);
 $('monster-total').textContent=`${monsters.length} monsters`;
 $('pose-total').textContent=`${(monsters.length*6).toLocaleString('en-US')} transparent poses`;
 for(const family of [...new Set(monsters.map(m=>m.family))])$('family').add(new Option(family,family));
 const collection=new URLSearchParams(location.search).get('collection');
 if(collection==='new'||collection==='original')$('collection').value=collection;
 render();
}catch(e){$('count').textContent='The bestiary could not be loaded. Please refresh to try again.';console.error(e);}
