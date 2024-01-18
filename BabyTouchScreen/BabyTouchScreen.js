var canvas = document.getElementById('responsiveGridCanvas');
var ctx = canvas.getContext('2d');
var cellSize = 100; // Default cell size
var paddingPercentage = 0.1; // 10% padding on each side
var sampleImageSrc = './Images/sample.png'; // Updated image path
// 파스텔 톤 색상 팔레트
var pastelColors = ['#FFB6C1', '#FFF68F', '#98FB98'];
// 고정된 샘플 이미지 투명도
var sampleImageAlpha = 0.7;
// 이미지 객체
var img = new Image();
img.src = sampleImageSrc;
// 각 셀의 색상을 저장하는 2차원 배열
var cellColors = [];
img.onload = function () {
    updateCanvas();
};
function updateCanvas() {
    var numCols = Math.floor(window.innerWidth / cellSize);
    var numRows = Math.floor(window.innerHeight / cellSize);
    var actualCellSize = Math.min(window.innerWidth / numCols, window.innerHeight / numRows);
    canvas.width = numCols * actualCellSize;
    canvas.height = numRows * actualCellSize;
    for (var x = 0; x < canvas.width; x += actualCellSize) {
        var rowColors = [];
        for (var y = 0; y < canvas.height; y += actualCellSize) {
            // Calculate resized dimensions to fit the cell with padding
            var paddingX = actualCellSize * paddingPercentage;
            var paddingY = actualCellSize * paddingPercentage;
            var resizedWidth = actualCellSize - 2 * paddingX;
            var resizedHeight = actualCellSize - 2 * paddingY;
            // Draw image with padding at the center of each cell
            var imgX = x + paddingX;
            var imgY = y + paddingY;
            // 랜덤한 색상 부여
            var randomColor = pastelColors[Math.floor(Math.random() * pastelColors.length)];
            rowColors.push(randomColor);
            ctx.fillStyle = randomColor;
            ctx.globalAlpha = 1; // 배경 색상에는 투명도를 적용하지 않음
            ctx.fillRect(x, y, actualCellSize, actualCellSize);
            // 샘플 이미지를 격자에 그리기 (고정된 투명도 적용)
            ctx.globalAlpha = sampleImageAlpha;
            ctx.drawImage(img, imgX, imgY, resizedWidth, resizedHeight);
        }
        cellColors.push(rowColors);
    }
}
function handleInput(event) {
    var numCols = Math.floor(window.innerWidth / cellSize);
    var actualCellSize = Math.min(window.innerWidth / numCols, window.innerHeight / numCols);
    var clickedX = event.clientX - canvas.getBoundingClientRect().left;
    var clickedY = event.clientY - canvas.getBoundingClientRect().top;
    var colIndex = Math.floor(clickedX / actualCellSize);
    var rowIndex = Math.floor(clickedY / actualCellSize);
    // 클릭할 때마다 팔레트 순서대로 변경
    var nextColor = pastelColors[rowIndex % pastelColors.length];
    // 해당 셀의 색상만 변경
    cellColors[rowIndex][colIndex] = nextColor;
    // 해당 셀만 다시 그리기
    ctx.fillStyle = nextColor;
    ctx.globalAlpha = 1; // 배경 색상에는 투명도를 적용하지 않음
    ctx.fillRect(colIndex * actualCellSize, rowIndex * actualCellSize, actualCellSize, actualCellSize);
    // 이미지 업데이트
    img.src = sampleImageSrc;
}
canvas.addEventListener('mousedown', handleInput);
canvas.addEventListener('touchstart', function (event) {
    event.preventDefault();
    handleInput(event);
});
window.addEventListener('resize', updateCanvas);
