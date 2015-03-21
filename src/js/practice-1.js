/*    var D1410282 = document.getElementById("D-141028-2");
var D1410291 = document.getElementById("D-141029-1");
var D1410291btn = D1410291.getElementsByTagName("a");
var D1410281Btn = true;
var D1410281Timer = 0;

function deceleration(){
    var D1410281 = document.getElementById("D-141028-1");
    var D1410281TrueSpeed = 80;     //它越大，真实的速度越慢，它越小，真实的速度越小
    var D1410281Speed = 0;
    var D1410281Area = 1000;

    var go = function () {
    D1410281.style.marginLeft = D1410281.offsetLeft + D1410281Speed + "px";

    D1410281Speed = (D1410281Area - D1410281.offsetLeft) / D1410281TrueSpeed;

    if(D1410281.offsetLeft > D1410281Area){
    return false;
    }

    D1410281Timer = setTimeout(go,10);
    };
    go();

    }

D1410282.addEventListener("click",function(){
    if(D1410281Btn){
    deceleration();
    }else{
    clearTimeout(D1410281Timer);
    //            console.log(deceleration);
    }
    D1410281Btn = !D1410281Btn;
    },false);

function D1410291Fn(){
    for(var i=0; i<D1410291btn.length; i++){
    D1410291btn[i].index = i;
    D1410291btn[i].onclick = function(num){
    //                console.log(D1410291btn[i]);
    //                console.log(this);
    //                console.log(i);
    //                console.log(this.index);
    //                console.log(num);
    return function(){
    return num;
    }
    }
    }
    }

D1410291Fn();

(function(){
    var i=14;
    })();*/

//    console.log(i);

//    console(document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight);
//    alert(document.body.clientHeight);
//    alert(document.body.scrollHeight);
//    alert(document.body.offsetHeight);

function consoleLog(Content) {
    if (!window.console) return false;
    console.log(Content);
    }

//    log(document.getElementById("D-141031-2").clientLeft);
//    consoleLog("fdsafdv");

/*    var getRandomColor = function(){
    return  '#' +
    (function(color){
    return (color +=  '0123456789abcdef'[Math.floor(Math.random()*16)]) //每一次递归的上一次color的值都被当做函数参数传递给了下一次递归，而不需要去包含函数内声明一个color的变量,所以得以和这一次的随机值相加
    //color被赋值为color加上“0123456789abcdef”字符串数组中的一个随机值键值
    && (color.length == 6) ?  color : arguments.callee(color);  //这里进行判断在“&&”之前的条件成立的情况下（前面的恒成立），color的length如果等于6，则return一个color，否则递归调用
    })(''); //空的参数作为第一次递归的作为“color”的加数，是一个空的加数,然后为了保证是string类型的，所以传入的是‘’，而不是null
    }; *//*生成随机颜色方法一*/

/*    var getRandomColor = function(){
    return (function(m,s,c){
    return (c ? arguments.callee(m,s,c-1) : '#') +  //上一行的递归语句只是用来促使函数的递归调用,根据C的值来判断是否递归调用，最后一个递归是把“#”加在前面
    s[m.floor(m.random() * 16)]     //下一行的用来产生“0123456789abcdef”中的随机值，每次产生一位，一共六位
    })(Math,'0123456789abcdef',5)
    };      *//*生成随机颜色方法二*/



//console.log("aaaa");
/*    (function(i){
    consoleLog(i);
    //        arguments.callee();
    })(i);*/

/*    var getRandomColor = function(){
    return "hsb(" + Math.random()  + ", 1, 1)";
    };*/

//        consoleLog(getRandomColor());

/*    var D1410317 = document.getElementById("D-141031-7");
consoleLog(D1410317.offsetWidth);


(function(){
    var D1411011 = document.getElementById("D-141101-1");
    for(var i=0; i<10; i++){
    //            D1411011.innerHTML += "<a href='#'>" + i*10 + "</a>";
    var link = document.createElement("a");
    var text = document.createTextNode(i * 100);
    link.appendChild(text);
    D1411011.appendChild(link);
    }
    })();*/

