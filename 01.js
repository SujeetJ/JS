
function show() {

    let arr = document.getElementById("array").value;
    // arr = parseInt(arr.split(","));
    let result = document.getElementById("isArr");
    console.log(arr);
    try {
        let isArr = (Array.isArray(eval(arr))) ? "It is an array" : "It is not an array";
        result.innerHTML = arr + " " + isArr;
    }
    catch (error) {
        result.innerHTML = arr + "It is not an array"
    }
}

