//1
let name = ['Mike','Nikola','Tom']
console.log(name[2])
name[1]='alex';
name.splice(1,2)
console.log(name.length)

// //2
let a = [5,3,-4,25,32,-16,6];
let b = [21,-30,9,5,12,-19,5,25];
function ab(a,b){
if(a.length > b.length){
    console.log('a>b')
}else if (a.length<b.length){
    console.log('a<b')
}else{
    console.log('a==b')
}
}
ab(a,b)

// //3
let phrase='I am learning JavaScript right now';
console.log(phrase.split(' '))

//4
let c = [5,3,8,5,3,2,1,2];
let d = [];
c.forEach(value => {
    if (!d.includes(value))
    d.push(value);
    })
    console.log(d)

//5
let users=[
    {id: 1,age: 17},
    {id: 2,age: 18},
    {id: 3,age: 19},
    {id: 4,age: 21},
    {id: 5,age: 17},
    {id: 6,age: 20},
    {id: 7,age: 25},
]
function selectionAge(users){
    users.forEach(user => {
        if(user.age >18 && user.age<21){
         console.log(user.id)
        } 
     });
}
selectionAge(users)

