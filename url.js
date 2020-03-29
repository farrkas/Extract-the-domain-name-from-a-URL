https://www.codewars.com/kata/514a024011ea4fb54200004b/train/javascript

function domainName(url) {
    
    if (url.indexOf(".") != url.lastIndexOf(".")) {let x=2+url.indexOf("/");}
    else {let x =2+ url.indexOf(".");}
    
    //else { x = url.indexOf("."); };
    
    let u = url.slice(x, url.length);
    
    y = u.indexOf(".");
    let z = u.substring(0, y);
//*/
    console.log(x);
//    console.log(z);
}

//domainName("http://google.com"); //console.log("google");
//domainName("http://google.co.jp");// console.log("google");
domainName("www.xakep.ru");// console.log("xakep");
//domainName("https://youtube.com"); //console.log("youtube");