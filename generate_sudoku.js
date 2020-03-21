function update_frontend(){
    //updating front end
    for(var i=0;i<81;i++){
        arr[i]=0;
    }
    k=0;
    for(var i=0;i<9;i++){
        for(var j=0;j<9;j++){
            arr[k]=matrix[i][j];
            k++;
        }
    }
    for(var i=0;i<81;i++){
        idname="cell-"+i;
        var getid=document.getElementById(idname);
        getid.disabled=true;
        if(arr[i]==0)
            getid.value=" ";
        else
            getid.value=arr[i];
    }
}


function generate_sudoku(){
    //code for gerating sudoku matrix
    for(i=0;i<9;i++){
        for(j=0;j<9;j++){
            matrix[i][j]=0;
        }
    }
    //code for generating sudoku matrix
    //console.log(matrix);
    //filling diagonal matrixes
    for(d=0;d<3;d++){
        for(i=3*d;i<3*d+3;i++){
            for(j=3*d;j<3*d+3;j++){
                var while_flag=1;
                //console.log("i="+i+" j="+j);
                while(while_flag){
                    while_flag=0;
                    flag=0;
                    random_number=Math.floor(Math.random()*9)+1;
                    //console.log("random_number="+random_number);
                    matrix[i][j]=random_number;
                    //console.log("matrix[i][j]="+matrix[i][j]);
                    //checking for same number in box
                    for(x=3*d;x<=i;x++)
                        for(y=3*d;y<3*d+3;y++){
                            if(x>=i && y>=j)
                                break;
                            //console.log("x="+x+" y="+y);
                            //console.log("matrix[x][y]="+matrix[x][y]);
                            if(matrix[i][j]==matrix[x][y])
                                flag++;
                        }
                    //console.log("flag="+flag);
                    //console.log(matrix);
                    if(flag)
                        while_flag=1;
                        //console.log("while is end");
                }
            }
        }
    }
    //non diagonal matrixes
    /*for(i=0;i<9;i++){
        for(j=0;j<9;j++){
            console.log("i="+i+" j="+j);
            random_number=1;
            if(((i>=0 && i<=2)&&(j>=0 && j<=2))||((i>=3 && i<=5)&&(j>=3 && j<=5))||((i>=6 && i<=8)&&(j>=6 && j<=8)))
                continue;
            var while_flag=1;
            while(while_flag){
                while_flag=0;
                console.log("random_number="+random_number);
                matrix[i][j]=random_number;
                console.log("matrix[i][j]="+matrix[i][j]);
                //checking for same number in row
                var flag=0;
                var l=0,m=0;
                for(m=0;m<9;m++){
                    if(matrix[i][m]==0 || m==j)
                        continue;
                    console.log("x="+i+" y="+m);
                    console.log("matrix[x][y]="+matrix[i][m]);
                    if(matrix[i][j]==matrix[i][m])
                        flag++;
                }
                console.log("flag after row check = "+flag);
                //checking for same number in column
                for(l=0;l<9;l++){
                    if(matrix[l][j]==0 || l==i)
                        continue;
                    console.log("x="+l+" y="+j);
                    console.log("matrix[x][y]="+matrix[l][j]);
                    if(matrix[i][j]==matrix[l][j])
                        flag++;
                }
                console.log("flag after column check = "+flag);
                //checking for same number in block
                if(i>=0 && i<=2)
                    l=0;
                if (i>=3 && i<=5)
                    l=3;
                if(i>=6 && i<=8)
                    l=6;
                if(j>=0 && j<=2)
                    m=0;
                if (j>=3 && j<=5)
                    m=3;
                if(j>=6 && j<=8)
                    m=6;
                for(x=l;x<i;x++)
                    for(y=m;y<m+3;y++){
                        if(x>=i && y>=j)
                            break;
                        console.log("x="+x+" y="+y);
                        console.log("matrix[x][y]="+matrix[x][y]);
                        if(matrix[i][j]==matrix[x][y])
                            flag++;
                    }
                console.log("flag after box check = "+flag);
                console.log(matrix);
                random_number++;
                if(flag)
                    while_flag=1;
                console.log("while is end");
            }
        }
    }*/
    update_frontend();
}