/*    function FnD1411011(){
    var a = 1;
    return function(){
    a++;
    consoleLog(a);
    }
    }

var FnD1411012 = FnD1411011();

FnD1411012();
FnD1411012();
FnD1411012();*/

//    var D1411012 = document.getElementById("D-141101-2");
//
//    (function(){
//        var aLi = D1411012.getElementsByTagName("li");
//
//        for(var i=0; i<aLi.length; i++){
//            aLi[i].onclick  = (function(i){
//                return function(){
//                    console.log(i);
//                }
//            })(i);
//        }
//    })();

/*    window.onunload = function(){
    alert("dfafdasfsdafd    ");
    };*/

//    (function(){
//        var D1411015 = document.getElementById("D-141101-5");
//
//        D1411015.addEventListener("mouseover",fn,false);
//        D1411015.addEventListener("mouseout",fn,false);
//
//        function fn(event) {
//            event = event || window.event;
//            target = event.srcElement || event.target;
//            if(target.nodeName == this.nodeName) return false;
//            if(event.type == "mouseover"){
//                target.style.backgroundColor = "#FF0000";
//            }
//            if(event.type == "mouseout"){
//                target.style.backgroundColor = "";
//            }
//        }
//    })();


//(function(){

//    var a = String(undefined);
//    var b = String(null);
//    consoleLog(a);
//    consoleLog(b);
//    consoleLog(typeof('' + 1)); //string,空的字符串''能将与它相加的值转换为字符串
//    var num1 = 10;
//    consoleLog(num1++ + 10);    //20,num1++在语句被求值之后执行，所以这里就是num1的被++之前的值加上10的值
//    consoleLog(num1 + 10);  //21，此时的num1在上一条语句那里被num1++了，因此此时的就是num1++之后的值，也就是11加上10的值
//    consoleLog(++num1 + 10);    //先将num1++,再和10相加
//    consoleLog(num1 + 10);  //此时的num1为num1加加后的值
//    for(var i=0; i<100; i++){
//        ++num1;
//    }
//    consoleLog(num1);
//    var a = 1.1;
//    a++;
//    consoleLog(a);
//    var result = 25 | 3;
//    var a = 258;
//    var b = 100;
//    consoleLog(a.toString(2));
//})();

//    function not(ele){      //模拟逻辑非操作符
//        var notBool = null;
//        var bool = Boolean(ele);
//
//        if(ele instanceof Object){
//            return false;
//        }
//
//        if(bool === true){  //全等操作符在操作数未经转换就相等的情况下返回true
//            notBool = false;
//            return notBool;
//        }
//
//        if(bool === false){
//            notBool = true;
//            return notBool;
//        }
//    }

//    function And(ele1,ele2){
//        var arr = Array(arguments);
//        var bool1 = Boolean(ele1);
//        var bool2 = Boolean(ele2);
//
//        if((ele1 instanceof Object) ||
//            ((bool1 === true) && (ele2 instanceof Object)) ||
//                ((ele1 instanceof Object) && (ele2 instanceof Object))){
//            return ele2;
//        }
//
//        arr.every(function(item,index,array){
//            return item === (undefined || null || NaN) ? item
//        });
//
//        if(bool1 === false){
//            return bool1;
//        }
//
//        if(bool1 === true){
//            if(bool2 === true){
//                return bool2;
//            }
//            if(bool2 === false){
//                return bool2;
//            }
//        }
//
//    }
//
//
//consoleLog(And('1','2'));

//    (function(){
//        var arr = [,];
//        if(arr.length > 1){
//            alert('我是IE8以下浏览器');
//        }
//        else if(arr.length === 1){
//            alert('我是IE8以上浏览器');
//        }
//        var eles = document.getElementById("D-141108-1").getElementsByTagName("li");
//        var ele = "<div style='width: 20px; height: 20px; background-color: #FF0000; margin-right: 3px; display: inline-block;'></div>";
//
//        for(var i=0; i<10; i++){
//            eles[eles.length] = eles[eles.length-1];
//        }
//    })();

//    (function () {
//        function FnLength(){
////            consoleLog(["1","2","3"]);
//            consoleLog(this);
//        }
//        FnLength();
////        consoleLog(FnLength.prototype);
//    })();

