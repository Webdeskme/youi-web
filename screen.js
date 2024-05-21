this.socket = io('http://127.0.0.1:3333');
this.socket.on('test', function (test) {
        console.log(test);
	document.getElementById("connect").innerHTML = test;
});
