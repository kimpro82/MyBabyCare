// 9th Wedding Anniversary
// 2024.03.07
// declare the interval for changing colors as a constant
var changeInterval = 500;
// declare the palette of 10 shades of gray as a constant
var palette = ["#000000", "#111111", "#222222", "#333333", "#444444", "#555555", "#666666", "#777777", "#888888", "#999999"];
// declare the css id list to change colors as a constant
var cssIdList = ["row1_1", "row1_2", "row2", "row3"];
function changeColor() {
    // loop through the css id list
    for (var i = 0; i < cssIdList.length; i++) {
        // generate a random index from 0 to 9
        var index = Math.floor(Math.random() * palette.length);
        // get the color from the palette by the index
        var color = palette[index];
        // assign the color to the element by the css id
        document.getElementById(cssIdList[i]).style.color = color;
    }
}
// call the function at the set interval
setInterval(changeColor, changeInterval);