//    (function(){
//        var oUl = document.getElementById("D-141112-1");
//        var oLi = oUl.getElementsByTagName("li");
//        var Fn1Exp = Fn1;   //由于函数声明提升，所以可以在Fn1前面调用Fn1函数
//
//        for(var i=0; i<oLi.length; i++){
//            oLi[i].onclick = function(){
//                Fn1Exp.apply(this); //Fn1函数体内this对象的值被改变
//            }
//        }
//
//        function Fn1(){
//            consoleLog(this);
//        }
//
//    })();

// var aaa = 123;

// (function(){
//        var x = 1;
//        if(function f(){}){
//            x += typeof f;
//        }
//
//        consoleLog(x);
//        consoleLog(1 + "2");    //number类型与字符串相加，number被转换成字符串，结果是“12”

//        consoleLog(Global);

//        function aaa(){
//            function bbb(){ return 1; }
//
//            return bbb();
//
//            function bbb(){ return 2; }
//        }
//
//        console.log(aaa());

//     consoleLog(this);

// })();


//    (function(){
//        var a = 10;
//        function aaa(){
//            alert(a);
//        }
//        function bbb(){
//            var a = 20;
//            aaa();
//        }
//
//        bbb();
//    })();

//    (function(){
//        function aaa(){ }
//        aaa();
//        consoleLog(aaa.prototype);

//        var sayHi = null;
//        var num = true;

//        document.onclick = function(){
//            if(num){
//                sayHi = function(){
//                    consoleLog(1);
//                }
//            }
//            if(!num){
//                sayHi = function(){
//                    consoleLog(2);
//                }
//            }
//            num = !num;
//            sayHi();
//        };

//        document.onclick = function(){
//            if(num) consoleLog(3);
//
//            if(!num) consoleLog(4);
//
//            num = !num;
//        }

//        var a = {fir:1,las:2};
//        var b = {fir:3,las:4};

//        function aaa(){
//            return function(o1){
//                consoleLog(o1);
//            }
//        }

//        aaa()(13);


//    })();

//    (function(){
//        function factorial(num){
//            if(num <= 1){
//                return 1;
//            }else{
//                return num * factorial(num-1);
//            }
//        }
//
//        consoleLog(factorial(3));
//
//        var bbb = function f(num){
//            if(num <= 1){
//                return 1;
//            }else{
//                return num * f(num-1);
//            }
//        };
//        consoleLog(bbb(3));
//    })();

//(function(){
//    var minArr = [];
//    var arr = [3,9,4,7,5,2,10,6,8,1,3,9,4,7,5,2,10,6,8,1,3,9,4,7,5,2,10,6,8,1,3,9,4,7,5,2,10,6,8,1,3,9,4,7,5,
//        2,10,6,8,1,3,9,4,7,5,2,10,6,8,1,3,9,4,7,5,2,10,6,8,1,3,9,4,7,5,2,10,6,8,1,3,9,4,7,5,2,10,6,8,1,3,9,4,
//        7,5,2,10,6,8,1,3,9,4,7,5,2,10,6,8,1,3,9,4,7,5,2,10,6,8,1,3,9,4,7,5,2,10,6,8,1,3,9,4,7,5,2,10,6,8,1,3,
//        9,4,7,5,2,10,6,8,1,3,9,4,7,5,2,10,6,8,1,3,9,4,7,5,2,10,6,8,1,3,9,4,7,5,2,10,6,8,1,3,9,4,7,5,2,10,6,8,1];
//    var index = null;
//
//    for(var i=0; i<arr.length; i++){
//        var min = Math.min.apply(Math,arr);
//        minArr.push(min);
//        i--;
//        index = arr.indexOf(min);
//        arr.splice(index,1);
//    }
//
//    consoleLog(minArr);
//})();

//(function(){
//    var numArr = [3,9,4,7,5,2,10,6,8,3,9,4,7,5,2,10,6,8,3,9,4,7,5,2,10,6,8,3,9,4,7,5,2,10,6,8
//      ];
//    var a=numArr.length;

