// BubbleSort

let needSort = [4, 23, 5, 7, 1, 2, 1]

function bubbleSort(arr) {
    let arrL = arr.length
    for (let i = 0; i <= arrL; i++) {
        for (let k = 0; k <= arrL - i - 1; k++) {
            console.log('operation');
            if (arr[k] > arr[k + 1]) {
                let constK = arr[k]
                arr[k] = arr[k + 1]
                arr[k + 1] = constK
            }
        }
    }
}


bubbleSort(needSort)
console.log(needSort);


function minFinder(a, b) {
    let min = 0

    if (a, b) {
        let arr = [a, b]
        for (item of arr) {
            if (item > min) {
                min = item
            }
        }
    }
    for (item of a) {
        if (item > min) {
            min = item
        }
    }

    return min
}

console.log(minFinder(1, 2));
console.log(minFinder([1, 2]));
// console.log(minFinder({ a: 1, b: 2 })); 
// minFinder({a: 1, b: 2}, {a: 11, b: 12})