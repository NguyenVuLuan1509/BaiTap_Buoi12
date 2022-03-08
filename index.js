var readlineSync = require('readline-sync'); //Khai báo readline-sync
var fs = require('fs-js'); // Khai báo fs-js
// Wait for user's response.

var check = readlineSync.question('Bạn muốn thêm sinh viên mới? '); // Su dung readline-sync
if( check== "y"){
    var userName = readlineSync.question('Tên sinh viên? ');
    console.log('Hi ' + userName + '!');
}


// let people3 = JSON.parse(JSON.stringify(people));
// people3.data.otherData.clothes = "test";


let arrTest= {
    stt: {
        name: 'Luan',
    age: 22,
    live: 'Can Tho'
    }
    
}

for( let i=0; i<arrTest.length; i++){
    
}
//Chuyển mảng thành string.
let arrToString= JSON.stringify(arrTest);
// console.log(arrTest);
fs.readFile('data.txt', 'utf-8', (err,data)=>{
    if(err){
        console.log('Loi roi!');
    }
    console.log('Nội dung file data.txt: ' ,data);

    fs.writeFile('dataTest.txt', `${arrToString}`, (err,data)=>{
        if(err){
            return console.log('Loi ghi file roi!');
        }
        console.log('Ghi file thành công!');
    })
}
)

var showMenu = function () {
    console.log("               Student Managerment                  ");
    console.log("====================================================");
    console.log(" 1. Show all student ");
    console.log(" 2.Create student and return Menu");
    console.log(" 3.Delete student");
    console.log(" 4.Edit student");
    console.log(" 5.Find student by name");
    console.log(" 6.Sort student by name ascending");
    console.log(" 7.Sort student by age ascending");
    console.log(" 8.Delete all student");
    console.log(" 9. Sum student age");
    console.log(" 10.Exit");
  };

//   console.log(showMenu());