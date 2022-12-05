hunger = 0

def on_forever():
    global hunger
    if input.button_is_pressed(Button.A):
        hunger = hunger + 1
        basic.show_number(hunger)
    elif input.button_is_pressed(Button.B):
        hunger = 0
        basic.show_number(hunger)
basic.forever(on_forever)
