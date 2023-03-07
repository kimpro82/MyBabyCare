function changeColor()
{
    const randNumDec = [];                                                          // for containing random numbers decimally
    const randNumHex = [];                                                          // for containing converted numbers hexdecimally
    const cssIdList = ["row1_1", "row1_2", "row2", "row3"];                         // css id list to change colors

    for (let i = 0; i < 4 ; i++)
    {
        do                                                                          // to avoid black letters on the black background
        {
            randNumDec[i] = Math.floor(Math.random() * Math.pow(256, 3));           // generate RGB color (decimal)
            console.log(i, randNumDec[i]);                                          // test : ok
        }
        while (randNumDec[i] == 16777216);                                          // 256^3 = 16777216

        randNumHex[i] = randNumDec[i].toString(16);                                 // turn to the hexdecimal
        document.getElementById(cssIdList[i]).style.color = '#' + randNumHex[i];    // style-color requires #XXXXXX
    }
}

setInterval(changeColor, 500);