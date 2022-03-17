dcData.forEach((element, i ) => {

    
    const playersCard = document.querySelector(".player-card");
    const previewCards = document.querySelector(".player-preview");
    
    const card = document.createElement('div');
    card.classList = 'card';
    card.dataset.name = dcData[i].id;
    const preview = document.createElement('div');
    preview.classList = 'preview';
    preview.dataset.target = dcData[i].id;
    
    const playerCard = `
    
    <div class="player-pic"><img src=${dcData[i].pic}></div>
    <div class="details">
        <h2>${dcData[i].PlayerName}</h2>
        <h5>Team : ${dcData[i].From}</h5>
        <h5>Price : ${dcData[i].Price}</h5>
        <h5>Playing Status : ${dcData[i].isPlaying}</h5>
        <h5>Role : ${dcData[i].description}</h5>
    </div>
    `;

    const previewCard = `
    <img class="close" src="https://img.icons8.com/material-outlined/24/000000/delete-sign.png"/>
        <div class="player-img">
            <img src=${dcData[i].pic}>
        </div>
        <div class="pl-details">
            <p>${dcData[i].PlayerName}</p>
            <h4>Team : ${dcData[i].From}</h4>
            <h4>Price : ${dcData[i].Price} </h4>
            <h4>Role : ${dcData[i].description}</h4>
        </div>
    </div>
    `;
    
    card.innerHTML += playerCard;
    playersCard.appendChild(card);
    preview.innerHTML += previewCard;
    previewCards.appendChild(preview);
    
});


let preveiwContainer = document.querySelector('.player-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');

document.querySelectorAll('.player-card .card').forEach(product =>{
  product.onclick = () =>{
    preveiwContainer.style.display = 'flex';
    let name = product.getAttribute('data-name');
    previewBox.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){
        preview.classList.add('active');
      }
    });
  };
});

previewBox.forEach(close =>{
  close.querySelector('.close').onclick = () =>{
    close.classList.remove('active');
    preveiwContainer.style.display = 'none';
  };
});