//    for(var i=0; i<a; i++){
//        var curent=numArr[i];
//        for(var j=i+1; j < a; j++){
//            if(numArr[i] > numArr[j]){
////                var a = numArr[i];
//                numArr[i] = numArr[j];
//                numArr[j] = curent;
//            }
//
//        }
//    }
//    for(var i=0; i<numArr.length-1; i++){
//        var curent=numArr[i];
//        for(var j=i+1; j < numArr.length; j++){
//            if(curent ==numArr[j]){
//             numArr.splice(j,1);
//                j--;
//            }
//
//        }
//    }
//    console.log(numArr);
//
//})();
    /*    var D1410282 = document.getElementById("D-141028-2");
     var D1410291 = document.getElementById("D-141029-1");
     var D1410291btn = D1410291.getElementsByTagName("a");
     var D1410281Btn = true;
     var D1410281Timer = 0;

     function deceleration(){
     var D1410281 = document.getElementById("D-141028-1");
     var D1410281TrueSpeed = 80;     //它越大，真实的速度越慢，它越小，真实的速度越小
     var D1410281Speed = 0;
     var D1410281Area = 1000;

     var go = function () {
     D1410281.style.marginLeft = D1410281.offsetLeft + D1410281Speed + "px";

     D1410281Speed = (D1410281Area - D1410281.offsetLeft) / D1410281TrueSpeed;

     if(D1410281.offsetLeft > D1410281Area){
     return false;
     }

     D1410281Timer = setTimeout(go,10);
     };
     go();

     }

     D1410282.addEventListener("click",function(){
     if(D1410281Btn){
     deceleration();
     }else{
     clearTimeout(D1410281Timer);
     //            console.log(deceleration);
     }
     D1410281Btn = !D1410281Btn;
     },false);

     function D1410291Fn(){
     for(var i=0; i<D1410291btn.length; i++){
     D1410291btn[i].index = i;
     D1410291btn[i].onclick = function(num){
     //                console.log(D1410291btn[i]);
     //                console.log(this);
     //                console.log(i);
     //                console.log(this.index);
     //                console.log(num);
     return function(){
     return num;
     }
     }
     }
     }

     D1410291Fn();

     (function(){
     var i=14;
     })();*/

//    console.log(i);

//    console(document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight);
//    alert(document.body.clientHeight);
//    alert(document.body.scrollHeight);
//    alert(document.body.offsetHeight);

function consoleLog(Content) {
    if (!window.console) return false;
    console.log(Content);
}

//    log(document.getElementById("D-141031-2").clientLeft);
//    consoleLog("fdsafdv");

/*    var getRandomColor = function(){
 return  '#' +
 (function(color){
 return (color +=  '0123456789abcdef'[Math.floor(Math.random()*16)]) //每一次递归的上一次color的值都被当做函数参数传递给了下一次递归，而不需要去包含函数内声明一个color的变量,所以得以和这一次的随机值相加
 //color被赋值为color加上“0123456789abcdef”字符串数组中的一个随机值键值
 && (color.length == 6) ?  color : arguments.callee(color);  //这里进行判断在“&&”之前的条件成立的情况下（前面的恒成立），color的length如果等于6，则return一个color，否则递归调用
 })(''); //空的参数作为第一次递归的作为“color”的加数，是一个空的加数,然后为了保证是string类型的，所以传入的是‘’，而不是null
 }; *//*生成随机颜色方法一*/

/*    var getRandomColor = function(){
 return (function(m,s,c){
 return (c ? arguments.callee(m,s,c-1) : '#') +  //上一行的递归语句只是用来促使函数的递归调用,根据C的值来判断是否递归调用，最后一个递归是把“#”加在前面
 s[m.floor(m.random() * 16)]     //下一行的用来产生“0123456789abcdef”中的随机值，每次产生一位，一共六位
 })(Math,'0123456789abcdef',5)
 };      *//*生成随机颜色方法二*/



//console.log("aaaa");
/*    (function(i){
 consoleLog(i);
 //        arguments.callee();
 })(i);*/

