function check_matrix(){
	console.log(matrix);
	//check if sudoku matrix is true or false 
    for(i=0;i<9;i++){
        for(j=0;j<9;j++){
            console.log("i="+i+" j="+j);
            console.log("\nmatrix[i][j]="+matrix[i][j]);
            //checking for same number in row
            flag=0;
            l=0,m=0;
            for(m=0;m<j;m++){
                if(matrix[i][j]==matrix[i][m]){
                	alert("i="+i+" j="+j);
                    flag++;
                }
            }
            //checking for same number in column
            for(l=0;l<i;l++){
                if(matrix[i][j]==matrix[l][j]){
                	alert("i="+i+" j="+j);
                    flag++;
                }
            }
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
                for(y=m;y<j;y++){
                    if(matrix[i][j]==matrix[x][y]){
                    	alert("i="+i+" j="+j);
                        flag++;
                    }
                }
            console.log("\nflag="+flag);
            if(flag){
                alert("wrong solution");
                break;
            }
        }
        if(flag)
        	break;
    }
}
