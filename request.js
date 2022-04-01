const request= require("request");
console.log("Before");
request('https://www.worldometers.info/coronavirus/',cb);
console.log("After");
function cb(error,response,html){
    console.log('error:',error);
    console.log('statusCode:',response && response.statusCode);
    console.log('html:',html);
}