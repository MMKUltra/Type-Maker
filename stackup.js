

let stt = document.getElementById('statboard');
let stp = document.querySelector('.st-prompt');
document.querySelector('#u-emblemimg').src = userEmblem;
document.querySelector('.u-typename').textContent = typeName;
stp.textContent = 'Here\'s how ' + typeName + ' stacks up against others';
let tc = 0;

for(let i = 0; i < typeList.length; i++){
  let nR = document.createElement('tr');
  for(let j = 0; j < 6; j++){
    let nC = document.createElement('td');
    if(j == 0){
      let nN = document.createTextNode(typeList[i].type);
      nC.appendChild(nN);
    }else if(j == 1 && typeList[i].hne){
      nC.classList.add('itDoBe');
    }else if(j == 2 && typeList[i].nve){
      nC.classList.add('itDoBe');
    }else if(j == 3 && typeList[i].n){
      nC.classList.add('itDoBe');
    }else if(j == 4 && typeList[i].se){
      nC.classList.add('itDoBe');
    }else if(j == 5 && typeList[i].im){
      nC.classList.add('itDoBe');
    }

    nR.appendChild(nC);
    tc = tc + 1;
  }
  stt.appendChild(nR);
}
