//setImmediate(function () {
//    console.log('setImmediate延迟执行1');
//    setImmediate(function () {
//        console.log('setImmediate延迟执行2');
//    });
//    process.nextTick(function () {
//        console.log('nextTick延迟执行3');
//    });
//    console.log('正常启动2');
//});
//process.nextTick(function () {
//    console.log('nextTick延迟执行1');
//    process.nextTick(function () {
//        console.log('nextTick延迟执行2');
//    });
//});
//console.log('正常启动1');

/**********************************************HR***********************************************/

//(function () {
//    var events = require('events');
//    var emitter = new events.EventEmitter();
//    emitter.on('event1', function (msg) {
//        console.log(msg);
//    });
//    emitter.emit('event1', 'emit a event 1');
//    setTimeout(function () {
//        console.log('setTimeout 1');
//    },0);
//    console.log('normal flow 1');
//})();

//var d151109_1 = require('./d151109-1');
//console.log(d151109_1.get());
//d151109_1.add();
//console.log(d151109_1.get());
//(function () {
//    var fs = require('fs');
//    var reader = fs.createReadStream('1.txt');
//    var writer = fs.createWriteStream('2.txt');
//    reader.on('data', function (chunk) {
//        writer.write(chunk);
//    });
//    reader.on('end', function () {
//        writer.end();
//    });
//})();

//(function () {
//    var fs = require('fs');
//    //由于限定了buffer对象的长度为11，中文在utf-8下占3个字节，所以第一个buffer对象在输出时，只能显示3个字符，一个字符三个字节，11个字节也就只能显示3个，余下2个将会以乱码形式显示
//    var rs = fs.createReadStream('1.txt', {highWaterMark : 11});
//    var data = '';
//    rs.on('data', function (trunk) {
//        data += trunk;
//    });
//    rs.on('end', function () {
//        console.log(data);
//    })
//})();

//(function () {
//    //利用iconv-lite模块，将每个buffer对象返回的字节串联起来，将最终的字节交给iconv-lite去解码，就能解决问题了
//    var iconv = require('iconv-lite');
//    var fs = require('fs');
//    var rs = fs.createReadStream('1.txt', {highWaterMark : 11});
//    var chunks = [];
//    var size = 0;
//    rs.on('data', function (chunk) {
//        chunks.push(chunk);
//        size += chunk.length;
//    });
//    rs.on('end', function () {
//        var buf = Buffer.concat(chunks, size);
//        var str = iconv.decode(buf, 'utf8');
//        console.log(str);
//    });
//})();

//(function () {
//    var http = require('http');
//    var helloworld = '';
//    for(var i=0; i<1024 * 10; i++){
//        helloworld += 'a';
//    }
//    helloworld = new Buffer(helloworld);
//    console.log(helloworld);
//    http.createServer(function (req, res) {
//        res.writeHead(200);
//        res.end(helloworld);
//    }).listen(8001);
//})();

/*构建TCP服务*/
//(function () {
//    var net = require('net');
//    var server = net.createServer(function (socket) {
//        socket.on('data', function (data) {
//            socket.write('你好');
//        });
//        socket.on('end', function () {
//            console.log('连接断开');
//        });
//        socket.write('欢迎光临《深入浅出node.js》示例：\n');
//    });
//
//    server.listen(8124, function () {
//        console.log('server bound');
//    });
//})();

/*构建UDP服务*/
//(function () {
//    var dgram = require('dgram');
//    var server = dgram.createSocket('udp4');
//    server.on('message', function(msg, rinfo){
//        console.log('server got: ' + msg + ' from ' + rinfo.address + ':' + rinfo.port);
//    });
//    server.on('listening', function () {
//        var address = server.address();
//        console.log('server listening ' + address.address + ':' + address.port);
//    });
//    server.bind(41234);
//})();

(function () {
    var url = require('url');
    var querystring = require('querystring');
    console.log(url);
    console.log(querystring);
})();

//每node一个js文件后,都是开启了一个独立的进程,每启动一个js文件就开启了一个独立的进程,所谓模块缓存,是在当前进程下的,在同一个进程下,多次require同一个模块(js文件),第一次require后这个模块的所有代码都会被缓存下来