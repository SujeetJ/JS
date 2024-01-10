function display() {
    var arr = document.getElementById("array").value;
    let n = parseInt(document.getElementById("no").value);
    arr = arr.split(",");
    var arr1 = [];
    show(n, arr1, arr);
    console.log(arr1);
    document.getElementById("result").innerHTML = n + " elements from given array are:" + arr1;
}

function show(n, arr1, arr) {
    for (let i = 0; i < n; i++) {
        arr1.push(arr[i]);
    }
}