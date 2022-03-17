function searchTeam(){
    const input = document.getElementById('searchBar').value.toUpperCase();

    const cardContainer = document.getElementById('grid');
    console.log(cardContainer);

    const cards = cardContainer.getElementsByClassName('team-card');
    console.log(cards);

    for(let i = 0; i < cards.length; i++){
        let title = cards[i].querySelector(".text h3.teamName");
        console.log(title);

        if(title.innerText.toUpperCase().indexOf(input) > -1){
            cards[i].style.display = "";
        }else{
            cards[i].style.display = "none";
        }
    }
}

teams.forEach((element, i ) => {

    
    const teamGrid = document.querySelector(".grid");
    
    const card = document.createElement('div');
    card.classList = 'team-card';
    
    const teamCard = `
    
    <a href=${teams[i].page}>
    <div class="team-logo"><img src=${teams[i].image}></div>
    <div class="text">
        <h3 class="teamName">${teams[i].name}</h3>
    </div>
</a> 
    `;
    
    card.innerHTML += teamCard;
    teamGrid.appendChild(card);
    
});

