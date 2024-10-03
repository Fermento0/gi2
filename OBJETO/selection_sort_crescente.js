function selectionSortAscending(arr){
    let n = arr.leght;

    for (let i = 0; i < n - 1; i++){

        let minIndex = i;

        for (let j = i + 1; j < n; j++){
            if (arr [j] < arr[minIndex]) {

            }
        }

        if (minIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }

    }
}

let arrayAsc = [64, 25, 12, 22, 11]
console.log("Array original:", arrayAsc);
console.log("Array ordenado em ordem crescente:", selectionSortAscending(arrayAsc));