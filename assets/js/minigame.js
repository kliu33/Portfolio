function collectGame() {
    var game = document.getElementById("game")
    if (game.getAttribute('src') === './images/game-off.png') {
        game.src = './images/game-on.png'
    }
}

function collectApple() {
    var apple = document.getElementById("apple")
    if (apple.getAttribute('src') === './images/apple-off.png') {
        apple.src = './images/apple-on.png'
    }
}

function collectRuby() {
    var ruby = document.getElementById("ruby")
    if (ruby.getAttribute('src') === './images/ruby-off.png') {
        ruby.src = './images/ruby-on.png'
    }
}

function collectHd() {
    var hd = document.getElementById("hd")
    if (hd.getAttribute('src') === './images/hd-off.png') {
        hd.src = './images/hd-on.png'
    }
}