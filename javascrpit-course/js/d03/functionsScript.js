// let fullName = function(){
//     let full_name ="";
//     full_name_arr = [];
//     captilized_letters = [];
//     new_name = [];
//     // console.log(captilized_letters);
//     full_name = prompt("enter fullname");
//     full_name_arr = full_name.split(" ");
//     for(let i=0; i<full_name_arr.length ;i++){
//         captilized_letters[i] = full_name_arr[i][0].toUpperCase();
//         for(let j=1;j<full_name_arr[i].length;j++){
//             new_name[0] = captilized_letters[i];
//             new_name[j] = full_name_arr[i][j];
//         }
//         full_name_arr[i] = new_name.join('');
//     }                            
//     full_name = full_name_arr.join(" ");
//     console.log(full_name);
// }


// let longestWord = function(){
//     let sentence ="";
//     let sentence_split_arr = [];
//     let words_length = [];
//     let largest_length = 0;
//     let index_num = 0

//     sentence =  prompt("enter your sentence");
//     sentence_split_arr = sentence.split(" ");
//     for(let i=0;i<sentence_split_arr.length;i++){
//         words_length[i] = sentence_split_arr[i].length;
//     }
//     console.log(words_length);
//     largest_length = Math.max(...words_length)
//     index_num = words_length.indexOf(largest_length);
//     console.log(sentence_split_arr[index_num]);
// }

// let alphabeticString = function(){
//     let unordered_string = "";
//     let unordered_string_split = [];
//     let sorted_string_arr = [];

//     unordered_string = prompt("enter your string");
//     unordered_string_split = unordered_string.split("");
//     console.log(unordered_string_split);
//     sorted_string_arr = unordered_string_split.sort();

//     console.log(sorted_string_arr.join(""));

// }

// let extractMonth = function(){
//     let date = new Date();
//     let date_splited_arr = [];
//     console.log(date.getMonth()+1);
// }

// let randomArray = function(len){
//     let input_array = [];
//     for(let i=0;i<5;i++){
//         input_array[i]=Math.random()*len;
//     }
//     console.log(input_array);
// }

// let input_array = [2,1,3,2,7,2,8,4,3,6,10,9,12];
// let sorting = function(){
//     console.table(input_array.sort(function(input_array,b){return input_array-b}));
//     console.table(input_array.sort(function(input_array,b){return b-input_array}));
// }

// let input_array = [2,1,3,2,7,2,8,4,3,6,10,9,12];
// let filterFun = function(num){
//     return num>5;
// }
// console.log(input_array.filter(filterFun));

// let array = [2,1,3,2,7,2,8,4,3,6,10,9,12];
// let getMaxMin = function(){
//     let max = array[0], min = array[0];
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] > max) { max = array[i]; }
//         if (array[i] < min) { min = array[i]; }
//     }
//     console.log("max = " + max);
//     console.log("min = " + min);
// }

let array = [2,1,3,2,7,2,8,4,3,6,10,9,12];
let copyArray = function(){
    let copy_arr = [...array];
    console.log(copy_arr);
}

// let array = [2,1,3,2,7,2,8,4,3,6,10,9,12];
// let removeRepeated = function(array)
// {
//     var output_arr = [];
//     for(let i=0; i<array.length; i++){
//         if(array.indexOf(array[i]) === -1)
//          output_arr.push(array[i])
//     }
//     return output_arr;
// }










