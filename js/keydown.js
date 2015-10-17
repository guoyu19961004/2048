var amount = new Array();
function leftMove(){
    for(i=0;i<rows.length;i++){
        for(j=0;j<lines.length;j++){
            for(n=0;n<number.length;n++){
                if(position[i][j].className==number[n]){
                    amount[j]=n;
                }
            }
        }
        for(m=0,j=0;m,j<lines.length;){
            if(amount[j]==0){
                j++;
                continue;
            }
            else{
                for(s=j;s<lines.length;s++){
                    position[i][s].className="";
                }
                var sum=0;
                var k=j;
                for(;k<lines.length;k++){
                    if(amount[k]==amount[j]){
                            sum++;
                    }
                }
                switch(sum){
                    case 1:
                        position[i][m].className=number[amount[j]];
                         m++;
                        break;
                    case 2:
                        position[i][m].className=number[amount[j]+1];
                        m++;
                        score=cifang(amount[j]+1)+score;
                        break;
                    case 3:
                        position[i][m].className=number[amount[j]+1];
                        position[i][m+1].className=number[amount[j]];
                        m+=2;
                        score=cifang(amount[j]+1)+score;
                        break;
                    case 4:
                        position[i][m].className=number[amount[j]+2];
                        m+=4;
                        score=cifang(amount[j]+2)+score;
                        break;
                    }
                j=sum+j;
            }
        }
    }
}
function rightMove(){
    for(i=0;i<rows.length;i++){
        for(j=0;j<lines.length;j++){
            for(n=0;n<number.length;n++){
                if(position[i][j].className==number[n]){
                    amount[j]=n;
                }
            }
        }
        for(m=lines.length-1,j=lines.length-1;m,j>-1;){
            if(amount[j]==0){
                j--;
                continue;
            }
            else{
                for(s=j;s>-1;s--){
                    position[i][s].className="";
                }
                var sum=0;
                var k=j;
                for(;k>-1;k--){
                    if(amount[k]==amount[j]){
                            sum++;
                    }
                }
                switch(sum){
                    case 1:
                        position[i][m].className=number[amount[j]];
                        m--;
                        break;
                    case 2:
                        position[i][m].className=number[amount[j]+1];
                        m--;
                        score=cifang(amount[j]+1)+score;
                        break;
                    case 3:
                        position[i][m].className=number[amount[j]+1];
                        position[i][m-1].className=number[amount[j]];
                        m-=2;
                        score=cifang(amount[j]+1)+score;
                        break;
                    case 4:
                        position[i][m].className=number[amount[j]+2];
                        m-=4;
                        score=cifang(amount[j]+2)+score;
                        break;
                    }
                j=j-sum;
            }
        }
    }
}
function upMove(){
    for(i=0;i<rows.length;i++){
        for(j=0;j<lines.length;j++){
            for(n=0;n<number.length;n++){
                if(position[j][i].className==number[n]){
                    amount[j]=n;
                }
            }
        }
        for(m=0,j=0;m,j<lines.length;){
            if(amount[j]==0){
                j++;
                continue;
            }
            else{
                for(s=j;s<lines.length;s++){
                    position[s][i].className="";
                }
                var sum=0;
                var k=j;
                for(;k<lines.length;k++){
                    if(amount[k]==amount[j]){
                            sum++;
                    }
                }
                switch(sum){
                    case 1:
                        position[m][i].className=number[amount[j]];
                         m++;
                        break;
                    case 2:
                        position[m][i].className=number[amount[j]+1];
                        m++;
                        score=cifang(amount[j]+1)+score;
                        break;
                    case 3:
                        position[m][i].className=number[amount[j]+1];
                        position[m+1][i].className=number[amount[j]];
                        m+=2;
                        score=cifang(amount[j]+1)+score;
                        break;
                    case 4:
                        position[m][i].className=number[amount[j]+2];
                        m+=4;
                        score=cifang(amount[j]+2)+score;
                        break;
                    }
                j=sum+j;
            }
        }
    }
}
function downMove(){
    for(i=0;i<rows.length;i++){
        for(j=0;j<lines.length;j++){
            for(n=0;n<number.length;n++){
                if(position[j][i].className==number[n]){
                    amount[j]=n;
                }
            }
        }
        for(m=lines.length-1,j=lines.length-1;m>-1,j>-1;){
            if(amount[j]==0){
                j--;
                continue;
            }
            else{
                for(s=j;s>-1;s--){
                    position[s][i].className="";
                }
                var sum=0;
                var k=j;
                for(;k>-1;k--){
                    if(amount[k]==amount[j]){
                            sum++;
                    }
                }
                switch(sum){
                    case 1:
                        position[m][i].className=number[amount[j]];
                        m--;
                        break;
                    case 2:
                        position[m][i].className=number[amount[j]+1];
                        m--;
                        score=cifang(amount[j]+1)+score;
                        break;
                    case 3:
                        position[m][i].className=number[amount[j]+1];
                        position[m-1][i].className=number[amount[j]];
                        m-=2;
                        score=cifang(amount[j]+1)+score;
                        break;
                    case 4:
                        position[m][i].className=number[amount[j]+2];
                        m-=4;
                        score=cifang(amount[j]+2)+score;
                        break;
                    }
                j=j-sum;
            }
        }
    }
}
