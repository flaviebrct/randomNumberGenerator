function randomNumberGenerator(rangeStart, rangeEnd) {
	// write your solution here
    rangeStart = Math.ceil(rangeStart);
    rangeEnd = Math.floor(rangeEnd);
    return Math.floor(Math.random() * (rangeEnd - rangeStart +1)) + rangeStart;
}

let button = document.querySelector("button")
button.addEventListener('click', ()=>{ 
    let rangeStart = document.querySelector("#range-start").value
    let rangeEnd = document.querySelector("#range-end").value
    let para = document.querySelector("#result")

    if (rangeStart.length == 0 ) {
        let text = "Vous devez entrer une valeur de départ"
        para.innerHTML = text
    } else if (rangeEnd.length == 0) {
        let text = "Vous devez entrer une valeur de fin"
        para.innerHTML = text
    } else {
        let text = `${randomNumberGenerator(rangeStart, rangeEnd)}`
        para.innerHTML = text
    }
})
