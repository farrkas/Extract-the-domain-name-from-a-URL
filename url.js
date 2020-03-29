https://www.codewars.com/kata/514a024011ea4fb54200004b/train/javascript

function domainName(url) {
    let x = 0;
    if (url.includes("www")) { x = 1 + url.indexOf(".") }
    else if (url.includes("http")) { x = 2 + url.indexOf("/"); }

    let u = url.slice(x, url.length);
    y = u.indexOf(".");
    let z = u.substring(0, y);
    //return(z);
    console.log(z);
}

domainName("http://google.com"); //console.log("google");
domainName("http://google.co.jp");// console.log("google");
domainName("www.xakep.ru");// console.log("xakep");
domainName("https://youtube.com"); //console.log("youtube");
domainName("https://developer.mozilla.org/pl/docs");// console.log("developer");
