/*
function discountPrices(prices, discount) {
    const discounted = [];
    const length = prices.length;
    for (let i = 0; i < length; i++) {
        const discountedPrice = prices[i] * (1 - discount);
        discounted.push(discountedPrice);
    }
    //console.log (i);
    console.log(length);
    //console.log(finalPrice);
    return discounted;
}

console.log(discountPrices ([100, 200, 300], 0.5));
*/
/*
function modifyArray (array,callback)
{
    const newArr = [];
    for (let i = 0; i < array.length;i++)
    {
        newArr.push(callback(array[i]));
    }
    return newArr;
}

function doSomething(num)
{
    return num *2;
}

console.log(modifyArray([1,2,3],doSomething));
*/

function printNums () 
{
    console.log(1);
    setTimeout(function() {console.log(2);},1000);
    setTimeout(function(){console.log(3);},0);
    console.log(4);
}

printNums();