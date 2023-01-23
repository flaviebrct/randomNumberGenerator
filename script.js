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
    let errorStart = document.querySelector("#error-start")
    let errorEnd = document.querySelector("#error-end")
    let text = "Vous devez entrer une valeur"

    if (rangeStart.length == 0 && rangeEnd.length == 0) {
        errorStart.innerHTML = text
        errorEnd.innerHTML = text
    } else if (rangeStart.length == 0) {
        errorStart.innerHTML = text
        errorEnd.innerHTML = null
    } else if (rangeEnd.length == 0) {
        errorEnd.innerHTML = text
        errorStart.innerHTML = null
    } else {
        errorStart.innerHTML = null
        errorEnd.innerHTML = null
        let text = `${randomNumberGenerator(rangeStart, rangeEnd)}`
        para.innerHTML = text
    }
})
