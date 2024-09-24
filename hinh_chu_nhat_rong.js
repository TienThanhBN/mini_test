let rows = 6;
let cols = 20;
for (let i = 1; i <= rows; i++) {
    let result = "";
    for (let j = 1; j <= cols; j++) {
        if (i === 1 || i === rows || j === 1 || j === cols) {
            result += " * ";
        } else {
            result += "&nbsp;&nbsp;";
        }
    }
    document.write(result + "<br>");
}
