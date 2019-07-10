
//  mode fs
f=require('fs');
//sync
function sync(){
    data=f.readFileSync('input.txt');
    console.log(data.toString());
}


//nosync
function nosync(){
    f.readFile('input.txt',function(err,data){
        //console.log(data.toString())
        if (err) return console.error(err);
        console.log(data.toString())
    });
}

sync();

