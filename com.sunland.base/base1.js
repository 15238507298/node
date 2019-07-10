f=require('fs');
function a1(){
    f.readFile('input.txt',function(err,data){
        //console.log(data.toString())
        if (err) return console.error(err);
        console.log(data.toString())
    });
}
a1();

