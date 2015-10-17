	var rows=document.getElementById("grid-content").getElementsByTagName("div");
    var buttons=document.getElementsByTagName("button");
    var over=document.getElementById("game-massages");
    var grades=document.getElementById("grade-container").getElementsByTagName("p");
    var grade=grades[0];
    var best=grades[1];
    var score=0;
    var bestGrade=0;
	var position = new Array(); 
    for(i=0;i<rows.length;i++){        
        position[i]=new Array();
        var lines=rows[i].getElementsByTagName("li");   
        for(j=0;j<lines.length;j++){      
        position[i][j]=lines[j];       
        }
    }
    random();
    random();
    for(i=0;i<buttons.length;i++){
        buttons[i].onclick=function(){
            again();
        }
    }
    document.onkeydown=function(e){
    	e=window.event||e;
    	switch(e.keyCode){
    		case 37://左键
            record();
    		leftMove();
            judge();
            gradeChange();
    		break;
    		case 38://上键
            record();
    		upMove();
            judge();
            gradeChange();
    		break;
    		case 39://右键
            record();
            rightMove();
            judge();
            gradeChange();
    		break;
    		case 40://下键
            record();
    		downMove();
            judge();
            gradeChange();
    		break;
    	}
    }