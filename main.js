// 1. Используя цикл, умножьте все числовые свойства объекта menu на 2. 
// После умножения, удалите свойства width и height. 
// А title замените на строку "Clear"

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
  
}
console.log(menu)

 for (let prop in menu){
  if (typeof menu[prop] == 'number'){
    menu[prop] *= 2
  }
 }
 console.log (menu)
 
 delete menu.width
 delete menu.height
 menu.title = 'Clear'

 console.log (menu)



// ЭТО Я СОЗДАЛ КЛОН , так что бы если я менял основной обьект , клон не менялся , гляньте правильно ли.

// let menuClone = {...menu}

// for (let prop in menu){
// if (typeof menu[prop] == 'number'){
//   menuClone[prop] = menu[prop] *2
// }
// } 

// console.log( 'Клон', menuClone ) 
// console.log(menu)

// delete menu.width 
// delete menu.height 
//  menu.title  = 'Clear' 

 
// console.log( 'Клон','Убрал свойства у оригинала', menuClone) 
// console.log(menu)





