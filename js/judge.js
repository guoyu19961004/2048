function random(){
	var i=Math.floor(Math.random()*4);
	var j=Math.floor(Math.random()*4);
	var n=Math.floor(Math.random()*2)+1;
	if(position[i][j].className!=""){
		setTimeout(random,20);
	}else{
		position[i][j].className=number[n];
	}
}
var classNumber=new Array();
var classAmount;
var key;
var allKey;
function record(){
	classAmount=0;
	for(i=0;i<rows.length;i++){
		for(j=0;j<lines.length;j++){
			classNumber[classAmount]=position[i][j].className;
			classAmount++;
		}
	}
}
function judge(){
	classAmount=0;
	for(i=0;i<rows.length;i++){
		for(j=0;j<lines.length;j++){
			if(classNumber[classAmount]==position[i][j].className){
				classAmount++;
				key=false;
			}
			else{
				key=true;
				break;
			}
		}
		if(key==true){
			break;
		}else{
			continue;
		}
	}
	for(n=0;n<classAmount;n++){
		if(classNumber[n]==""){
			allKey=true;
			break;
		}else{
			allKey=false;
		}
	}
	if(key==true){
		random();
	}
	else if(key==false && allKey==false){
		over.style.display="block";
	}
}
function again(){
	for(i=0;i<rows.length;i++){
		for(j=0;j<lines.length;j++){
			position[i][j].className="";
		}
	}
	over.style.display="none";
	random();
	random();
	bestChange();
	score=0;
	gradeChange();
}
function gradeChange(){
	grade.innerHTML="<p>"+score+"</p>";
}
function cifang(n){
	var j=1;
	for(i=0;i<n;i++){
		j*=2;
	}
	return j;
}
function bestChange(){
	if(score>bestGrade){
		bestGrade=score;
		best.innerHTML="<p>"+bestGrade+"</p>";
	}
}