/*    var getRandomColor = function(){
 return "hsb(" + Math.random()  + ", 1, 1)";
 };*/

//        consoleLog(getRandomColor());

/*    var D1410317 = document.getElementById("D-141031-7");
 consoleLog(D1410317.offsetWidth);


 (function(){
 var D1411011 = document.getElementById("D-141101-1");
 for(var i=0; i<10; i++){
 //            D1411011.innerHTML += "<a href='#'>" + i*10 + "</a>";
 var link = document.createElement("a");
 var text = document.createTextNode(i * 100);
 link.appendChild(text);
 D1411011.appendChild(link);
 }
 })();*/

/*    function FnD1411011(){
 var a = 1;
 return function(){
 a++;
 consoleLog(a);
 }
 }

 var FnD1411012 = FnD1411011();

 FnD1411012();
 FnD1411012();
 FnD1411012();*/

//    var D1411012 = document.getElementById("D-141101-2");
//
//    (function(){
//        var aLi = D1411012.getElementsByTagName("li");
//
//        for(var i=0; i<aLi.length; i++){
//            aLi[i].onclick  = (function(i){
//                return function(){
//                    console.log(i);
//                }
//            })(i);
//        }
//    })();

/*    window.onunload = function(){
 alert("dfafdasfsdafd    ");
 };*/

//    (function(){
//        var D1411015 = document.getElementById("D-141101-5");
//
//        D1411015.addEventListener("mouseover",fn,false);
//        D1411015.addEventListener("mouseout",fn,false);
//
//        function fn(event) {
//            event = event || window.event;
//            target = event.srcElement || event.target;
//            if(target.nodeName == this.nodeName) return false;
//            if(event.type == "mouseover"){
//                target.style.backgroundColor = "#FF0000";
//            }
//            if(event.type == "mouseout"){
//                target.style.backgroundColor = "";
//            }
//        }
//    })();


//(function(){

//    var a = String(undefined);
//    var b = String(null);
//    consoleLog(a);
//    consoleLog(b);
//    consoleLog(typeof('' + 1)); //string,空的字符串''能将与它相加的值转换为字符串
//    var num1 = 10;
//    consoleLog(num1++ + 10);    //20,num1++在语句被求值之后执行，所以这里就是num1的被++之前的值加上10的值
//    consoleLog(num1 + 10);  //21，此时的num1在上一条语句那里被num1++了，因此此时的就是num1++之后的值，也就是11加上10的值
//    consoleLog(++num1 + 10);    //先将num1++,再和10相加
//    consoleLog(num1 + 10);  //此时的num1为num1加加后的值
//    for(var i=0; i<100; i++){
//        ++num1;
//    }
//    consoleLog(num1);
//    var a = 1.1;
//    a++;
//    consoleLog(a);
//    var result = 25 | 3;
//    var a = 258;
//    var b = 100;
//    consoleLog(a.toString(2));
//})();

//    function not(ele){      //模拟逻辑非操作符
//        var notBool = null;
//        var bool = Boolean(ele);
//
//        if(ele instanceof Object){
//            return false;
//        }
//
//        if(bool === true){  //全等操作符在操作数未经转换就相等的情况下返回true
//            notBool = false;
//            return notBool;
//        }
//
//        if(bool === false){
//            notBool = true;
//            return notBool;
//        }
//    }

//    function And(ele1,ele2){
//        var arr = Array(arguments);
//        var bool1 = Boolean(ele1);
//        var bool2 = Boolean(ele2);
//
//        if((ele1 instanceof Object) ||
//            ((bool1 === true) && (ele2 instanceof Object)) ||
//                ((ele1 instanceof Object) && (ele2 instanceof Object))){
//            return ele2;
//        }
//
//        arr.every(function(item,index,array){
//            return item === (undefined || null || NaN) ? item
//        });
//
//        if(bool1 === false){
//            return bool1;
//        }
//
//        if(bool1 === true){
//            if(bool2 === true){
//                return bool2;
//            }
//            if(bool2 === false){
//                return bool2;
//            }
//        }
//
//    }
//
//
//consoleLog(And('1','2'));

