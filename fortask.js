let students=
[{id:1,s_name:"Pavan",city:"hyd"},

{id:2,s_name:"Arjun",city:"sec"},
{id:3,s_name:"Meena",city:"vizag"},
{id:4,s_name:"Rahul",city:"Bengulur"},
{id:5,s_name:"Sita",city:"Chennai"},
{id:6,s_name:"Vijay",city:"Mumbai"}

];

// for(let i in students) {
//     console.log(students[i].s_name,students[i].city)
    
    
// }

for(let i of students) {
    console.log(i.s_name,"from",i.city);
    }
