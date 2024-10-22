function insertionSortAscending(arr){
    let n = arr.lenght;

    for (let i = 1; i < n; i++){
        let key = arr[i];
        let j = i - 1;

        while(j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--
        }

        arr[j + 1] = key;

    }

    return arr;

}

let arrayAsc = [64, 25, 12, 22, 11];
console.log("Array original:", arrayAsc);
console.log("Array ordenado em ordem crescente:", insertionSortAscending(arrayAsc));