function newArray(arraySize, value) { //Question 1
    let array=[];
    for(let i=0; i<arraySize; i++)
        array.push(value);
    return array;
}
console.log(newArray(3,'a'));


function revertsArray(array) { //Question 2
    if(Array.isArray(array))
        return array.reverse();
    return "Please enter an array";
}
console.log(revertsArray([3,5,6]));


function clearsArray(array) { //Question 3
    let newArray=[];
    for(let i=0-1; i<array.length; i++)
    {
        if(array[i] === true || (typeof array[i] == "number" && array[i]!=0) || (typeof array[i] == "string" && array[i]!=''))
            newArray.push(array[i]);
    }
    return newArray;
}
console.log(clearsArray([5,3,0,null,,'',false,true,36,"Rotem"]));


function keyValuePairs(array) { //Question 4
    const obj = {};
    for(let i=0; i<array.length; i++)
        if(array[i].length == 2)
            obj[array[i][0]]=array[i][1];
    return obj;
}
console.log(keyValuePairs([['a', 1],['b', 2], 3]));


function withoutListedValues(array, list) { //Question 5
    let newArray=[];
    for(let i=0; i<array.length; i++)
        for(const key in list)
            if(array[i] == list[key])
                array[i]="remove";
    for(let i=0; i<array.length; i++)
        if(array[i]!="remove")
            newArray.push(array[i]);
    return newArray;
}
console.log(withoutListedValues([1,2,3,1,2,6,7], {one:1,two:3}));
