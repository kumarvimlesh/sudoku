function check_matrix(solved_matrix){
	//check if sudoku matrix is true or false 

	
	//if(false){
		//Incorrect
	//}
	//else{
		//updating the front end
        k=0;
        for(var i=0;i<9;i++){
            for(var j=0;j<9;j++){
                arr[k]=solved_matrix[i][j];
                k++;
            }
        }
		for(var i=1;i<=81;i++){
            idname="cell-"+i;
            var getid=document.getElementById(idname);
            getid.value=arr[i-1];
		}
	//}
}