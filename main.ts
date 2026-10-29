input.onButtonPressed(Button.AB, function () {
    stato = 0
    basic.showString("PRONTI")
})
input.onButtonPressed(Button.B, function () {
    if (stato == 0) {
        stato = 1
        basic.showString("PARTENZA")
    } else if (stato == 1) {
        stato = 2
        basic.showString("VIA")
    } else {
        stato = 0
        basic.showString("PRONTI")
    }
})
let stato = 0
stato = 0
basic.showString("PRONTI")
