function generate_sudoku(){
  
    //code for gerating sudoku matrix
    //this is example
    for(var i=0;i<9;i++){
        for(var j=0;j<9;j++){
            matrix[i][j]=Math.floor(Math.random()*10);;
        }
    }

    //updating front end
    k=0;
    for(var i=0;i<9;i++){
        for(var j=0;j<9;j++){
            arr[k]=matrix[i][j];
            k++;
        }
    }
    for(var i=1;i<=81;i++){
    	if(arr[i-1]==0)
    		continue;
        idname="cell-"+i;
        var getid=document.getElementById(idname);
        getid.value=arr[i-1];
	}
}