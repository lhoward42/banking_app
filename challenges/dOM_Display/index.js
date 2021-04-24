// The function the button is currently firing
const getAndDisplayFilms = () => {
    const url = "https://ghibliapi.herokuapp.com/films"
    fetch(url)
        .then(res => res.json())
        .then(json => {
            console.log(json)
            displayFilms(json)
        })
}

let onClickButton = document.getElementById('testing-onclick')
onClickButton.onclick = getAndDisplayFilms

const displayFilms = (films) => { // This is grabbing the container
    const wrapper = document.getElementById("results")

    // This will do the code block for each film item 
    for (let film of films){ // Creates 3 new tags
        let card = document.createElement("div")
        let card_header = document.createElement("div")
        let card_body = document.createElement("div")

        // Gives each tag a class / innertext  if needed
        card.className = "card"
        card_header.className = "card-header"
        card_body.className = "card-body"
        card_header.innerText = `${film.title} ${film.release_date}`
        card_body.innerText = film.description 

        // Adding the inner divs to the card
        card.appendChild(card_header)
        card.appendChild(card_body)
        // Adding a card to the container / wrapper 
        wrapper.appendChild(card)
    }
}