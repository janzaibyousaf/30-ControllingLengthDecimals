var num = 2.5998;
console.log(num.toFixed(2));

 var str = num.toString();
  if (str.charAt(str.length - 1) === "5") {
    str = str.slice(0, str.length - 1) + "6";
  }
 num = Number(str);
 prettyNum = num.toFixed(2);
 console.log(str)