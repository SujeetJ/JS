function display() {
    var arr = document.getElementById("array").value;
    let target = parseInt(document.getElementById("no").value);
    arr = arr.split(",");
    let flag = false;
    console.log(arr, target);
    out: for (var i = 0; i < arr.length; i++) {
        arr[i] = parseInt(arr[i]);
        for (var j = 0; j < arr.length; j++) {
            if (arr[i] + arr[j] == target && i != j) {
                console.log(arr[i] + arr[j]);
                flag = true;
                break out;
            }
        }
    }
    if (flag)
        document.getElementById("result").innerHTML = i + " and " + j + " gives the addition for " + target;
    else
        document.getElementById("result").innerHTML = "No pair of combination possible";
}