var blockH = 3;
var blockW = 100;
var canvas = document.getElementById('world');
//canvas.width = 500;
canvas.height= 100;


var ctx = canvas.getContext('2d');

function numChanged(){
      document.getElementById("result").textContent = "";
      ctx.clearRect(0,0,canvas.width, canvas.height);
}

function drawBlocks(){
    var num = document.getElementById("numOfBlocks").value;

    var x = 0;
    for (var y = 0; y < num; y++) {
        x = x + 1.0 / (2 * (y + 1));
    }
    canvas.height = num * blockH + 30; 
    canvas.width = blockW * (x + 1.6);

    ctx.clearRect(0, 0, canvas.width, canvas.height);
       
    ctx.lineWidth = 1;
    ctx.beginPath();
    x = 0;
    for (var y = 0; y < num; y++) {
        ctx.rect(blockW * (x + 0.1), blockH * y, blockW, blockH);
        x = x + 1.0 / (2 * (y + 1));
    }

    ctx.fillStyle = "#aaaaff";
    ctx.fillRect(blockW*(x+0.1), blockH*num, blockW*1.5, blockH*10);
    ctx.stroke();
    
    var text = "";
    text = "答：積み木 " +  x.toFixed(2) +  " 個分 はみ出せる。";
    document.getElementById("result").textContent = text;
    
    var element = document.documentElement;
    var bottom = element.scrollHeight - element.clientHeight;
    window.scroll(0, bottom);
}


numChanged();