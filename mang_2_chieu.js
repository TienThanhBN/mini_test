let arr = [
    [2, 3, 4],
    [4, 5, 6],
    [6, 7, 8]
];
let sumDuongCheoChinh = 0;
let sumDuongCheoPhu = 0;
for (let i = 0; i < arr.length; i++) {
    sumDuongCheoChinh += arr[i][i];
    sumDuongCheoPhu += arr[i][arr.length - 1 - i];
}
let hieuCua2DuongCheo = sumDuongCheoChinh - sumDuongCheoPhu;
document.write("Tổng đường chéo chính là: " + sumDuongCheoChinh + "<br>");
document.write("Tổng đường chéo phụ là: " + sumDuongCheoPhu + "<br>");
document.write("Hiệu 2 đường chéo chính là: " + hieuCua2DuongCheo + "<br>");