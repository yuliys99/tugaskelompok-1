var myCanvas = document.getElementById('botol');
var context = myCanvas.getContext('2d');
myCanvas.width= myCanvas.scrollWidth;
myCanvas.height=myCanvas.scrollHeight;
//badan1
context.fillStyle='blue';
context.fillRect(70,180,150,210); 
context.strokeStyle="blue";
context.lineWidth=1.5;
context.strokeRect(70,180,150,210);

//tutup1
context.fillStyle='orange';
context.fillRect(70,149,150,32); 
context.strokeStyle="#000000";
context.lineWidth=1;
context.strokeRect(70,149,150,32);

// pegangan1 
context.fillStyle='blue';
context.fillRect(133,124,25,24); 
context.strokeStyle="#000000";
context.lineWidth=0.8;
context.strokeRect(133,125,25,24);

//badan2
context.fillStyle='blue';
context.fillRect(280,180,150,210);
context.strokeStyle="blue";
context.lineWidth=1.5;
// context.strokeRect(280,180,150,210);

//tutup2
context.fillStyle='orange';
context.translate(147,-192);
context.rotate(60 * Math.PI/360);
context.fillRect(280,149,150,32); 
context.strokeStyle="#000000";
context.lineWidth=1;
context.strokeRect(280,149,150,32);

// pegangan2
context.fillStyle='blue';
context.fillRect(340,124,25,24); 
context.strokeStyle="#000000";
context.lineWidth=1;
context.strokeRect(340,125,25,24);


//badan3
context.fillStyle='blue';
context.translate(10,217);
context.rotate(-60 * Math.PI/360);
context.fillRect(440,180,150,210); 
context.strokeStyle="blue";
context.lineWidth=1.5;
context.strokeRect(440,180,150,210);

//tutup3
context.fillStyle='orange';
context.translate(740,-410);
context.rotate(180 * Math.PI/360);
context.fillRect(440,149,150,32); 
context.strokeStyle="#000000";
context.lineWidth=1;
context.strokeRect(440,149,150,32);

// pegangan3 
context.fillStyle='blue';
context.fillRect(500,124,25,24); 
context.strokeStyle="#000000";
context.lineWidth=0.8;
context.strokeRect(500,125,25,24);
