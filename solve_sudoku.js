function solve_sudoku(){
	//enabling the input where sudoku needs to fill for solving
    for(var i=1;i<=81;i++){
    	if(arr[i-1]!=0)
    		continue;
        idname="cell-"+i;
        var getid=document.getElementById(idname);
        getid.disabled=false;
	}


   //solve matrix code
   solved_matrix=matrix;
   ///
   return solved_matrix;
}

