(() => {
 'use strict';
 const data=JSON.parse(document.getElementById('unit-data').textContent);
 const byId=id=>document.getElementById(id),search=byId('search'),role=byId('role');
 const cards=[...document.querySelectorAll('.line-card')],tocItems=[...document.querySelectorAll('[data-toc]')];
 const dialog=byId('unit-dialog');let lastTrigger;
 const esc=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const imagePath=(unit,view='front',pose='idle')=>`../adventurers/${unit.id}-${view}${pose==='idle'?'':'-'+pose}.webp`;

 const normalize=value=>value.toLocaleLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g,'');
 function filter(){
  const words=normalize(search.value.trim()).split(/\s+/).filter(Boolean);let count=0,unitCount=0;
  for(const card of cards){
   const visible=words.every(word=>normalize(card.dataset.search).includes(word))&&(role.value==='all'||card.dataset.roles.split('|').includes(role.value));
   card.hidden=!visible;if(visible){count++;unitCount+=Number(card.dataset.count);}
  }
  for(const item of tocItems)item.hidden=byId(item.dataset.toc).hidden;
  byId('result-count').textContent=`${count} ${count===1?'family':'families'} · ${unitCount} ${unitCount===1?'form':'forms'}`;
  byId('toc-count').textContent=count;byId('empty-state').hidden=!!count;document.querySelector('.toc-empty').hidden=!!count;
 }
 function clearFilters(){search.value='';role.value='all';filter();}
 search.addEventListener('input',filter);role.addEventListener('change',filter);
 byId('reset').addEventListener('click',clearFilters);byId('clear-filters').addEventListener('click',clearFilters);
 for(const button of document.querySelectorAll('[data-quick]'))button.addEventListener('click',()=>{clearFilters();search.value=button.dataset.quick;filter();});
 function showFamily(id){const family=data.families.find(family=>family.id===id);if(!family)return;clearFilters();location.hash=id;byId(id).scrollIntoView({block:'start'});}
 function openUnit(id,trigger){
  const unit=data.units[id];if(!unit)return;if(!dialog.open)lastTrigger=trigger;
  byId('detail-family').textContent=`${unit.family} / ${unit.path||'Shared beginning'}${unit.isNew?' / New final design':''}`;
  byId('detail-title').textContent=unit.name;
  const poses=[['front','idle','Front · idle'],['front','hurt','Front · hurt'],['front','attack','Front · attack'],['back','idle','Rear · idle'],['back','hurt','Rear · hurt'],['back','attack','Rear · attack']];
  const stats=[['hp','HP'],['attack','Attack'],['defense','Defense'],['spAttack','Sp. Atk'],['spDefense','Sp. Def'],['speed','Speed']];
  const parents=unit.incoming.length?unit.incoming.map(edge=>`<span><button type="button" data-unit="${edge.from}">${esc(data.units[edge.from].name)}</button> <b>Lv. ${edge.level}</b> → ${esc(unit.name)}</span>`).join('<span>or</span>'):'<span>This is the base form shared by both paths.</span>';
  const next=unit.outgoing.length?unit.outgoing.map(edge=>`<span>${edge.choice?'Choose ':''}<button type="button" data-unit="${edge.to}">${esc(data.units[edge.to].name)}</button> <b>at Lv. ${edge.level}</b>${edge.path?` · ${esc(edge.path)}`:''}</span>`).join('<span class="path-or">or</span>'):'<span>This is the final class of its own path.</span>';
  const skillList=skills=>skills.map(skill=>`<div class="skill-reference"><b>${esc(skill.name)} · ${skill.cooldown}s recovery</b><p>When: ${esc(skill.condition)}.</p><p>Then: ${esc(skill.description)}</p></div>`).join('');
  const art=unit.artReady?`<div class="detail-poses" style="--poses:6">${poses.map(([view,pose,label])=>`<figure><img src="${imagePath(unit,view,pose)}" alt="${esc(unit.name)} · ${label}" width="300" height="300"><figcaption>${label}</figcaption></figure>`).join('')}</div>`:'<div class="detail-art-pending"><b>Six-pose artwork is being painted.</b><p>This is the new final planned for this branch. Its identity and palette follow the existing family art.</p></div>';
  byId('detail-body').innerHTML=`<div class="unit-elements"><span class="tag">${esc(unit.role)}</span><span class="tag folk">${esc(unit.folk)}</span>${unit.isNew?'<span class="tag branch-tag">New final</span>':''}</div><p class="detail-description">${esc(unit.identity)}.</p>${unit.pathPurpose?`<p class="detail-description"><b>${esc(unit.path)}.</b> ${esc(unit.pathPurpose)}</p>`:''}${art}<section class="detail-section"><h3>Planned evolution requirements</h3><div class="detail-path">${parents}</div><div class="detail-path planned-next">${next}</div>${unit.outgoing.length===2?'<p class="detail-description">Choose exactly one specialist. Each has a separate final class.</p>':''}</section><section class="detail-section"><h3>Planned base stats</h3><p class="detail-description">Both specialists have equal stat budgets, as do both final classes in this family.</p><dl class="stat-row">${stats.map(([key,label])=>`<div><dt>${label}</dt><dd>${unit.stats[key]}</dd></div>`).join('')}</dl></section><section class="detail-section"><h3>Three automatic skills</h3><p class="detail-description">Check conditions in queue order, skip invalid targets, apply the effect, then recover. The player can rearrange these skills at any time. Combat has no elemental attributes.</p><div class="skill-reference-list">${skillList(unit.skills)}</div></section>`;
  if(!dialog.open)dialog.showModal();else dialog.scrollTop=0;
 }
 document.addEventListener('click',event=>{const button=event.target.closest('[data-unit]');if(button)openUnit(button.dataset.unit,button);});
 document.querySelector('.detail-close').addEventListener('click',()=>dialog.close());
 dialog.addEventListener('click',event=>{if(event.target===dialog){const rect=dialog.getBoundingClientRect();if(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom)dialog.close();}});
 dialog.addEventListener('close',()=>lastTrigger?.focus());
 document.addEventListener('keydown',event=>{if(event.key==='/'&&!dialog.open&&!/INPUT|SELECT|TEXTAREA/.test(document.activeElement.tagName)){event.preventDefault();search.focus();}});
 if(matchMedia('(max-width:850px)').matches)document.querySelector('.toc').open=false;
 filter();
 const hash=decodeURIComponent(location.hash.slice(1));
 if(hash.startsWith('unit-')&&data.units[hash.slice(5)]){showFamily(data.units[hash.slice(5)].familyId);openUnit(hash.slice(5));}
 else if(data.families.some(f=>f.id===hash))showFamily(hash);
})();
