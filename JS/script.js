//задание 1 - вытащить 3 последние цифры
//задание 2 - поменять 3 последние цифры на .com
let str = 'Excellent'
let ask = prompt('How do you do')
//Задание 1 
new_str = str.slice(6)
//Задание 2
let upd_str = str.replace(/ent/g, '.com')

//Проверка
console.log(`${new_str} ${ask}`)
console.log(`${upd_str}`)



