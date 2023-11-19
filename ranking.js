/*
*ext-b -> buttons
*
*ext-s -> toggle
*
*
*
*
*
*
*
*
*/

document.querySelector('#u-emblemimg').src = userEmblem;
document.querySelector('.u-typename').textContent = typeName;
let continue_b = document.querySelector('.continue-b');
let nve_b = document.querySelector('.nve-b');
let n_b = document.querySelector('.n-b');
let se_b = document.querySelector('.se-b');
let im_b = document.querySelector('.im-b');
let hne_b = document.querySelector('.hne-b');

let nve_s = false;
let n_s = false;
let se_s = false;
let im_s = false;
let hne_s = false;

let rank_c = 0;//counter

function setDefaults(){
  nve_s = false;
  n_s = false;
  se_s = false;
  im_s = false;
  hne_s = false;
  nve_b.style.backgroundColor = 'rgb(200,120,100)';
  n_b.style.backgroundColor = 'rgb(150,150,150)';
  se_b.style.backgroundColor = 'rgb(100,120,200)';
  hne_b.style.backgroundColor = 'rgb(200,100,50)';
  im_b.style.backgroundColor = 'rgb(50,100,200)';
}

let typeList = [
  {
    id: 0,
    type: 'Bug',
    nve: false,
    n: false,
    se: false,
    im: false,
    hne: false,
    emblem: 'bug.png'
  },
  {
    id: 1,
    type: 'Dark',
    nve: false,
    n: false,
    se: false,
    im: false,
    hne: false,
    emblem: 'dark.png'
  },
  {
    id: 2,
    type: 'Dragon',
    nve: false,
    n: false,
    se: false,
    im: false,
    hne: false,
    emblem: 'dragon.png'
  },
  {
    id: 3,
    type: 'Electric',
    nve: false,
    n: false,
    se: false,
    im: false,
    hne: false,
    emblem: 'electric.png'
  },
  {
    id: 4,
    type: 'Fairy',
    nve: false,
    n: false,
    se: false,
    im: false,
    hne: false,
    emblem: 'fairy.png'
  },
  {
    id: 5,
    type: 'Fight',
    nve: false,
    n: false,
    se: false,
    im: false,
    hne: false,
    emblem: 'fight.png'
  },
  {
    id: 6,
    type: 'Fire',
    nve: false,
    n: false,
    se: false,
    im: false,
    hne: false,
    emblem: 'fire.png'
  },
  {
    id: 7,
    type: 'Flying',
    nve: false,
    n: false,
    se: false,
    im: false,
    hne: false,
    emblem: 'flying.png'
  },
  {
    id: 8,
    type: 'Ghost',
    nve: false,
    n: false,
    se: false,
    im: false,
    hne: false,
    emblem: 'ghost.png'
  },
  {
    id: 9,
    type: 'Grass',
    nve: false,
    n: false,
    se: false,
    im: false,
    hne: false,
    emblem: 'grass.png'
  },
  {
    id: 10,
    type: 'Ground',
    nve: false,
    n: false,
    se: false,
    im: false,
    hne: false,
    emblem: 'ground.png'
  },
  {
    id: 11,
    type: 'Ice',
    nve: false,
    n: false,
    se: false,
    im: false,
    hne: false,
    emblem: 'ice.png'
  },
  {
    id: 12,
    type: 'Normal',
    nve: false,
    n: false,
    se: false,
    im: false,
    hne: false,
    emblem: 'normal.png'
  },
  {
    id: 13,
    type: 'Poison',
    nve: false,
    n: false,
    se: false,
    im: false,
    hne: false,
    emblem: 'poison.png'
  },
  {
    id: 14,
    type: 'Psychic',
    nve: false,
    n: false,
    se: false,
    im: false,
    hne: false,
    emblem: 'psychic.png'
  },
  {
    id: 15,
    type: 'Rock',
    nve: false,
    n: false,
    se: false,
    im: false,
    hne: false,
    emblem: 'rock.png'
  },
  {
    id: 16,
    type: 'Steel',
    nve: false,
    n: false,
    se: false,
    im: false,
    hne: false,
    emblem: 'steel'
  },
  {
    id: 17,
    type: 'Water',
    nve: false,
    n: false,
    se: false,
    im: false,
    hne: false,
    emblem: 'water.png'
  }
];
$(document).ready(function() {
  document.querySelector('.rankPrompt').textContent = 'How Does ' + typeName + ' Match Up Against ' + typeList[rank_c].type + ' Types?';

});

