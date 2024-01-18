// 2024.01.18
var firstRun = true;
var canvas = document.getElementById('responsiveGridCanvas');
var ctx = canvas.getContext('2d');
var defaultCellSize = 120; // Default cell size
var actualCellSizeX = defaultCellSize;
var actualCellSizeY = defaultCellSize;
var paddingPercentage = 0.05; // 10% padding on each side
var sampleImageSrc = './Images/santa.jpg'; // Updated image path
var pastelColors = [
    '#FFB6C1', '#FFF68F', '#98FB98', '#87CEEB'
];
var cellColors = []; // 2D array to store the color of each cell
var img = new Image(); // Image object
img.src = sampleImageSrc;
var sampleImageAlpha = 0.7; // Fixed transparency for the sample image
img.onload = function () {
    updateCanvas();
};
function updateCanvas() {
    var numCols = Math.floor(window.innerWidth / defaultCellSize);
    var numRows = Math.floor(window.innerHeight / defaultCellSize);
    actualCellSizeX = window.innerWidth / numCols;
    actualCellSizeY = window.innerHeight / numRows;
    canvas.width = numCols * actualCellSizeX;
    canvas.height = numRows * actualCellSizeY;
    for (var y = 0; y < numRows; y += 1) {
        var rowColors = [];
        for (var x = 0; x < numCols; x += 1) {
            // Assign color
            if (firstRun) {
                // Assign a random color
                var randomColor = pastelColors[Math.floor(Math.random() * pastelColors.length)];
                rowColors.push(randomColor);
                ctx.fillStyle = randomColor;
            }
            else {
                ctx.fillStyle = cellColors[y][x];
            }
            ctx.globalAlpha = 1; // Do not apply transparency to the background color
            ctx.fillRect(x * actualCellSizeX, y * actualCellSizeY, actualCellSizeX, actualCellSizeY);
            // Draw the sample image in the grid (apply fixed transparency)
            var paddingX = actualCellSizeX * paddingPercentage;
            var paddingY = actualCellSizeY * paddingPercentage;
            var resizedWidth = actualCellSizeX - 2 * paddingX;
            var resizedHeight = actualCellSizeY - 2 * paddingY;
            // Draw image with padding at the center of each cell
            var imgX = x * actualCellSizeX + paddingX;
            var imgY = y * actualCellSizeY + paddingY;
            ctx.globalAlpha = sampleImageAlpha;
            ctx.drawImage(img, imgX, imgY, resizedWidth, resizedHeight);
        }
        if (firstRun) {
            cellColors.push(rowColors);
        }
    }
    firstRun = false;
}
function handleInput(event) {
    var clickedX = event.clientX - canvas.getBoundingClientRect().left;
    var clickedY = event.clientY - canvas.getBoundingClientRect().top;
    var colIndex = Math.floor(clickedX / actualCellSizeX);
    var rowIndex = Math.floor(clickedY / actualCellSizeY);
    // Change the palette order each time you click
    var currentColorIndex = pastelColors.findIndex(function (color) { return color === cellColors[rowIndex][colIndex]; });
    var nextColorIndex = (currentColorIndex + 1) % pastelColors.length;
    // Only change the color of the selected cell
    cellColors[rowIndex][colIndex] = pastelColors[nextColorIndex];
    // Redraw only the selected cell
    ctx.fillStyle = cellColors[rowIndex][colIndex];
    ctx.globalAlpha = 1; // Do not apply transparency to the background color
    ctx.fillRect(colIndex * actualCellSizeX, rowIndex * actualCellSizeY, actualCellSizeX, actualCellSizeY);
    // Update the image
    img.src = sampleImageSrc;
    // Log variables for debugging
    console.log('actualCellSizeX:', actualCellSizeX);
    console.log('actualCellSizeY:', actualCellSizeY);
    console.log('clickedX:', clickedX);
    console.log('clickedY:', clickedY);
    console.log('colIndex:', colIndex);
    console.log('rowIndex:', rowIndex);
    console.log('currentColorIndex:', currentColorIndex);
    console.log('nextColorIndex:', nextColorIndex);
    console.log('cellColors:', cellColors);
}
canvas.addEventListener('mousedown', handleInput);
canvas.addEventListener('touchstart', function (event) {
    event.preventDefault();
    handleInput(event);
}, { passive: true });
window.addEventListener('resize', function () {
    firstRun = true;
    updateCanvas();
});
