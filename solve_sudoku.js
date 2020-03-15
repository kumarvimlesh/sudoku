function solve_sudoku(){
	//enabling the input where sudoku needs to fill for solving
    for(var i=0;i<81;i++){
    	if(arr[i]!=0)
    		continue;
      else{
        idname="cell-"+i;
        var getid=document.getElementById(idname);
        getid.disabled=false;
      }
	}


   //solve matrix code
   solved_matrix=matrix;
   ///
   return solved_matrix;
}

