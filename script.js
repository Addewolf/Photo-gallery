const photos = [
  {
    "src": "images/photo-01.jpg",
    "title": "Morning frost I",
    "category": "Nature"
  },
  {
    "src": "images/photo-02.jpg",
    "title": "Morning frost II",
    "category": "Nature"
  },
  {
    "src": "images/photo-03.jpg",
    "title": "Frost in the details",
    "category": "Nature"
  },
  {
    "src": "images/photo-04.jpg",
    "title": "Through the window",
    "category": "Nature"
  },
  {
    "src": "images/photo-05.jpg",
    "title": "Elskåp — grey and weathered",
    "category": "Elskåp"
  },
  {
    "src": "images/photo-06.jpg",
    "title": "Rosehips",
    "category": "Nature"
  },
  {
    "src": "images/photo-07.jpg",
    "title": "Autumn colours",
    "category": "Nature"
  },
  {
    "src": "images/photo-08.jpg",
    "title": "Snowbound cabinet",
    "category": "Elskåp"
  },
  {
    "src": "images/photo-09.jpg",
    "title": "The autumn path",
    "category": "Other Moments"
  },
  {
    "src": "images/photo-10.jpg",
    "title": "Lights in the park",
    "category": "Other Moments"
  },
  {
    "src": "images/photo-11.jpg",
    "title": "Blue hour",
    "category": "Nature"
  },
  {
    "src": "images/photo-12.jpg",
    "title": "Winter mist",
    "category": "Nature"
  },
  {
    "src": "images/photo-13.jpg",
    "title": "A quiet cabinet",
    "category": "Elskåp"
  },
  {
    "src": "images/photo-14.jpg",
    "title": "Layers of tags",
    "category": "Elskåp"
  },
  {
    "src": "images/photo-15.jpg",
    "title": "Liberalism conspiracy",
    "category": "Elskåp"
  },
  {
    "src": "images/photo-16.jpg",
    "title": "Street-side collection",
    "category": "Elskåp"
  },
  {
    "src": "images/photo-17.jpg",
    "title": "A winter tag",
    "category": "Elskåp"
  },
  {
    "src": "images/photo-18.jpg",
    "title": "Night cabinet · KA-024",
    "category": "Elskåp"
  },
  {
    "src": "images/photo-19.jpg",
    "title": "Trafikverket · 230/400 V",
    "category": "Elskåp"
  },
  {
    "src": "images/photo-20.jpg",
    "title": "Blue wrapping",
    "category": "Other Moments"
  },
  {
    "src": "images/photo-21.jpg",
    "title": "After dark · low cabinet",
    "category": "Elskåp"
  },
  {
    "src": "images/photo-22.jpg",
    "title": "After dark · tall cabinet",
    "category": "Elskåp"
  },
  {
    "src": "images/photo-23.jpg",
    "title": "Cabinets in sunlight",
    "category": "Elskåp"
  },
  {
    "src": "images/photo-24.jpg",
    "title": "Autumn branches",
    "category": "Nature"
  },
  {
    "src": "images/photo-25.jpg",
    "title": "Frost in the foreground",
    "category": "Nature"
  },
  {
    "src": "images/photo-26.jpg",
    "title": "Trees in November",
    "category": "Nature"
  },
  {
    "src": "images/photo-27.jpg",
    "title": "Autumn in red",
    "category": "Nature"
  },
  {
    "src": "images/photo-28.jpg",
    "title": "Sky and horizon",
    "category": "Nature"
  },
  {
    "src": "images/photo-29.jpg",
    "title": "An open blue sky",
    "category": "Nature"
  },
  {
    "src": "images/photo-30.jpg",
    "title": "A plane overhead",
    "category": "Other Moments"
  },
  {
    "src": "images/photo-31.jpg",
    "title": "Plane over the countryside",
    "category": "Other Moments"
  },
  {
    "src": "images/photo-32.jpg",
    "title": "Painted owl",
    "category": "Other Moments"
  },
  {
    "src": "images/photo-33.jpg",
    "title": "Night cabinet · KA-032",
    "category": "Elskåp"
  },
  {
    "src": "images/photo-34.jpg",
    "title": "Under the streetlight",
    "category": "Elskåp"
  },
  {
    "src": "images/photo-35.jpg",
    "title": "Night cabinet · K024",
    "category": "Elskåp"
  },
  {
    "src": "images/photo-36.jpg",
    "title": "Cabinets and a poster",
    "category": "Elskåp"
  },
  {
    "src": "images/photo-37.jpg",
    "title": "Dolly Style poster",
    "category": "Elskåp"
  },
  {
    "src": "images/photo-38.jpg",
    "title": "Numbered 100–2",
    "category": "Elskåp"
  },
  {
    "src": "images/photo-39.jpg",
    "title": "Narrow utility box",
    "category": "Elskåp"
  },
  {
    "src": "images/photo-40.jpg",
    "title": "Stickers and street art",
    "category": "Elskåp"
  }
];
let filtered=[...photos],selected=0;
const gallery=document.querySelector('#gallery'),dialog=document.querySelector('#viewer');
function render(category='All'){
  filtered=photos.filter(p=>category==='All'||p.category===category);
  gallery.innerHTML='';
  filtered.forEach((p,i)=>{
    const f=document.createElement('figure');f.className='tile';f.tabIndex=0;
    f.setAttribute('role','button');f.setAttribute('aria-label','Open '+p.title);
    const img=document.createElement('img');img.src=p.src;img.alt=p.title;img.loading='lazy';
    const c=document.createElement('figcaption'),t=document.createElement('span'),s=document.createElement('small');
    t.textContent=p.title;s.textContent=p.category;c.append(t,s);f.append(img,c);
    f.addEventListener('click',()=>openPhoto(i));
    f.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();openPhoto(i)}});
    gallery.append(f);
  });
  document.querySelector('#count').textContent=filtered.length+' photographs';
}
function show(i){selected=(i+filtered.length)%filtered.length;const p=filtered[selected];
  document.querySelector('#large').src=p.src;document.querySelector('#large').alt=p.title;
  document.querySelector('#description').textContent=p.title+' · '+p.category;
}
function openPhoto(i){show(i);dialog.showModal()}
document.querySelectorAll('[data-filter]').forEach(b=>b.addEventListener('click',()=>{
  document.querySelectorAll('[data-filter]').forEach(x=>{
    x.classList.toggle('active',x===b);x.setAttribute('aria-pressed',String(x===b));
  });render(b.dataset.filter);
}));
document.querySelector('#close').onclick=()=>dialog.close();
document.querySelector('#previous').onclick=()=>show(selected-1);
document.querySelector('#next').onclick=()=>show(selected+1);
document.addEventListener('keydown',e=>{
  if(dialog.open&&e.key==='ArrowLeft')show(selected-1);
  if(dialog.open&&e.key==='ArrowRight')show(selected+1);
});
render();
