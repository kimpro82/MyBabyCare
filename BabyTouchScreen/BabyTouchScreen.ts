const canvas = document.getElementById('responsiveGridCanvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

const cellSize = 100; // Default cell size
const paddingPercentage = 0.1; // 10% padding on each side
const sampleImageSrc = './Images/sample.png'; // Updated image path

// 파스텔 톤 색상 팔레트
const pastelColors = ['#FFB6C1', '#FFF68F', '#98FB98'];

// 고정된 샘플 이미지 투명도
const sampleImageAlpha = 0.7;

// 이미지 객체
const img = new Image();
img.src = sampleImageSrc;

// 각 셀의 색상을 저장하는 2차원 배열
const cellColors: string[][] = [];

img.onload = function () {
    updateCanvas();
};

function updateCanvas() {
    const numCols = Math.floor(window.innerWidth / cellSize);
    const numRows = Math.floor(window.innerHeight / cellSize);
    const actualCellSize = Math.min(window.innerWidth / numCols, window.innerHeight / numRows);

    canvas.width = numCols * actualCellSize;
    canvas.height = numRows * actualCellSize;

    for (let x = 0; x < canvas.width; x += actualCellSize) {
        const rowColors: string[] = [];

        for (let y = 0; y < canvas.height; y += actualCellSize) {
            // Calculate resized dimensions to fit the cell with padding
            const paddingX = actualCellSize * paddingPercentage;
            const paddingY = actualCellSize * paddingPercentage;

            const resizedWidth = actualCellSize - 2 * paddingX;
            const resizedHeight = actualCellSize - 2 * paddingY;

            // Draw image with padding at the center of each cell
            const imgX = x + paddingX;
            const imgY = y + paddingY;

            // 랜덤한 색상 부여
            const randomColor = pastelColors[Math.floor(Math.random() * pastelColors.length)];
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

function handleInput(event: MouseEvent) {
    const numCols = Math.floor(window.innerWidth / cellSize);
    const actualCellSize = Math.min(window.innerWidth / numCols, window.innerHeight / numCols);

    const clickedX = event.clientX - canvas.getBoundingClientRect().left;
    const clickedY = event.clientY - canvas.getBoundingClientRect().top;

    const colIndex = Math.floor(clickedX / actualCellSize);
    const rowIndex = Math.floor(clickedY / actualCellSize);

    // 클릭할 때마다 팔레트 순서대로 변경
    const nextColor = pastelColors[rowIndex % pastelColors.length];

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
canvas.addEventListener('touchstart', (event) => {
    event.preventDefault();
    handleInput(event);
});

window.addEventListener('resize', updateCanvas);
