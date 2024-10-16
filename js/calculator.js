var result=0;
function buttonClick(value){
   	var num=value;
        if(num=='='){
		result=eval(document.getElementById('inputField').value);
                document.getElementById('inputField').value="";
                display(result);
        }
        else if(num=='c'){
		document.getElementById('inputField').value="";
        }
        else{   
		if(result!=0){
			result=0;
                 	document.getElementById('inputField').value="";
			display(num);
                }
                else{      
			display(num);
		}
        }        
}

function display(num){
	document.getElementById('inputField').value+=num;
}