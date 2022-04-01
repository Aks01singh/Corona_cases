// const request= require("request");
// const cheerio=require("cheerio");
//const chalk=require("chalk");             // we are importing here because of version problem
import request from "request";
import cheerio from "cheerio";
import chalk from "chalk";
console.log("Before");
request('https://www.worldometers.info/coronavirus/',cb);
console.log("After");
function cb(error,response,html){
    if(error){
        console.log('error:',error);
    }
    else{
        handlehtml(html);
    }
}
function handlehtml(html){
    let seltool=cheerio.load(html);
    let contentArr=seltool("#maincounter-wrap span");
        let total=seltool(contentArr[0]).text();
        let deaths=seltool(contentArr[1]).text();
        let recovered=seltool(contentArr[2]).text();
        console.log(chalk.blue("Total cases: "+total));
        console.log(chalk.red("Total deaths: "+deaths));
        console.log(chalk.green("Total recovered: "+recovered));   
}