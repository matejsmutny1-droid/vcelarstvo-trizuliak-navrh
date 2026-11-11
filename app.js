const A = '';
const original = 'https://www.vcelarstvotrizuliak.sk';
const products = [
 {id:'ul',name:'Zateplený drevený včelí úľ',family:'Vlastná výroba · Včelie úle',category:'ule',price:109,img:'p-25_vcely-ul-zostava-zaklad-nahlad.webp',url:'/zatepleny-dreveny-vceli-ul',stock:'Skladom',label:'Vlastná výroba',text:'Drevený zateplený úľ z ponuky Včelárstva Trizuliak. Vyberte si vhodný variant a zostavu podľa rámikovej miery, ktorú používate.'},
 {id:'dymak',name:'Včelársky dymák pozinkovaný, 30 cm',family:'Pomôcky · Práca pri úli',category:'pomocky',price:15,img:'p-13_vcelarsky-dymak-pozinkovany-velky-30cm.webp',url:'/vcelarsky-dymak-pozinkovany-velky-30cm',stock:'Skladom',label:'Do vašej výbavy',text:'Veľký pozinkovaný včelársky dymák s výškou 30 cm. Praktická súčasť vybavenia na prácu pri včelách. Podrobnosti nájdete v pôvodnom e-shope.'},
 {id:'med',name:'Kvetový med 1 kg — slovenský med',family:'Včelie produkty · Med od včelára',category:'darceky',price:10.90,img:'p-772_kvetovy-med-1kg-slovensky-med-od-vcelara.webp',url:'/med-kvetovy',stock:'Skladom',label:'Kúsok prírody',text:'Slovenský kvetový med od včelára v kilogramovom balení. Aktuálnu ponuku medov a ďalších včelích produktov nájdete v pôvodnom e-shope.'},
 {id:'hra',name:'Medová lúpež — rodinná kartová hra',family:'Hry a hračky · Svet včiel',category:'darceky',price:12.65,img:'p-830_medova-lupez-rodinna-kartova-hra-nahlad.webp',url:'/medova-lupez-originalna-kartova-hra-zo-sveta-vciel',stock:'Skladom',label:'Pre celú rodinu',text:'Kartová hra zo sveta včiel pre deti a celú rodinu. Objavte ponuku hier, ktoré prinášajú včelársky svet aj k spoločnému stolu.'},
 {id:'hodiny',name:'Gravírované drevené hodiny Včelárstvo',family:'Darčeky · Drevené dekorácie',category:'darceky',price:79.90,img:'p-837_drevene-hodiny-vcelarsky-motiv-nahlad.webp',url:'/drevene-hodiny-vcelarstvo-gravirovane-hodiny-z-masivnej-lipy-44-35-cm',stock:'Skladom',label:'Pre radosť',text:'Nástenné hodiny z masívnej lipy s gravírovaným včelárskym motívom. Rozmer 44 × 35 cm. Darček pre každého, komu je svet včiel blízky.'},
 {id:'pozorovaci',name:'Pozorovací úľ na voľnú stavbu',family:'Vlastná výroba · Pozorovacie úle',category:'ule',price:349,img:'p-698_vceli-ul-na-volnu-stavbu-preskleny-nahlad.webp',url:'/ul-na-volnu-stavbu',stock:'Na objednávku',label:'Vlastná výroba',text:'Pozorovací drevený úľ na voľnú stavbu vás priblíži k životu včiel. Konkrétnu konfiguráciu a termín dodania si overte v pôvodnom e-shope.'},
 {id:'preskleny',name:'Včelí úľ presklený z troch strán',family:'Vlastná výroba · Presklené úle',category:'ule',price:194,img:'p-529_9panoramaticky-vceli-ul-3-skla-nahlad.webp',url:'/ul-preskleny-3-skla11',stock:'Na objednávku',label:'Vlastná výroba',text:'Presklený úľ z troch strán pre pohľad do sveta včiel. Dostupné varianty, rámikovú mieru a možnosti zostavy nájdete na produktovej stránke.'},
 {id:'obraz',name:'Drevený LED obraz s včelárskym motívom',family:'Darčeky · Drevené dekorácie',category:'darceky',price:52,img:'p-838_Drevena-vcelarska-tabula-s-modrym-podsvietenim.webp',url:'/dreveny-gravirovany-obraz-pre-vcelara',stock:'Skladom',label:'Originálny darček',text:'Gravírovaný drevený obraz z masívnej lipy s LED podsvietením. Originálna dekorácia pre milovníkov včiel a včelárskeho remesla.'},
 {id:'pexeso',name:'Pexeso Včielka — pamäťová hra',family:'Hry a hračky · Pre najmenších',category:'darceky',price:2.20,img:'p-834_pexeso-vcielka-pamatova-hra-pre-deti-nahlad.webp',url:'/pexeso-vcielka-vesela-pamatova-hra-pre-malych-aj-velkych',stock:'Skladom',label:'Svet včiel hravo',text:'Pamäťová hra s motívom včiel. Malá radosť pre deti aj všetkých, ktorí radi objavujú včelí svet prostredníctvom hry.'}
];
const money = n => n.toLocaleString('sk-SK',{minimumFractionDigits:2,maximumFractionDigits:2})+' €';
const escapeHTML = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const arrow = '<svg aria-hidden="true"><use href="#arrow-up"/></svg>';
let currentFilter='vsetko', expanded=false;
const grid=document.querySelector('#product-grid');
function renderProducts(){
 const subset=products.filter(p=>currentFilter==='vsetko'||p.category===currentFilter);
 const shown=currentFilter==='vsetko'&&!expanded?subset.slice(0,4):subset;
 grid.innerHTML=shown.map(p=>`<article class="product-card"><button class="product-image-button" data-product="${p.id}" aria-label="Pozrieť produkt: ${escapeHTML(p.name)}"><span class="product-label ${p.category==='darceky'?'honey':''}">${escapeHTML(p.label)}</span><img src="${A+p.img}" width="400" height="400" alt="${escapeHTML(p.name)}" loading="lazy"><span class="card-arrow">${arrow}</span></button><p class="product-family">${escapeHTML(p.family)}</p><h3 class="product-title"><button data-product="${p.id}">${escapeHTML(p.name)}</button></h3><div class="product-bottom"><span class="product-price">${money(p.price)} <small>s DPH</small></span><span class="product-stock ${p.stock==='Na objednávku'?'order':''}">${p.stock}</span></div></article>`).join('');
 document.querySelector('#product-count').textContent=`${shown.length} ${shown.length===1?'produkt':shown.length<5?'produkty':'produktov'} vo výbere`;
 document.querySelector('#more-products').hidden=currentFilter!=='vsetko'||expanded;
 document.querySelectorAll('[data-filter]').forEach(b=>{const active=b.dataset.filter===currentFilter;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));});
}
function filterProducts(value){currentFilter=value;expanded=false;renderProducts();}
document.querySelectorAll('[data-filter]').forEach(b=>b.addEventListener('click',()=>filterProducts(b.dataset.filter)));
document.querySelectorAll('[data-category]').forEach(a=>a.addEventListener('click',()=>filterProducts(a.dataset.category)));
document.querySelector('#more-products').addEventListener('click',()=>{expanded=true;renderProducts();});
const productDialog=document.querySelector('#product-dialog');
function openProduct(id){
 const p=products.find(p=>p.id===id);if(!p)return;
 document.querySelector('#product-modal-content').innerHTML=`<div class="modal-grid"><div class="modal-photo"><img src="${A+p.img}" width="500" height="500" alt="${escapeHTML(p.name)}"></div><div class="modal-info"><p class="eyebrow">${escapeHTML(p.family)}</p><h2 id="product-modal-title">${escapeHTML(p.name)}</h2><span class="product-price">${money(p.price)} <small>s DPH</small></span><span class="product-stock ${p.stock==='Na objednávku'?'order':''}">${p.stock}</span><p>${escapeHTML(p.text)}</p><a class="button button-dark" href="${original+p.url}" target="_blank" rel="noopener">Pozrieť a kúpiť v e-shope ${arrow}</a><p class="modal-note">Toto je dizajnová ukážka. Nákup, výber variantu a overenie aktuálnej ceny aj dostupnosti prebiehajú v pôvodnom e-shope.</p></div></div>`;
 productDialog.showModal();
}
document.addEventListener('click',e=>{const b=e.target.closest('[data-product]');if(b){const d=b.closest('dialog');if(d?.open)d.close();openProduct(b.dataset.product);}});
const searchDialog=document.querySelector('#search-dialog'), searchInput=document.querySelector('#search-input');
function normalize(v){return v.toLocaleLowerCase('sk').normalize('NFD').replace(/[\u0300-\u036f]/g,'');}
function searchProducts(){
 const q=normalize(searchInput.value.trim());
 const found=products.filter(p=>normalize(p.name+' '+p.family+' '+p.text).includes(q));
 const el=document.querySelector('#search-results');
 el.innerHTML=found.length?found.map(p=>`<button class="search-result" data-product="${p.id}"><img src="${A+p.img}" width="60" height="60" alt=""><span>${escapeHTML(p.name)}<small>${escapeHTML(p.family)}</small></span><b>${money(p.price)}</b></button>`).join(''):'<p class="search-empty">Vo výbere návrhu sa tento produkt nenachádza. Celú ponuku nájdete v pôvodnom e-shope.</p>';
}
document.querySelectorAll('.search-toggle').forEach(b=>b.addEventListener('click',()=>{searchInput.value='';searchProducts();searchDialog.showModal();searchInput.focus();}));
searchInput.addEventListener('input',searchProducts);
document.querySelectorAll('.close-dialog').forEach(b=>b.addEventListener('click',()=>b.closest('dialog').close()));
document.querySelectorAll('dialog').forEach(d=>d.addEventListener('click',e=>{if(e.target===d){const r=d.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)d.close();}}));
const menuButton=document.querySelector('.menu-toggle'),nav=document.querySelector('#main-nav');
function closeMenu(){nav.classList.remove('open');menuButton.setAttribute('aria-expanded','false');menuButton.setAttribute('aria-label','Otvoriť menu');}
menuButton.addEventListener('click',()=>{const active=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(active));menuButton.setAttribute('aria-label',active?'Zavrieť menu':'Otvoriť menu');});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu();});
renderProducts();