continue_b.addEventListener('click', () => {
  if(nve_s){
    typeList[rank_c].nve = nve_s;
  }
  if(n_s){
    typeList[rank_c].n = n_s;
  }
  if(se_s){
    typeList[rank_c].se = se_s;
  }
  if(hne_s){
    typeList[rank_c].hne = hne_s;
  }
  if(im_s){
    typeList[rank_c].im = im_s;
  }
  if(rank_c < typeList.length-1){
    if(nve_s || n_s || se_s || hne_s){


        rank_c = rank_c + 1;
        document.querySelector('.rankPrompt').textContent = 'How Does ' + typeName + ' Match Up Against ' + typeList[rank_c].type + ' Types?';

      setDefaults();
    }else{
      alert('No effectiveness selected');
    }

  }else{
    $("#content").load('stackup.html');
    $(document).ready(function() {
      $.getScript('stackup.js');
    });
  }
}); //FINISH THIS

//radio effects -> only one
nve_b.addEventListener('click', () => {
  nve_s = !nve_s;
  if(!nve_s){
    nve_b.style.backgroundColor = 'rgb(200,120,100)';
  }else if(nve_s && !hne_s){
    nve_b.style.backgroundColor = 'rgb(180,100,80)';
  }
  //if another radio selected
  if(n_s){
    n_b.style.backgroundColor = 'rgb(150,150,150)';
    n_s = !n_s;
  }else if(se_s){
    se_b.style.backgroundColor = 'rgb(100,120,200)';
    se_s = !se_s;
  }
});
n_b.addEventListener('click', () => {
  n_s = !n_s;
  if(!n_s){
    n_b.style.backgroundColor = 'rgb(150,150,150)';
  }else if(n_s && !hne_s){
    n_b.style.backgroundColor = 'rgb(130,130,130)';
  }
  //if another radio selected
  if(nve_s){
    nve_b.style.backgroundColor = 'rgb(200,120,100)';
    nve_s = !nve_s;
  }else if(se_s){
    se_b.style.backgroundColor = 'rgb(100,120,200)';
    se_s = !se_s;
  }
});
se_b.addEventListener('click', () => {
  se_s = !se_s;
  if(!se_s){
    se_b.style.backgroundColor = 'rgb(100,120,200)';
  }else if(se_s && !hne_s){
    se_b.style.backgroundColor = 'rgb(80,100,180)';
  }
  //if another radio selected
  if(n_s){
    n_b.style.backgroundColor = 'rgb(150,150,150)';
    n_s = !n_s;
  }else if(nve_s){
    nve_b.style.backgroundColor = 'rgb(200,120,100)';
    nve_s = !nve_s;
  }
});

//go both ways -> e.g. ghost normal matchup
hne_b.addEventListener('click', () => {
  hne_s = !hne_s;
  if(!hne_s){
    hne_b.style.backgroundColor = 'rgb(200,100,50)';
  }else{
    hne_b.style.backgroundColor = 'rgb(180,80,30)';
    //can't have no effect and also have effect
    nve_b.style.backgroundColor = 'rgb(200,120,100)';
    nve_s = !nve_s;
    n_b.style.backgroundColor = 'rgb(150,150,150)';
    n_s = !n_s;
    se_b.style.backgroundColor = 'rgb(100,120,200)';
    se_s = !se_s;
  }
});
im_b.addEventListener('click', () => {
  im_s = !im_s;
  if(!im_s){
    im_b.style.backgroundColor = 'rgb(50,100,200)';
  }else{
    im_b.style.backgroundColor = 'rgb(30,80,180)';
  }
});
