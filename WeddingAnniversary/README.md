# [Wedding Anniversary]

I know you are into me


### List

- [7th Wedding Anniversary (2022.03.07)](#7th-wedding-anniversary-20220307)
- [6th Wedding Anniversary (2021.03.07)](#6th-wedding-anniversary-20210307)
- [5th Wedding Anniversary 2 (2020.03.11)](#5th-wedding-anniversary-2-20200311)
- [5th Wedding Anniversary (2020.03.07)](#5th-wedding-anniversary-20200307)


## [7th Wedding Anniversary (2022.03.07)](#list)

- Annual update : change images of the heart and number
- Technical improvements :  
&nbsp;- `html` : relocate `script` tag (* reference ☞ [Script Tag's Location (2022.01.02)](#script-tags-location-20220102))  
&nbsp;- `css` : add `border` with rounded edge / change font from `Comic Sans MS` to `Brush Script MT`  
&nbsp;- `js` : limit letter's color range in consideration of black background (seems trivial)
- Source :  
&nbsp;- Heart ☞ https://www.pinterest.co.kr/pin/301881981279040326/  
&nbsp;- 777 ☞ https://tenor.com/view/jackpot-slot-machine-777-lucky-gif-12992912

![Wedding Anniversary 7](./Images/WeddingAnniversary7.gif)

#### Mainly changed part of `WeddingAnniversary7.html`
```html
<head>
    ……
    <script defer src="WeddingAnniversary7.js"></script>
</head>
```

#### Mainly changed part of `WeddingAnniversary7.css`
```css
body {
    ……
    border: 2px solid white;
    border-radius: 40px;
}
```
```css
#name1 {
    ……
    font-family: "Brush Script MT", "Comic Sans MS", Times, serif;
    ……
}
```

#### Mainly changed part of `WeddingAnniversary7.js`
```js
……
        do                                                                          // to avoid black letters on the black background
        {
            randNumDec[i] = Math.floor(Math.random() * Math.pow(256, 3));           // generate RGB color (decimal)
            console.log(i, randNumDec[i]);                                          // test : ok
        }
        while (randNumDec[i] == 16777216);                                          // 256^3 = 16777216
……
```


## [6th Wedding Anniversary (2021.03.07)](#list)
- Annual Update : change images of the heart and number
- Seperate css id `name` to `name1` and `name2` and maintain the texts in a line
- Enhancement of Javascript : use `for` statement

![Wedding Anniversary 6](./Images/WeddingAnniversary6.gif)

#### Mainly changed part of `WeddingAnniversary6.html`
```html
    <div id='name1' style="display:inline">
        K R
        <div id='heart' style="display:inline">
            <img src="heart2.gif">
        </div>
    </div>
    <div id='name2' style="display:inline">
        E Y
    </div>
```

#### Mainly changed part of `WeddingAnniversary6.css`
```css
body {
    text-align: center;
}

#name1 {
……
    font-family: "Comic Sans MS", Times, serif;
……
}
```

#### `WeddingAnniversary6.js`
```js
function changeColor() {

    const randNumDec = [];     // for containing random numbers decimally
    const randNumHex = [];     // for containing converted numbers hexdecimally
    const cssIdList = ["name1", "name2", "chameleon1", "chameleon2"]; // css id list to change colors

    for (let i = 0; i < 4 ; i++) {
        randNumDec[i] = Math.floor(Math.random() * Math.pow(256, 3)); // generate RGB color (decimal)
        randNumHex[i] = randNumDec[i].toString(16); // turn to the hexdecimal
        document.getElementById(cssIdList[i]).style.color = '#' + randNumHex[i]; // style-color requires #XXXXXX
    }

}

setInterval(changeColor, 500);
```


## [5th Wedding Anniversary 2 (2020.03.11)](#list)
- Enhancement of `vertical-align` between text and image
- No change in `.js` file

![Wedding Anniversary 5 - 2](./Images/WeddingAnniversary5_2.gif)

#### Mainly changed part of `WeddingAnniversary5_2.html`
```html
    <div id='name'>
        K R
        <div id='heart'>
            <img src="heart.gif">
        </div>
        E Y
    </div>
    <div id='chameleon1'>
        Celebrate Our
        <div id='year'>
            <img src="5.gif">
        </div>
        th
    </div>
```

#### Mainly changed part of `WeddingAnniversary5_2.css`
```css
#heart {
    display: inline;
}
#heart img {
    width: 80px;
    height: auto;
}

#year {
    display: inline;
}
#year img {
    vertical-align: -20px;
    width: 100px;
    height: auto;
}
```


## [5th Wedding Anniversary (2020.03.07)](#list)
- Application of [Colorful Show](https://github.com/kimpro82/MyPractice/tree/master/Web#colorful-show-20200304)

![Wedding Anniversary](./Images/WeddingAnniversary5.gif)

#### `WeddingAnniversary5.html`
```html
<!DOCTYPE html>

<html>

<head>
    <meta charset="EUC-KR">
    <title>Wedding Anniversary 5</title>
    <link rel="stylesheet" href="WeddingAnniversary5.css">
</head>

<body>
    <div id='name'>
        K R <img src="https://thumbs.gfycat.com/ZigzagJauntyHapuku-small.gif"  height="70" width="70"> E Y
    </div>
    <div id='chameleon1'>
        Celebrate Our <img src="https://media.giphy.com/media/jQWTJf2Ch2ANz2DdqU/giphy.gif"  height="80" width="80">th
    </div>
    <div id='chameleon2'>
        Wedding Anniversary
    </div>
    <script src="WeddingAnniversary5.js">
    </script> 
</body>

</html>
```

#### `WeddingAnniversary5.css`
```css
@charset "EUC-KR";

#name {
    text-align: center;
    font-family: "Times New Roman", Times, serif;
    font-size: 450%;
}

#chameleon1 {
    text-align: center;
    font-family: "Times New Roman", Times, serif;
    font-size: 400%;
}

#chameleon2 {
    text-align: center;
    font-family: "Times New Roman", Times, serif;
    font-size: 400%;
}
```

#### `WeddingAnniversary5.js`
```js
function changeColor() {
    randNumDec1 = Math.floor(Math.random() * Math.pow(256, 3));
    randNumDec2 = Math.floor(Math.random() * Math.pow(256, 3));
    randNumDec3 = Math.floor(Math.random() * Math.pow(256, 3));
    
    randNumHex1 = randNumDec1.toString(16);
    randNumHex2 = randNumDec2.toString(16);
    randNumHex3 = randNumDec3.toString(16);

    document.getElementById('name').style.color = '#' + randNumHex1;
    document.getElementById('chameleon1').style.color = '#' + randNumHex2;
    document.getElementById('chameleon2').style.color = '#' + randNumHex3;
}

setInterval(changeColor, 500);
```