function update_frontend(){
    //updating front end
    var arr=new Array(81);
    for(var i=0;i<81;i++){
        arr[i]=0;
    }
    k=0;
    for(var i=0;i<9;i++){
        for(var j=0;j<9;j++){
            arr[k]=mat[i][j];
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


function suffle(arr){
    for (var i = arr.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random()*(i+1));
        var temp=arr[i];
        arr[i]=arr[j];
        arr[j]=temp;
    }       
    return arr;
}

function generate_sudoku(){       

    var number = Array(1,2,3,4,5,6,7,8,9);
    console.log(number);
    var num = suffle(Array(0,3,6));
    console.log(num);
    number = suffle(number);
    console.log(number);
        
    tempmat[0]=number;
    var arr = new Array(9);
    for (var i = 1; i<9; i++){
        if (i==3 || i==6) {
            for(var j=0; j<9; j++){
                tempmat[i][j] = tempmat[i-1][(j+1)%9];
            }
        }
        else{
            for(var j=0; j<9; j++){
                tempmat[i][j] = tempmat[i-1][(j+3)%9];
            }
        }
    }
    console.log("tempmat = \n");
    console.log(tempmat);
    var a=0;
    for(var i=0;i<3;i++){
        var temp = suffle(Array(0,1,2));
        for(var j=0;j<3;j++){
            mat[a++]=tempmat[num[i]+temp[j]];
        }
    }
    console.log(mat);

    update_frontend();
}
