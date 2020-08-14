
// Initialize an example array
let tempArr = [3, 0, 9, 8, 11, 4, 1, 2, 10, 5, 7, 6]

tempArr.forEach((item) => {
    setTimeout(() => {
        arrSort.push(item)
        console.log(item)
    }, item)
})

