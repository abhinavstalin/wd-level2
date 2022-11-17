const http=require("http");
const fs=require("fs");
const args=require("minimist")(process.argv.slice(2));

let hec="";
let pec="";
let rdc="";
fs.readFile("home.html",(err,home)=>{
    if(err){
        throw err;
    }
    hec=home;
});

fs.readFile("project.html",(err,project)=>{
    if(err){
        throw err;
    }
    pec=project;
});

fs.readFile("registration.html",(err,registration)=>{
    if(err){
        throw err;
    }
    rdc=registration;
});

http
 .createServer((request,response)=>{
    let url=request.url;
    response.writeHeader(200,{"Content-Type":"text/html"});
    switch(url){
        case "/project":
            response.write(pec);
            response.end();
            break;
        case "/registration":
            response.write(rdc);
            response.end();
            break;
        default:
             response.write(hec);
             response.end();
             break;
    }
 })
 .listen(args["port"]);