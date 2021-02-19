
function search_binary( arrayData, value) {

    let startIndex = 0;
    let endIndex = arrayData.length - 1;

    let count = 0;

    while (startIndex <= endIndex) {
        console.log(++count);

        let middleIndex = Math.floor((startIndex + endIndex) / 2); // Phần tử giữa

        if (value === arrayData[middleIndex]) {
            return middleIndex;
        } else if (arrayData[middleIndex] < value) {
            startIndex = middleIndex + 1;
        } else {
            endIndex = middleIndex - 1;
        }
    }

    return -1;
}

let myArray = [ -1, 1, 2, 3, 5, 7, 10];

let searchedIndex = search_binary(myArray, 10);
alert(searchedIndex);