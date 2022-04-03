const values = {
    2: "two",
    4: "four",
    8: "eight",
    16: "sixteen",
    32: "thirtytwo",
    64: "sixtyfour",
    128: "onetwentyeight",
    256: "twofiftysix",
    512: "fivetwelve",
    1024: "onethousandtwentyfour",
    2048: "twentyfortyeight"

}

function startGame() {
    clearBoard()
    for (i = 1;i<3;i++) {
        let int = Math.floor((Math.random() * 16) + 1)
        console.log(int)
        let startingCell = document.getElementById("A"+int)
        console.log(startingCell)
        startingCell.setAttribute('class', values[2])
        startingCell.innerText = "2"
    }
}

function clearBoard() {
    for (i=1;i<17;i++) {
        let cell = document.getElementById("A"+i)
        cell.removeAttribute('class')
        cell.innerText = ""
    }
}