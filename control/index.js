function screen(){
        alert('test');
		socket.emit('dtype', 'screen');
		window.location.href = '/screen.html'
}
function control(){
        alert('test');
		socket.emit('dtype', 'control');
		window.location.href = '/control.html'
}
