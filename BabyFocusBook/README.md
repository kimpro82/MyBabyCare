## Baby Focus Book for My Son
- Reference ☞ https://docs.python.org/ko/3.10/library/turtle.html

#### As-Is
- Language : Python (Turtle Graphics)
- Functions
    - Randomly generate N-polygon figures including circle
    - Can choose color mode and border size

#### To-Be
- Additional language candidates : Web, VBA, BASIC, ……
- Functions to add
    - Randomly generate and eliminate figures
    - Operate based on touch response


#### List
- Black & White 1 (2021.06.15)


### Black & White 1 (2021.06.15)

```python
from turtle import *
import random
import time
```

```python
def drawFigures(bw = 0, penSize = 0) :

    # locate at random position
    penup()                             # penup() = pu() = up() : move without drawing
    posX = random.randint(-250, 250)
    posY = random.randint(-150, 50)
    setpos(posX, posY)

    # set pen size
    pensize(penSize)

    # choose a random RGB color
    if (bw == 0) :
        hexNum1 = str(hex(random.randint(0, pow(256, 3) - 1))[2:])
        hexNum2 = str(hex(random.randint(0, pow(256, 3) - 1))[2:])
        col1 = '#' + '0' * (6 - len(hexNum1)) + hexNum1
        col2 = '#' + '0' * (6 - len(hexNum2)) + hexNum2
        color(col1, col2)               # color(pencolor, fillcolor)
    else :
        color("white", "black")  

    # draw a random n-polygon figure
    pendown()                           # pendown() = pd() = down() : move with drawing
    begin_fill()
    size = random.randint(25, 100)
    nPolygon = random.randint(1,10)
    if (nPolygon < 3) :                 # steps < 3 : draw just a line
        circle(size)
    else :
        circle(size, steps = nPolygon)
    end_fill()
    time.sleep(1)
```

```python
# main part

setup(width = 600, height = 300)
title("My Baby Black & White Book 1")

hideturtle()                            # hide turtle : make the moving speed faster
delay(0)                                # 0 : mostly faster

n = 0
while (True) :
    drawFigures(bw = 1, penSize = 5)    # bw : 1 - b/w mode, 0 - color mode (default)
    n += 1
    if (n > 9) :
        clearscreen()
        hideturtle()                    # clearscreen() initializes visibility of the turtle
        n = 0
```

##### Output 1 : bw = 1, pensize = 0
![BW01_1](Images\BW01_1.gif)

##### Output 2 : bw = 0, pensize = 0
![BW01_2](Images\BW01_2.gif)

##### Output 3 : bw = 1, pensize = 5
![BW01_3](Images\BW01_3.gif)