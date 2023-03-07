//Теория 13 неделя
/*

//1
let date = new Date(2021, 0, 24, 22, 51, 0, 567);
console.log(date); 

//2
getDay() - используется для получения определенного дня недели.
getDay() — вернёт день недели от 0 (воскресенье) до 6 (суббота). 
let today = new Date();
console.log(date.getDay());

//3
let today = new Date();
let tomorrow = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 1);

    let result = (tomorrow = today) / 1000;
console.log(result);

//4
let date = new Date();
console.log(date.getDate()); // день в вашем текущем часовом поясе

//5
let d = new Date(2016, 2, 9);
console.log(d); // Wed Mar 09 2016 00:00:00 GMT+0600 (Восточный Казахстан)

//6  
getTimezoneOffset() — возвращает разницу в минутах между местным часовым поясом и UTC:
let date = new Date();
console.log(new Date().getTimezoneOffset());  // -360

//7 Если местный часовой пояс смещён относительно UTC, то данный метод покажет час в часовом поясе UTC+0 (лондонское время без перехода на летнее время)
let date = new Date();
console.log(date.getUTCHours());

//8
let date = new Date();
console.log(date.getHours()); //// час в текущем часовом поясе   

//9
let d = new Date();
let y = d.getFullYear();
console.log(y);         // 2023

//10 Ошибки нет
let y = new Date(); 
let d = y.getDate();
console.log(d);


*/


