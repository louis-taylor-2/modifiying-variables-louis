let hunger = 0
basic.forever(function on_forever() {
    
    if (input.buttonIsPressed(Button.A)) {
        hunger = hunger + 1
        basic.showNumber(hunger)
    } else if (input.buttonIsPressed(Button.B)) {
        hunger = 0
        basic.showNumber(hunger)
    }
    
})
