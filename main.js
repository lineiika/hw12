

// Дано масив з елементами різних типів. 
// Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.

// const myArr = [33,55,"Liana","Hello",1989,"Maya"];

// const result = myArr.filter(el => typeof el==="number");

// function srednee (myArr){
//    return myArr.reduce((sum,a) => sum + a, 0) / myArr.length;
// }
// console.log(srednee(result));


// Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. 
// У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).
// Вивести результат математичної дії, вказаної в змінній znak.
// Обидва числа і знак виходять від користувача.

// function doMath(x, znak, y) {
//       if (~znak.search(/[^+\-*/%^]/) || znak.length !== 1) return 'Error';
//       return eval(x + znak.replace('^', '**') + y)
//     }
//     const x = prompt('Enter x');
//     const y = prompt('Enter y');
//     const znak = prompt('Enter znak');
//     alert(doMath(x, znak, y))

// Написати функцію заповнення даними користувача двомірного масиву. 
// Довжину основного масиву і внутрішніх масивів задає користувач. 
// Значення всіх елементів всіх масивів задає користувач.
// let m = prompt("m = ")
// let n = prompt("n = ")

// let A = new Array()

// A.length = m;

// function addArray (){
//     for (var i=0; i<m; i++){
//         A[i] = new Array()
//         A[i].length = n
//     }

//     for (var i=0; i<A.length; i++)
//     for (var j=0; j<A[i].length; j++)
//     A[i][j] = prompt('Enter');

//     document.write("A:<br>")
//     for (var i=0; i<A.length; i++)
//     {
//   for (var j=0; j<A[i].length; j++)
//     document.write(A[i][j]+" ")
//     document.write("<br>")
// }
   
// }
// addArray ();




// Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 
// 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". 
// Вихідний рядок та символи для видалення задає користувач.









