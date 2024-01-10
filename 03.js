function output() {
    let str = document.getElementById("string").value;
    let str1 = "";
    console.log(str);
    console.log(str.length);
    var i = 0;
    while (i < str.length) {
        char = str.charAt(i);
        if (str[i] == str[i].toUpperCase()) {
            str1 += char.toLowerCase();
        }
        else {
            str1 += char.toUpperCase();
        }
        i++;
    }
    console.log(str1);
    document.getElementById("answer").innerHTML = "Output:" + str1;
}