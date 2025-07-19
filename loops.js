//for-of loop
/*
let str="SAURABH_SINGH"
for(let i of str ){
    console.log("i=",i);
}*/
let student={
    name:"SAURABH SINGH",
    age:22,
    sgpa:6.8,
    ispass:true
};

for(let key in student){
    console.log("key=",key,"value=",student[key]);
}