const socket = io("http://127.0.0.1:3000");
//p1
em_av = 0;
em_bv = 0;
em_xv = 0;
em_yv = 0;
em_rightv = 0;
em_leftv = 0;
em_upv = 0;
em_downv = 0;
//p2
/*em_av2 = 0;
em_bv2 = 0;
em_xv2 = 0;
em_yv2 = 0;
em_rightv2 = 0;
em_leftv2 = 0;
em_upv2 = 0;
em_downv2 = 0;*/
console.log('youi activated');
socket.on('ctrl', (msg) => {
	//p1
	if(msg == 'ad'){
		em_av = 1;
	}
	else if(msg == 'au'){
		em_av = 0;
	}
	else if(msg == 'bd'){
		em_bv = 1;
	}
	else if(msg == 'bu'){
		em_bv = 0;
	}
	else if(msg == 'xd'){
		em_xv = 1;
	}
	else if(msg == 'xu'){
		em_xv = 0;
	}
	else if(msg == 'yd'){
		em_yv = 1;
	}
	else if(msg == 'yu'){
		em_yv = 0;
	}
	else if(msg == 'upd'){
		em_upv = 1;
	}
	else if(msg == 'upu'){
		em_upv = 0;
	}
	else if(msg == 'downd'){
		em_downv = 1;
	}
	else if(msg == 'downu'){
		em_downv = 0;
	}
	else if(msg == 'leftd'){
		em_leftv = 1;
	}
	else if(msg == 'leftu'){
		em_leftv = 0;
	}
	else if(msg == 'rightd'){
		em_rightv = 1;
	}
	else if(msg == 'rightu'){
		em_rightv = 0;
	}
	else if(msg == 'selectd'){
		em_selectv = 1;
	}
	else if(msg == 'selectu'){
		em_selectv = 0;
	}
	else if(msg == 'startd'){
		em_startv = 1;
		console.log('js');
	}
	else if(msg == 'startu'){
		em_startv = 0;
	}
	else if(msg == 'homed'){
		window.location.href = '/index.html'
	}
	else if(msg == 'lbd'){
		em_lbv = 1;
	}
	else if(msg == 'lbu'){
		em_lbv = 0;
	}
	else if(msg == 'rbd'){
		em_rbv = 1;
	}
	else if(msg == 'rbu'){
		em_rbv = 0;
	}
	else if(msg == 'powerd'){
		//em_powerv = 1;
		location.reload();
	}
