var i = 1;
var localArr = [i];

exports.get = function () {
    return localArr;
};
exports.add = function () {
    localArr.push(++i);
};