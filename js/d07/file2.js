//IIFE
const file2=(function()
{
    let number=7;
    console.log(number,"file2");
    console.log(number,file1.number);

    return {number}
})();