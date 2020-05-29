let user = {
    
    name: 'deepak',
    age : 20,
    schoolname : 'IB',
    standard : 'gareeb'
}


// let name = user.name
// let age = user.age
// let school = user.schoolname

//destructring

let {name , age, schoolname : school } =user
console.log('school', school)
console.log('age', age)
console.log('name', name)

function fid (id){

    let  userid = {
        
        id 
    }
    console.log('userid', userid)
}


fid(10)


path parameters  .. usi 
query string parameter ?key=value&key2=value...

post///update//patch
body {

}
