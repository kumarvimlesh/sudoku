
function check_matrix() {
    var submit_arr = new Array(81);
    for(var i=0;i<81;i++){
        idname="cell-"+i;
        var getid=document.getElementById(idname);
        submit_arr[i]=getid.value;
    }
    //console.log(submit_arr);
    var check_matrix = new Array(9);
    for(var i=0;i<9;i++)
        check_matrix[i]=new Array(9);
    var k=0;
    for(var i=0;i<9;i++){
        for(var j=0;j<9;j++){
            check_matrix[i][j]=parseInt(submit_arr[k]);
            k++;
        }
    }

    console.log("check_matrix");
    console.log(check_matrix);

    //checking for correct solution
    var flag = 1;
    //checking for row
    for(var i=0;i<9;i++){
        var zero_arr = Array(0,0,0,0,0,0,0,0,0);
        var count=0;
        for(var j=0;j<9;j++){
            if(zero_arr[check_matrix[i][j]-1]==0){
                count++;
                zero_arr[check_matrix[i][j]-1]=1;
            }
        }
        if(count!=9){
            flag=0;
            break;
        }
    }
    //checking for coulumn
    for(var i=0;i<9;i++){
        var zero_arr = Array(0,0,0,0,0,0,0,0,0);
        var count=0;
        for(var j=0;j<9;j++){
            if(zero_arr[check_matrix[j][i]-1]==0){
                count++;
                zero_arr[check_matrix[j][i]-1]=1;
            }
        }
        if(count!=9){
            flag=0;
            break;
        }
    }
    //checking for each box
    for(var i=0;i<9;i=i+3){
        for(var j=0;j<9;j=j+3){
            var zero_arr = Array(0,0,0,0,0,0,0,0,0);
            var count=0;
            for(var x=i;x<i+3;x++){
                for(var y=j;y<j+3;y++){
                    if(zero_arr[check_matrix[x][y]-1]==0){
                       count++;
                       zero_arr[check_matrix[x][y]-1]=1;
                    }
                }
            }
            if(count!=9){
                flag=0;
                break;
            }
        }
        if(count!=9){
            flag=0;
            break;
        }
    }

    if (flag) {
        alert("correct");
    }
    else{
        alert("wrong");
    }
}
