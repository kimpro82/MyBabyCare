from turtle import *
import random
import time

setup(width = 600, height = 300)
title("My Baby Black & White Book 1")

hideturtle()         # hide turtle : make the moving speed faster

def drawCircle() :

    # locate at random position
    penup()             # penup() = pu() = up() : move without drawing
    posX = random.randint(-250, 250)
    posY = random.randint(-150, 50)
    setpos(posX, posY)

    # choose color
    hexNum = str(hex(random.randint(0, pow(256, 3) - 1))[2:])
    col = '#' + '0' * (6 - len(hexNum)) + hexNum
    color(col, col)     # color(pencolor, fillcolor)  

    # draw a circle
    pendown()           # pendown() = pd() = down() : move with drawing
    delay(0)
    begin_fill()
    size = random.randint(25, 100)
    circle(size)
    end_fill()
    time.sleep(1)

n = 0
while (True) :
    drawCircle()
    n += 1
    if (n > 9) :
        clearscreen()
        hideturtle()    # hide turtle : make the moving speed faster
        n = 0


mainloop()              # avoid the screen closing