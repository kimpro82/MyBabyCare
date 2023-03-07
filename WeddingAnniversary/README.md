# [Wedding Anniversary](../README.md#wedding-anniversary)

You're inside me.


### List

- [8th Wedding Anniversary (2023.03.07)](#8th-wedding-anniversary-20230307)
- [7th Wedding Anniversary (2022.03.07)](#7th-wedding-anniversary-20220307)
- [6th Wedding Anniversary (2021.03.07)](#6th-wedding-anniversary-20210307)
- [5th Wedding Anniversary 2 (2020.03.11)](#5th-wedding-anniversary-2-20200311)
- [5th Wedding Anniversary (2020.03.07)](#5th-wedding-anniversary-20200307)


## [8th Wedding Anniversary (2023.03.07)](#list)

- Annual updates : Change the background, heart and number images and the text font

  ![Wedding Anniversary 8](./Images/WeddingAnniversary8.gif)

- Technical improvements
  - HTML
    - Move all the image urls and style properties to the *css* file
    - Simplify line replacements for improving legibility
  - CSS
    - Use `opacity` all over the `body` tag
    - Change `id` names to `row1_1` `row1_2` `row2` `row3`
  - JavaScript
    - apply *TypeScript*

- Sources :
  [Background](https://steamuserimages-a.akamaihd.net/ugc/88226491225119785/A926E8C91408FF20719AA8781EDB10ADF9BF7626/) /
  [Heart](https://i.pinimg.com/originals/38/a4/69/38a469ce87cd9702d0bea43478ad4df0.gif) /
  [Infinity Symbol](https://thumbs.gfycat.com/OrneryUnluckyAngwantibo-max-1mb.gif)

  <details>
    <summary>WeddingAnniversary8.html : Mainly updated part</summary>

  ```html
  ……

  <body>
      <div id='row1_1'>K R<img/></div>
      <div id='row1_2'>E Y</div>
      <div id='row2'>Celebrate Our <img/>th</div>
      <div id='row3'>Wedding Anniversary</div>
  </body>

  ……
  ```
  </details>
  <details>
    <summary>WeddingAnniversary8.css : Mainly updated part</summary>

  ```css
  body {
      text-align: center;

      max-width: 2880;
      max-height: 1440;

      font-family: fantasy, Times, serif;
      opacity: 0.8;

      /* background-color: black; */
      background-image: url("https://steamuserimages-a.akamaihd.net/ugc/88226491225119785/A926E8C91408FF20719AA8781EDB10ADF9BF7626/");
      background-size : 100%;

      /* border: 2px solid antiquewhite; */
      /* border-radius: 40px; */
  }
  ```
  ```css
  #row1_1 img {
      content: url("https://i.pinimg.com/originals/38/a4/69/38a469ce87cd9702d0bea43478ad4df0.gif");
      vertical-align: -10px;
      width: 130px;
      height: auto;
      opacity: 1;
  }
  ```
  ```css
  #row2 img {
      content: url("https://thumbs.gfycat.com/OrneryUnluckyAngwantibo-max-1mb.gif");
      vertical-align: -35px;
      width: 280px;
      height: auto;
      object-fit: none;
      opacity: 1;
  }
  ```
  </details>
  <details>
    <summary>WeddingAnniversary8ts.ts : Mainly updated part</summary>

  ```ts
  function changeColor()
  {
      const randNumDec = [];                                                          // for containing random numbers decimally
      const randNumHex = [];                                                          // for containing converted numbers hexdecimally
      const cssIdList = ["name1", "name2", "chameleon1", "chameleon2"];               // css id list to change colors

      for (let i = 0; i < 4 ; i++)
      {
          ……
          document.getElementById(cssIdList[i]).style.color = '#' + randNumHex[i];    // style-color requires #XXXXXX
      }
  }

  ……
  ```
  </details>


## [7th Wedding Anniversary (2022.03.07)](#list)

- Annual updates : Change images of the heart and number

  ![Wedding Anniversary 7](./Images/WeddingAnniversary7.gif)

- Technical improvements
  - `html` : Relocate `script` tag (* reference ☞ [Script Tag's Location (2022.01.02)](#script-tags-location-20220102))
  - `css` : Add `border` with rounded edge / change font from `Comic Sans MS` to `Brush Script MT`
  - `js` : Limit letter's color range in consideration of black background (seems trivial)

- Sources :
  [Heart](https://www.pinterest.co.kr/pin/301881981279040326/) /
  [777](https://tenor.com/view/jackpot-slot-machine-777-lucky-gif-12992912)

  <details>
    <summary>WeddingAnniversary7.html: Mainly updated part</summary>

  ```html
  <head>
      ……
      <script defer src="WeddingAnniversary7.js"></script>
  </head>
  ```
  </details>
  <details>
    <summary>WeddingAnniversary7.css : Mainly updated part</summary>

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
  </details>
  <details>
    <summary>WeddingAnniversary7.js : Mainly updated part</summary>

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
  </details>


## [6th Wedding Anniversary (2021.03.07)](#list)

- Annual Updates : Change images of the heart and number

  ![Wedding Anniversary 6](./Images/WeddingAnniversary6.gif)

- Technical improvements

  - CSS : Seperate id `name` to `name1` and `name2` and maintain the texts in a line

  - Javascript : Use `for` statement

  <details>
    <summary>WeddingAnniversary6.html : Mainly updated part</summary>

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
  </details>
  <details>
    <summary>WeddingAnniversary6.css : Mainly updated part</summary>

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
  </details>
  <details>
    <summary>WeddingAnniversary6.js : Mainly updated part</summary>

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
  </details>


## [5th Wedding Anniversary 2 (2020.03.11)](#list)

- Use `vertical-align` between text and image to improve alignment in CSS

  ![Wedding Anniversary 5 - 2](./Images/WeddingAnniversary5_2.gif)

  </details>
  <details>
    <summary>WeddingAnniversary5_2.html : Mainly updated part</summary>

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
  </details>
  <details>
    <summary>WeddingAnniversary5_2.css : Mainly updated part</summary>

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
  </details>


## [5th Wedding Anniversary (2020.03.07)](#list)

- Advanced from [Colorful Show](https://github.com/kimpro82/MyPractice/tree/master/Web#colorful-show-20200304)

  ![Wedding Anniversary](./Images/WeddingAnniversary5.gif)


  <details>
    <summary>WeddingAnniversary5.html</summary>

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
  </details>
  <details>
    <summary>WeddingAnniversary5.css</summary>

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
  </details>
  <details>
    <summary>WeddingAnniversary5.js</summary>

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
  </details>