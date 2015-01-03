function getRandomColors(json) {

    var AdditionArr = [productAddition()];

    function productColor(json) {

        for (var key in json) {

            var ele = json[key];

            for (var i = 0; i < ele.length; i++) {

                function isNowAdditionArr() {
                    var NowproductAddition = productAddition();

                    var NowAdditionArr = AdditionArr.every(function (item, index, array) {
                        return item != NowproductAddition;
                    });

                    if (NowAdditionArr) {
                        AdditionArr.push(NowproductAddition);
                    } else {
                        isNowAdditionArr();
                    }
                }

                isNowAdditionArr();

                ele[i].style.backgroundColor = "rgb(" + AdditionArr[AdditionArr.length - 1].toString() + ")";

            }

        }

    }

    function productAddition() {
        var Addition = [];

        for (var j = 0; j < 2000; j++) {
            if (Addition.length == 3) {
                break;
            }
            var rdm1 = Math.random().toFixed(1) * 10;
            var rdm2 = Math.random().toFixed(1) * 10;
            var rdm3 = Math.random().toFixed(1) * 10;
            var Addit = Number(rdm1.toString() + rdm2.toString() + rdm3.toString());
            if (Addit > 0 && Addit < 255) {
                Addition.push(Addit);
            } else {
                continue;
            }
        }

        return Addition;
    }

    productColor(json);

}

getRandomColors({
    a: (function () {
        var arr = [];
        for (var i = 0, eles = document.getElementsByTagName("body")[0].getElementsByTagName("*"); i < eles.length; i++) {
            if(eles[i].getAttribute("data-hasbgclr")){
                continue;
            }
            arr.push(eles[i]);
        }
        return arr.slice(0, arr.length - 1);
    })()
});
/*生成随机颜色函数2，保证不会生成两个相同的颜色，有时不希望某个元素生成随机颜色，只需要给对应元素添加自定义属性data-hasbgclr="false"即可*/