//    (function(){
//        var arr = [,];
//        if(arr.length > 1){
//            alert('我是IE8以下浏览器');
//        }
//        else if(arr.length === 1){
//            alert('我是IE8以上浏览器');
//        }
//        var eles = document.getElementById("D-141108-1").getElementsByTagName("li");
//        var ele = "<div style='width: 20px; height: 20px; background-color: #FF0000; margin-right: 3px; display: inline-block;'></div>";
//
//        for(var i=0; i<10; i++){
//            eles[eles.length] = eles[eles.length-1];
//        }
//    })();

//    (function () {
//        function FnLength(){
////            consoleLog(["1","2","3"]);
//            consoleLog(this);
//        }
//        FnLength();
////        consoleLog(FnLength.prototype);
//    })();

//    (function(){
//        var oUl = document.getElementById("D-141112-1");
//        var oLi = oUl.getElementsByTagName("li");
//        var Fn1Exp = Fn1;   //由于函数声明提升，所以可以在Fn1前面调用Fn1函数
//
//        for(var i=0; i<oLi.length; i++){
//            oLi[i].onclick = function(){
//                Fn1Exp.apply(this); //Fn1函数体内this对象的值被改变
//            }
//        }
//
//        function Fn1(){
//            consoleLog(this);
//        }
//
//    })();

// var aaa = 123;

// (function(){
//        var x = 1;
//        if(function f(){}){
//            x += typeof f;
//        }
//
//        consoleLog(x);
//        consoleLog(1 + "2");    //number类型与字符串相加，number被转换成字符串，结果是“12”

//        consoleLog(Global);

//        function aaa(){
//            function bbb(){ return 1; }
//
//            return bbb();
//
//            function bbb(){ return 2; }
//        }
//
//        console.log(aaa());

//     consoleLog(this);

// })();


//    (function(){
//        var a = 10;
//        function aaa(){
//            alert(a);
//        }
//        function bbb(){
//            var a = 20;
//            aaa();
//        }
//
//        bbb();
//    })();

//    (function(){
//        function aaa(){ }
//        aaa();
//        consoleLog(aaa.prototype);

//        var sayHi = null;
//        var num = true;

//        document.onclick = function(){
//            if(num){
//                sayHi = function(){
//                    consoleLog(1);
//                }
//            }
//            if(!num){
//                sayHi = function(){
//                    consoleLog(2);
//                }
//            }
//            num = !num;
//            sayHi();
//        };

//        document.onclick = function(){
//            if(num) consoleLog(3);
//
//            if(!num) consoleLog(4);
//
//            num = !num;
//        }

//        var a = {fir:1,las:2};
//        var b = {fir:3,las:4};

//        function aaa(){
//            return function(o1){
//                consoleLog(o1);
//            }
//        }

//        aaa()(13);


//    })();

//    (function(){
//        function factorial(num){
//            if(num <= 1){
//                return 1;
//            }else{
//                return num * factorial(num-1);
//            }
//        }
//
//        consoleLog(factorial(3));
//
//        var bbb = function f(num){
//            if(num <= 1){
//                return 1;
//            }else{
//                return num * f(num-1);
//            }
//        };
//        consoleLog(bbb(3));
//    })();

//(function(){
//    var minArr = [];
//    var arr = [3,9,4,7,5,2,10,6,8,1,3,9,4,7,5,2,10,6,8,1,3,9,4,7,5,2,10,6,8,1,3,9,4,7,5,2,10,6,8,1,3,9,4,7,5,
//        2,10,6,8,1,3,9,4,7,5,2,10,6,8,1,3,9,4,7,5,2,10,6,8,1,3,9,4,7,5,2,10,6,8,1,3,9,4,7,5,2,10,6,8,1,3,9,4,
//        7,5,2,10,6,8,1,3,9,4,7,5,2,10,6,8,1,3,9,4,7,5,2,10,6,8,1,3,9,4,7,5,2,10,6,8,1,3,9,4,7,5,2,10,6,8,1,3,
//        9,4,7,5,2,10,6,8,1,3,9,4,7,5,2,10,6,8,1,3,9,4,7,5,2,10,6,8,1,3,9,4,7,5,2,10,6,8,1,3,9,4,7,5,2,10,6,8,1];
//    var index = null;
//
//    for(var i=0; i<arr.length; i++){
//        var min = Math.min.apply(Math,arr);
//        minArr.push(min);
//        i--;
//        index = arr.indexOf(min);
//        arr.splice(index,1);
//    }
//
//    consoleLog(minArr);
//})();

