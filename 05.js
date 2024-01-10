function merge() {
    let arr1 = document.getElementById("arr1").value;
    let arr2 = document.getElementById("arr2").value;
    arr1 = arr1.split(",");
    arr2 = arr2.split(",");
    let max = (arr1.length < arr2.length) ? arr2.length : arr1.length;
    console.log(arr1, arr2, max);
    for (let i = 0; i < max; i++) {
        arr1.push(arr2[i]);
    }
    console.log(arr1);
    let output = arr1.filter(function (v, i, self) {
        return i == self.indexOf(v);
    });
    console.log(output);
    document.getElementById("result").innerHTML = "Mergered array with unqiue elements : " + output;
}