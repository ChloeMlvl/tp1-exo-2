let posX = 0
let posY = 0
input.onButtonPressed(Button.A, function () {
    posX += 1
    led.unplot(posX, posY)
    posY = Math.min(4, 0)
    led.plot(0, posY)
})
input.onButtonPressed(Button.B, function () {
	
})
basic.forever(function () {
    led.plot(posX, posY)
    basic.pause(1000)
    led.unplot(posX, posY)
    posY += 1
    if (posY == 4) {
        while (posY != 0) {
            led.plot(posX, posY)
            basic.pause(1000)
            led.unplot(posX, posY)
            posY += -1
        }
    }
})
