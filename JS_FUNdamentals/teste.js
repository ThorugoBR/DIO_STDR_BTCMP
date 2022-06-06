function split_even_odd(array){
    let evenNums=[];
    let oddNums=[]
    for(let i=0;i<array.length;i++) {
        if(array[i]%2 ===0){
            evenNums.push(array[i]);
        } 
        else {
            oddNums.push(array[i])
        }      
    }
    console.log('Os numeros pares são, ',evenNums);
    console.log('Os numeros impares são, ',oddNums);
}

let vol_test=[0,1,2,3,4,5,6,7,8,9,10,11,12,13];

split_even_odd(vol_test);