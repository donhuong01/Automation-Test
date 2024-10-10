// nricGenerator.js

function pad(num, size) {
    var s = "0000000" + num;
    return s.substr(s.length - size);
}

function nricGenerator(first, age) {
    age = parseInt(age, 10);
    if (first != 'S' && first != 'T' && first != 'F' && first != 'G') return;
    if (!(age >= -1 && age <= 9)) age = -1;

    // The IC Generator Algorithm
    var chars = pad(Math.floor(Math.random() * 9999999), 7).split('');
    if (age != -1) chars[0] = age;

    var output = first + chars.join('');

    chars[0] *= 2;
    chars[1] *= 7;
    chars[2] *= 6;
    chars[3] *= 5;
    chars[4] *= 4;
    chars[5] *= 3;
    chars[6] *= 2;

    var sum = 0;
    var offset = (first == "T" || first == "G") ? 4 : 0;
    var st = ["J", "Z", "I", "H", "G", "F", "E", "D", "C", "B", "A"];
    var fg = ["X", "W", "U", "T", "R", "Q", "P", "N", "M", "L", "K"];
    for (var i = 0; i <= 6; i++) {
        sum += chars[i];
    }
    var temp = (offset + sum) % 11;

    var theAlpha = "";
    if (first == "S" || first == "T") {
        theAlpha = st[temp];
    } else if (first == "F" || first == "G") {
        theAlpha = fg[temp];
    } else theAlpha = "?";

    return output + theAlpha;
}

export { nricGenerator }