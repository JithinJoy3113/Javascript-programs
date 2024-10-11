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

function firstLast(){
        var num=document.getElementById('numOne').value;
        let numLen=num.length;
        let array=[];
        let j=0;
        while (num != 0){    
                  var digit=num%10;                    
                  array[j]=digit;
                  j+=1;
                  num=Math.floor(num/10);
           }                           
        let len=(array.length)-1;
        printOutput('answerIdFirst', array[len]);
        printOutput('answerIdLast', array[0]);
}

function naturalReverse(){
        var ansDiv=document.getElementById('ulId');
        num=document.getElementById('numOne').value;
        for(let i=num;i>=1;i--){
                var display=document.createElement('span');
                display.textContent=i; 
                ansDiv.appendChild(display);                      	
        }        
}

function divisibleFiveEleven(){
        var ansDiv=document.getElementById('ulId');
        num=document.getElementById('numOne').value;
        if (num<55){
            printOutput('error', 'There are no numbers divisible by both 5 and 11 below 55');
        }
        for(let i=1;i<=num;i++){
                var display=document.createElement('span');
                if(i%5 == 0 && i%11 == 0){
                      display.textContent=i; 
                      ansDiv.appendChild(display);
                }                      	
        }        
}

function nOdd(){
        var ansDiv=document.getElementById('ulId');
        num=document.getElementById('numOne').value;
        var display=document.createElement('span');  
        display.textContent="Odd numbers are:" ; 
        ansDiv.appendChild(display); 
        for(let i=1;i<=num;i++){
                display=document.createElement('span');
                if(i%2!=0){
                	display.textContent=i; 
                	ansDiv.appendChild(display); 
                }                                   	
        }        
}

function digitProduct(){
        num=document.getElementById('numOne').value;
        let newNum=num;
        let product=1;
        while (newNum != 0){
		let digit=newNum % 10;
                product=product*digit;
                newNum=Math.floor(newNum/10);                
        }
        printOutput('answerId', "Product of Digits is:"+product);
}

function stringPalindrome(){
 	string=document.getElementById('numOne').value;
        let j=(string.length)-1;
        var str="";
        for(let i=j;i>=0;i--){
		str=str+string[i];
        }
        if (str==string){
		printOutput('answerId', string+" is palindrome");
	}
        else{
		printOutput('answerId', string+" is not palindrome");
	}       
}

function perfectNumber(){
	var num=document.getElementById('numOne').value;
   	let perfect=0;
        for(let i=1;i<num;i++){
		if (num%i == 0){
			perfect=perfect+i;                       
		}
	}
        if (num==perfect){
		printOutput('answerId', num+" is perfect number");
	}
        else{
		printOutput('answerId', num+" is not perfect number");
	}
}

function positiveNegative(){
	let num=document.getElementById('numOne').value;
        if (num<0){
		printOutput('answerId', num+" is negative number");
	}
        else{
		printOutput('answerId', num+" is positive number");
	}	
}

function nEven(){
        var ansDiv=document.getElementById('ulId');
        num=document.getElementById('numOne').value;
        var display=document.createElement('span');  
        display.textContent="Even numbers are:" ; 
        ansDiv.appendChild(display); 
        for(let i=1;i<=num;i++){
                display=document.createElement('span');
                if(i%2==0){
                	display.textContent=i; 
                	ansDiv.appendChild(display); 
                }                                   	
        }        
}

function naturalSumAvg(){
        num=document.getElementById('numOne').value;
        let sum=0;
        let avg=0;
        for(let i=1;i<=num;i++){
               	sum=sum+i;            	
        }
        avg=sum/num; 
            	printOutput('answerId', "Sum is: "+sum);
            	printOutput('answerIdAvg', "Average is: "+avg);
}

function sumOddEven(){
        num=document.getElementById('numOne').value;
        let evenSum=0;
        let oddSum=0;
        for (let i=1;i<=num;i++){
        	if (i%2==0){
 		 	evenSum+=i;
		}
        	else{  
			oddSum+=i;
       		}
        }
        printOutput('answerId', "Even number sum is: "+evenSum);
        printOutput('answerIdOdd', "Odd number sum is: "+oddSum);
}

function numPalindrome(){
	num=document.getElementById('numOne').value;
        let newNum=num;
        let numStr="";
        while (newNum!=0){
		let digit=newNum%10;
                numStr=numStr+digit;
                newNum=Math.floor(newNum/10);
	}
        if (num==numStr){
		printOutput('answerId', num+" is palindrome");
	}
        else{
		printOutput('answerId', num+" is not a palindrome");
        }
}

function stringConcatination(){
	stringOne=document.getElementById('stringOne').value;
        stringTwo=document.getElementById('stringTwo').value;
        stringThree=stringOne+stringTwo;
        printOutput('answerId', "New string is: "+stringThree);
}

function stringConcat(){
	stringOne=document.getElementById('stringOne').value;
        stringTwo=document.getElementById('stringTwo').value;
        stringThree=stringOne.concat(stringTwo);
        printOutput('answerId', "New string is: "+stringThree);
}

function asciiChar(){
        string=document.getElementById('stringOne').value;
        let ul=document.getElementById('ulId');
        for(let i=0; i<=(string.length)-1; i++){
        	let display=document.createElement('span');
                display.textContent= string[i]+" : "+string[i].codePointAt(0)
                ul.appendChild(display); 		
        }
}

function stringFirst(){
	stringOne=document.getElementById('stringOne').value;
        printOutput('answerId', "First character of string is: "+stringOne[0]);
}

function stringLast(){
	stringOne=document.getElementById('stringOne').value;
        printOutput('answerId', "Last character of string is: "+stringOne[(stringOne.length)-1]);
}

function stringMiddle(){
	stringOne=document.getElementById('stringOne').value;
        let len=(stringOne.length)-1
        if (len%2!=0){
		printOutput('answerId', "There is no middle character for: "+stringOne);
        }
        else{
        printOutput('answerId', "Middle character of string is: "+stringOne[Math.floor(len/2)]);
        }
}

function stringChar(){
        var ansDiv=document.getElementById('ulId');
        string=document.getElementById('stringOne').value;
        var display=document.createElement('span');  
        display.textContent="Strig characters are are:"; 
        ansDiv.appendChild(display); 
        for(let i=0;i<=(string.length)-1;i++){
                display=document.createElement('span');
                display.textContent=string[i];
                console.log(string[i]);
                ansDiv.appendChild(display); 
                                 	
        }        
}

