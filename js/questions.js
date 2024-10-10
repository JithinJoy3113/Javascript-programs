var location;
var output;

function printOutput(location,output){
	document.getElementById(location).textContent=output;
}

function helloWorld(){
	output="HelloWorld";
        printOutput("answerId",output);
}

function addTwoNum(){
	numOne=document.getElementById('numOne').value;
        numTwo=document.getElementById('numTwo').value; 
        output=Number(numOne)+Number(numTwo);
        printOutput('answerId',output);
}

function sumAvg(){
	numOne=document.getElementById('numOne').value;
        numTwo=document.getElementById('numTwo').value; 
        printOutput('answerId', Number(numOne)+Number(numTwo));
        printOutput('answerIdAvg',(Number(numOne)+Number(numTwo))/2);
}

function simpleInterest(){
        principal=document.getElementById('principal').value;
        interest=document.getElementById('interest').value;
        duration=document.getElementById('duration').value; 
        printOutput('answerId', (Number(principal)*Number(interest)*Number(duration))/100);
}

function compoundInterest(){
        principal=document.getElementById('principal').value;
        interest=document.getElementById('interest').value;
        duration=document.getElementById('duration').value;
        printOutput('answerId', principal*(1+(interest/100))**duration);
}

function circleArea(){
        radius=document.getElementById('radius').value;
        printOutput('answerId', 3.14*radius**2);
}

function floatNumber(){
        numOne=document.getElementById('numOne').value;
        numTwo=document.getElementById('numTwo').value;
        printOutput('answerIdSum', parseFloat(numOne)+parseFloat(numTwo));
        printOutput('answerIdMinus', parseFloat(numOne)-parseFloat(numTwo));
  	printOutput('answerIdProduct', parseFloat(numOne)*parseFloat(numTwo));
	printOutput('answerIdDivide', parseFloat(numOne)/parseFloat(numTwo));
}

function numberCube(){
        num=document.getElementById('numOne').value;
        printOutput('answerId', num**3);
}

function oddEven(){
        num=document.getElementById('numOne').value;
        if (num%2==0){
 		 printOutput('answerId', "Number is even");
	}
        else{
		printOutput('answerId', "Number is odd");
        }
}

function leapYear(){
        year=document.getElementById('year').value;
        if ((year%4==0) && (year%100 != 0) || (year%400 == 0)){
 		 printOutput('answerId', year+" is a leap year");
	}
        else{
		printOutput('answerId', year+" is not a leap year");
        }
}

function swapNum(){
        numOne=document.getElementById('numOne').value;
        numTwo=document.getElementById('numTwo').value;
        let temp=numOne;
        numOne=numTwo;
        numTwo=temp;        
        printOutput('answerIdOne', "Number One:"+numOne);
        printOutput('answerIdTwo', "Number Two:"+numTwo);
}


function powerNum(){
        num=document.getElementById('numOne').value;
        power=document.getElementById('numPower').value;
        printOutput('answerId', "Power of a number"+num**power);
}

function sumDigit(){
        num=document.getElementById('numOne').value;
        let newNum=num;
        let sum=0;
        while (newNum != 0){
		sum=sum+parseInt(newNum) % 10;
                newNum=parseInt(newNum)/10;
        }
        printOutput('answerId', "Sum of Digits is:"+sum);
}

function reverseNumber(){
        num=document.getElementById('numOne').value;
        let newNum=num;
        let revNumber=0;
        while (newNum != 0){
		revNumber=revNumber*10 + newNum%10;
                newNum=Math.floor(newNum/10);
        }
        printOutput('answerId', "Reverse of "+num+" is: "+revNumber);
}

function largest(){
        numOne=document.getElementById('numOne').value;
	numTwo=document.getElementById('numTwo').value;
        numThree=document.getElementById('numThree').value;
        let max=0;
        let min=0;
        if (numOne > numTwo && numOne > numThree){
 		 max=numOne;
	}
        else if (numTwo > numOne && numTwo > numThree){
		max=numTwo;
        }
        else{
		max=numThree;
 	}
 
        if (numOne < numTwo && numOne < numThree){
 		 min=numOne;
	}
        else if (numTwo < numOne && numTwo < numThree){
		min=numTwo;
        }
        else{
		min=numThree;
 	}
        printOutput('answerIdLargest', "Largest number is: "+max);
        printOutput('answerIdSmallest', "Smallest number is: "+min);        
}

function prime(){
        num=document.getElementById('numOne').value;
        let count=0;
        for(let i=0;i<=num;i++){
                if (num%i==0){
                    count+=1;
                }
        }
        if (count==2){
        	printOutput('answerId', num+" is prime");	
        }
        else{
        	printOutput('answerId', num+" is not a prime");
        }
}

function printHundred(){
        var ansDiv=document.getElementById('ulId');
        for(let i=1;i<=100;i++){
                var display=document.createElement('span');
                display.textContent=i; 
                ansDiv.appendChild(display);                      	
        }        
}

function factorial(){
        num=document.getElementById('numOne').value;
        let fact=1;
        for(let i=1;i<=num;i++){
                fact=fact*i;
        }
        printOutput('answerId',"Factorial of "+num+" is: "+fact);
}

function factors(){
        var ansDiv=document.getElementById('ulId');
        num=document.getElementById('numOne').value;
        for(let i=1;i<=num;i++){
                if (num%i==0){
                	var display=document.createElement('span');
                	display.textContent=i; 
                	ansDiv.appendChild(display);
                }                      	
        }     
}

function multiplication(){
        var ansDiv=document.getElementById('ulId');
        num=document.getElementById('numOne').value;
        for(let i=1;i<=10;i++){
                var product=num*i;
                var display=document.createElement('span');
                display.textContent=num+' x '+i+' = '+product ; 
                ansDiv.appendChild(display);                   	
        }     
}

function natural(){
        var ansDiv=document.getElementById('ulId');
        num=document.getElementById('numOne').value;
        for(let i=1;i<=num;i++){
                var display=document.createElement('span');
                display.textContent=i; 
                ansDiv.appendChild(display);                      	
        }        
}