//(function(){
//    var numArr = [3,9,4,7,5,2,10,6,8,3,9,4,7,5,2,10,6,8,3,9,4,7,5,2,10,6,8,3,9,4,7,5,2,10,6,8
//      ];
//    var a=numArr.length;

//    for(var i=0; i<a; i++){
//        var curent=numArr[i];
//        for(var j=i+1; j < a; j++){
//            if(numArr[i] > numArr[j]){
////                var a = numArr[i];
//                numArr[i] = numArr[j];
//                numArr[j] = curent;
//            }
//
//        }
//    }
//    for(var i=0; i<numArr.length-1; i++){
//        var curent=numArr[i];
//        for(var j=i+1; j < numArr.length; j++){
//            if(curent ==numArr[j]){
//             numArr.splice(j,1);
//                j--;
//            }
//
//        }
//    }
//    console.log(numArr);
//
//})();

//(function(){
//    var target = document.getElementById("D-150104-4");
//    target.onclick = function(){
//        //window.open("../html/practice-bootstrap.html");
//        window.open("#D-150104-1","_self");
//        window.close();
//    };
//    var bdr = document.getElementById("D-150104-5").getElementsByTagName("a")[0];
//    bdr.style.borderRightColor = "#000000";
//})();

//(function(){
//    var ele1 = document.getElementById("D-150113-1");
//    ele1.addEventListener("click",function(){
//        var newNode = document.createElement("div");
//        var returnNode = this.appendChild(newNode);
//        consoleLog(returnNode);
//    });
//    consoleLog(document.domain);
//})();

//(function(){
//    document.onclick = function(){
//        window.close();
//    }
//})();

//(function(){
//    var ele= document.getElementById("D150120-1");
//    //consoleLog(ele.getAttribute("style"));
//    consoleLog(ele.style);
//})();

//(function(){
//    var ele = document.getElementById("D-150121-2").getElementsByTagName("img")[0];
//    //attributes属性能够返回自定义的属性
//    ele.setAttribute("aaa","aaa");
//    ele.setAttribute("width","100px");
//    var len = ele.attributes;
//    consoleLog(len);
//    //getAttribute方法也能返回自定义的属性
//    consoleLog(ele.getAttribute("bbb"));
//})();

//(function(){
//    var wrap = document.getElementById("D-150127-2");
//    wrap.firstChild.nodeValue = "<ul><li></li><li></li><li></li><li></li><li></li></ul>";
//    consoleLog(document.getElementById("D-150127-2-2").firstChild.nodeValue.length);
//})();

//(function(){
//    var ele = document.getElementById("D-150308-1");
//    console.log(getComputedStyle(ele,false));
//})();,


//(function(){
//    var D1503121atlive = document.getElementById("D-150312-1atlive");
//    var tabWrap = D1503121atlive.getElementsByClassName("tabWrap");
//    //var trigItm = D1503121atlive.getElementsByClassName("trigItm");
//    //var targItm = D1503121atlive.getElementsByClassName("targItm");
//
//    for(var i = 0; i < tabWrap.length; i++){
//        var trigItms = tabWrap[i].getElementsByClassName("trigItm");
//        var targItms = tabWrap[i].getElementsByClassName("targItm");
//        for(var k = 0; k < trigItms.length; k++){
//            trigItms[k].index = k;
//            trigItms[k].onclick = function(){
//                var that = this;
//                //var TargItms = targItms
//                (function(TargItms){
//                    (function(){
//                        consoleLog(TargItms);
//                        for(var j=0; j<TargItms.length; j++){
//                            TargItms[j].style.display = "none";
//                        }
//                        TargItms[that.index].style.display = "block";
//                    })();
//                })(targItms);
//            };
//
//        }
//    }
//
//})();























