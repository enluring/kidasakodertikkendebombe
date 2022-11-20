radio.onReceivedNumber(function (receivedNumber) {
    bombe = receivedNumber
})
input.onButtonPressed(Button.AB, function () {
    bombe = randint(10, 20)
})
input.onGesture(Gesture.Shake, function () {
    if (bombe > 0) {
        radio.sendNumber(bombe)
        bombe = -1
    }
})
let bombe = 0
bombe = -1
radio.setGroup(6)
basic.forever(function () {
    if (bombe < 0) {
        basic.clearScreen()
    }
    if (bombe == 0) {
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            . . # . .
            . . . . .
            `)
        basic.showLeds(`
            . . # . .
            . # # # .
            # # . # #
            . # # # .
            . . # . .
            `)
        music.playMelody("- A G G A B F - ", 120)
    }
    if (bombe > 0) {
        bombe += -1
    }
})
