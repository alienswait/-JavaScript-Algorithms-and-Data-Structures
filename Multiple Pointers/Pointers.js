function countUniqValues(arr){

    if(arr.length ===0) return 0;
    var i = 0
    for (let j = 0; j < arr.length; j++) {
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j]
        }

        console.log(i,j)
        
    }

    return i + 1;
}

countUniqValues([1,1,1,2,2,3,4,5,5,5,6,7])