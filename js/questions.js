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
        for(let i=55;i<=num;i++){
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

function stringLength(){
	string=document.getElementById('numOne').value;
        let strLen=string.length;
        let length=0;
        while(string[length]!=undefined){
 		length+=1;
	}
        printOutput('answerId', "With method: "+strLen+"\nWithout Method: "+length);
}

function charSearch(){
        document.getElementById('hideButton').style.visibility="hidden";
        document.getElementById('showButton').classList.remove('d-none');
        questionDiv=document.getElementById('questionDiv')	
        let input=document.createElement('input');
        input.type="text";
        input.id="inputId";
        input.className="inputChar form-control";
        let label=document.createElement('label');
        label.id="labelId"
        label.textContent="Enter the Charcter: ";
        questionDiv.appendChild(label);
        questionDiv.appendChild(input);                        
}

function charSearchBtn(){
        string=document.getElementById('numOne').value;
        stringChar=document.getElementById('inputId').value;
        let arr=[];
        for (let i=0;i<string.length;i++){
		if(string[i]==stringChar){
                	arr.push(i);
                }
	}
        if (arr.length==0){
                printOutput('answerId', "Character not found");
        }
        else{
        	printOutput('answerId', "Character found in: "+arr);
        }
}

function charOccBtn(){
        string=document.getElementById('numOne').value;
        stringChar=document.getElementById('inputId').value;
        let count=0;
        for (let i=0;i<string.length;i++){
		if(string[i]==stringChar){
                	count+=1
                }
	}        
        printOutput('answerId', "Number of Occurence: "+count);               
}

function charPrefix(){
	string=document.getElementById('numOne').value;
        stringChar=document.getElementById('inputId').value;
        let label=document.getElementById('labelId');
        label.textContent="Enter the sub string: ";
        if(stringChar==string.slice(0,stringChar.length)){
		printOutput('answerId', stringChar+" is the prefix of "+string);
	}
	else{
		printOutput('answerId', stringChar+" is not the prefix of "+string);
	}
}

function replaceString(){
	string=document.getElementById('numOne').value;
        stringOne=document.getElementById('stringOne').value;
        stringTwo=document.getElementById('stringTwo').value;
        if(string.includes(stringOne)){
        	let newstring=string.replace(stringOne,stringTwo);
                printOutput('answerId', "New string is: "+newstring);
        }
        else{
  		printOutput('answerId', "No string to replace");
	}
        
}

function stringCase(){
	string=document.getElementById('numOne').value;
        let newString="";
        for (let i=0;i<string.length;i++){
                let char=string[i];
        	if(char==char.toLowerCase()){
                        newString+=char.toUpperCase();                      
                }
                else{
 			newString+=char.toLowerCase();
		}
        }
        printOutput('answerId', newString);
}
 
function countChar(){
	string=document.getElementById('numOne').value;
        ansDiv=document.getElementById('ansDiv');
        let vowels='aeiouAEIOU';
	let digits='1234567890';
        var count={vowels:0,special_character:0,digits:0};
        for(let i=0; i<string.length; i++){
		if(vowels.includes(string[i])){
			count.vowels+=1;
                }
                else if(digits.includes(string[i])){
			count.digits+=1;
                }
		else if(!string[i].match(/[a-zA-Z0-9]/)){
			count.special_character+=1;
                }
	}
        for (let key in count){
		let element=document.createElement('span');
                element.textContent=key+" : "+count[key];
                ansDiv.appendChild(element);
        }
}

function countVowels(){
	string=document.getElementById('numOne').value;
        ansDiv=document.getElementById('ansDiv');
        let vowels='aeiouAEIOU';
        var count={vowels:0,consonents:0};
        for(let i=0; i<string.length; i++){
		if(vowels.includes(string[i])){
			count.vowels+=1;
                }   
		else{
			count.consonents+=1;
                }
	}
        for (let key in count){
		let element=document.createElement('span');
                element.textContent=key+" : "+count[key];
                ansDiv.appendChild(element);
        }
}

function fibonacci(){
        num=document.getElementById('numOne').value;
        ansDiv=document.getElementById('ansDiv');
        let a=0;
        let b=1;
        let c;
        for(let i=0;i<num;i++){
        	let element=document.createElement('span');
                element.textContent=a;
                ansDiv.appendChild(element);
                c=a+b;
                a=b;
                b=c;
       }        
}

function menuBased(){        
        var option=Number(document.getElementById('numOne').value);
        if (option==5){             
                document.getElementById('questionDiv').style.display="none";
                document.getElementById('exitDiv').classList.remove('d-none'); 
                document.getElementById('menuStart').classList.remove('d-none');   
             }
        else{
		document.getElementById('menu').style.visibility='hidden';
                document.getElementById('calBtn').classList.remove('d-none');
                document.getElementById('questionDiv').style.display="none";
                document.getElementById('inputDiv').style.display='none';
                document.getElementById('inputNumbers').classList.remove('d-none');
                document.getElementById('ansDiv').classList.remove('d-none');
	}
}
function calculate(){
	var option=Number(document.getElementById('numOne').value);
        var calNumOne=document.getElementById('calNumTwo').value;
        var calNumTwo=document.getElementById('calNumThree').value;
        let result;
        switch (option){
        	case 1:    
                        console.log(option);                
    			result=Number(calNumOne)+Number(calNumTwo);
                        printOutput('answerId', "Sum is: "+result);
                        break;
		case 2: 
    			result=Number(calNumOne)-Number(calNumTwo);
                        printOutput('answerId', "Difference is: "+result);
                        break;
		case 3:
    			result=Number(calNumOne)*Number(calNumTwo);
                        printOutput('answerId', "Product is: "+result);
                        break;
		case 4:
    			result=Number(calNumOne)/Number(calNumTwo);
                        printOutput('answerId', "Quotient is: "+result);
                        break;                                            
	}        
}

function stringLarest(){
 	 var string=document.getElementById('stringOne').value;
         const split=string.split(/\s+/);
         var smallest=split[1];
         var largest="";
         console.log(smallest);
         for(let word of split){                
                if (word.length>largest.length){
			largest=word;
                }
                if (word.length<smallest.length){
			smallest=word;
                }
         }
         printOutput('answerId', "Smallest: "+smallest);
         printOutput('answerIdLarge', "Largest: "+largest);
}


function changeAlphabet(){
 	 var string=document.getElementById('stringOne').value;
         let newString="";
         for (let i=0;i<string.length; i++){
                var char=string[i];
                if(char=='z'){
 			newString+='a';
                }
                else{
		        var value=char.charCodeAt();
                        char=char.replace(char,String.fromCharCode(value+1));
                        newString+=char;
                }
	}       
         printOutput('answerId', "new string: "+newString);
}

function deleteConsonents(){
        let string="Hello, have a good day..";
	let vowels="aeiouAEIOU";
        let newString="";
        let char=".,"
        for(let i=0;i<string.length;i++){
		if(vowels.includes(string[i]) || string[i]==" " || char.includes(string[i])){
                	newString+=string[i];
                }
                else{                      
			continue;
                }
	}
        printOutput('answerId', "New string: "+newString);
}

function maxOccurence(){
	 var string=document.getElementById('stringOne').value;
         let ansDiv=document.getElementById('answerDiv');
         let obj={};
         let max=0;
         let top=""; 
         for(let i=0;i<string.length;i++){
                var char=string[i];
		if (char in obj){
			obj[char]+=1;
                 }
                else{
			obj[char]=1;
                }
         }
         console.log(obj);
         for (let key in obj){
		let element=document.createElement('span');
                element.textContent=key+" : "+obj[key];
                ansDiv.appendChild(element);
                if(obj[key]>max){
                       max=obj[key];
                       top=key;
                }
         }    
         printOutput('answerId', "Alphabet with maximum occurrence: "+top);
}

function countDigit(){
	var num=document.getElementById('stringOne').value;
        let newNum=num;
        let count=0;
        while (newNum != 0){
                newNum=Math.floor(newNum/10);
                count+=1;    
                console.log(newNum);               
        }
        printOutput('answerId', "Number of Digits in "+num+" is: "+count);
}

function weekDay(){
	var num=Number(document.getElementById('stringOne').value);
        var day="";
        switch(num){
        case 2:
             day="Monday";
             printOutput('answerId', "Corresponding day is: "+day);  
             break;
        case 3:
             day="Tuesday";
             printOutput('answerId', "Corresponding day is: "+day);  
             break;
	case 4:
             day="Wednesday";
             printOutput('answerId', "Corresponding day is: "+day);  
             break;
	case 5:
             day="Thursday";
             printOutput('answerId', "Corresponding day is: "+day);  
             break;
	case 6:
             day="Friday";
             printOutput('answerId', "Corresponding day is: "+day);  
            break;
	case 7:
             day="Saturday";
             printOutput('answerId', "Corresponding day is: "+day);  
             break;
	case 1:
             day="Sunday";
             printOutput('answerId', "Corresponding day is: "+day);  
             break;
        default:
	     printOutput('answerId', "Enter correct day number");
        }
}

function eligibility(){
	let maths=Number(document.getElementById('maths').value);
        let physics=Number(document.getElementById('physics').value);
        let chemistry=Number(document.getElementById('chemistry').value);
        let total=maths+physics+chemistry;
        let totalMP=maths+physics;
        printOutput('total', "Total marks: "+total);
        printOutput('totalMp', "Maths and Physics toytal: "+totalMP);
        if(maths>=65 && physics>=55 && chemistry>=50 &&(total>=190 || totalMP>=140) ){
		printOutput('answerId', "Student is eligible");
	}
	else{
		printOutput('answerId', "Student is not eligible");
 	}
}

function vowelReplace(){
	let string=document.getElementById('stringOne').value;
        let arr=[];
        let newstring="";
        let vowels="aeiouAEIOU";
        for (let i=0;i<string.length;i++){
		if (vowels.includes(string[i])){
                	arr.unshift(string[i]);
                }
        }
        for (let i=0;i<string.length;i++){
                var char=string[i];
		if (vowels.includes(char)){
                	char=arr[0];
                        newstring+=char
                        arr.shift();
                }
                else{
			newstring+=char;
                }
        }
        printOutput('answerId',newstring);
}

function empSalary(){
	let salary=Number(document.getElementById('numOne').value);
        let hra;
        let da;
        let grossSalary;
        if (salary<=10000){
		hra=(salary/100)*8;
                da=(salary/100)*10;
        }
        else if (salary<=20000){
		hra=(salary/100)*16;
                da=(salary/100)*20;
        }
        else{
		hra=(salary/100)*24;
                da=(salary/100)*30;
	}
        grossSalary=salary+hra+da;
        printOutput('answerId',"Gross salary of employee is: "+grossSalary);
}

function coneArea(){
	let radius = Number(document.getElementById('numOne').value);
        let length = Number(document.getElementById('numTwo').value);
	let height = Number(document.getElementById('numThree').value);
        let p = 3.14;
        let area = p*radius*length + p*(radius)**2;
        let volume =  (1/3)*(p*(radius)**2*height);
        let surface = p*radius*length;
        printOutput('answerIdArea',"Area of cone is: "+area);
        printOutput('answerIdVolume',"\nVolume of cone is: "+volume);
        printOutput('answerIdSurface',"\nLateral Surface area of cone is: "+surface);
}

function cubeArea(){
        let l = Number(document.getElementById('numTwo').value);
        let area = 6*(l)**2;
        let volume =  l**3;
        let surface = 4*(l*l);
        printOutput('answerIdArea',"Area of cube is: "+area);
        printOutput('answerIdVolume',"\nVolume of cube is: "+volume);
        printOutput('answerIdSurface',"\nLateral Surface area of cube is: "+surface);
}

function cuboidArea(){
	let length = Number(document.getElementById('numOne').value);
        let width = Number(document.getElementById('numTwo').value);
	let height = Number(document.getElementById('numThree').value);
        let area = 2*(length*width) + 2*(length*height) + 2*(width*height);
        let volume =  length*width*height;
        let surface = (2*height)*(length+height);
        printOutput('answerIdArea',"Area of cuboid is: "+area);
        printOutput('answerIdVolume',"\nVolume of cuboid is: "+volume);
        printOutput('answerIdSurface',"\nLateral Surface area of cuboid is: "+surface);
}

function cylinderArea(){
	let radius = Number(document.getElementById('numOne').value);
        let height = Number(document.getElementById('numTwo').value);
        let p = 3.14;
        let area = 2*p*(radius)**2 + 2*p*radius*height;
        let volume =  p*(radius**2)*height;
        let surface = 2*p*radius*height;
        let surfaceBottom = p*(radius**2);
        printOutput('answerIdArea',"Area of cylinder is: "+area);
        printOutput('answerIdVolume',"\nVolume of cylinder is: "+volume);
        printOutput('answerIdSurface',"\nLateral Surface area of cylinder is: "+surface);
        printOutput('answerIdSurfaceBottom',"\nBottom or Top Surface area of cylinder is: "+surfaceBottom);
}

function sphereArea(){
        let radius = Number(document.getElementById('numOne').value);
        let p = 3.14;
        let area = 4*p*(radius**2);
        let sRadius = (Math.sqrt(area))/4*p;
        let volume = 4*(p*(radius**3));
        printOutput('answerIdArea',"Area of sphere is: "+area);
        printOutput('answerIdVolume',"\nVolume of sphere is: "+volume);
        printOutput('answerIdSurface',"\nRadius of sphere is: "+sRadius);
}

function palindromeReplace(){
	let string = document.getElementById('numOne').value;
        let symbol="*";
        let words = string.split(" ");
        for (let i=0;i<=words.length-1;i++){
                var sub = "";
                var str=words[i];
		for(let i=str.length-1; i>=0 ; i--){
                       sub+=str[i];
                      
                }
   		 console.log(sub);
                if (sub==str && sub.length != 1){
                       console.log(sub);
                       string=string.replace(str,symbol.repeat(str.length));
                }
        }        
         printOutput('answerId',"String is: "+string);
}


function missingAlphabet(){
	let string = document.getElementById('numOne').value;
        let count=97; 
        let missing=[];
        while(count != 123){      
              if(string.includes(String.fromCharCode(count))){
		     count+=1;
	      }
              else{ 
		     missing.push(String.fromCharCode(count));
                     count+=1;
 	      }
        }
        if(missing.length==0){
		printOutput('answerId',"No missing");
        }
        else{
		printOutput('answerId',missing+" are missing");
        }
}

function countNotes(){
	let totalAmount = document.getElementById('numOne').value;
        let tempAmount=totalAmount;
        let notesArray=[500,200,100,50,20,10,5,2,1];
        let count=0;
        let noteNum={};
        if (totalAmount==0){
    		printOutput('answerId',"Amount is zero");
	}
	else{
		for(let i=0; i<=notesArray.length-1; i++){
                	var note=notesArray[i];
                        while(note<=tempAmount){
				tempAmount-=note;
				count+=1;				
			} 
                        noteNum[note]=count;
                        count=0;                          
                }                
	} 
	let ansDiv=document.getElementById('ansDiv');
        printOutput('answerId',"Number of Notes for "+totalAmount);
        for(let key in noteNum){
                if(noteNum[key]!=0){
		     var element=document.createElement('div');
                     element.textContent=(key+" : "+noteNum[key]);
                      ansDiv.appendChild(element);
                }	
	}
}

function billCalculate(){
	let units = document.getElementById('numOne').value;
        let tempUnit=units;
        let tarriffLess=0;
        let tarriff50=0;
        let tarriff100=0;
        let tarriff200=0;
        let blncUnit=0;
        var diff=0;
        if (tempUnit>=200){
                diff=tempUnit-200;
		tarriff200=diff*7.25;
                tempUnit-=diff;                 
        }
        if(tempUnit>=100){
                diff=tempUnit-100;
		tarriff100=diff*5.65;
                tempUnit-=diff;    
        }
        if(tempUnit>50){
                diff=tempUnit-50;
		tarriff50=diff*3.25;
                tempUnit-=diff;              
        }
        if(tempUnit<=50){
		tarriffLess=tempUnit*2.60;
                tempUnit-=diff;    
        }
        let totalAmount = tarriffLess + tarriff50 + tarriff100 + tarriff200;
        if(units>700){
		totalAmount=totalAmount+(totalAmount/100)*0.5;
	}
        printOutput('answerId',"Total Bill is: "+totalAmount);
}

var arrayPrint=[];
function printWithout(base, limit){
	arrayPrint.push(base);
        if (base==limit){
		printOutput('answerId',arrayPrint);
                return 1;
        }
        else{
		printWithout(base+1, limit)
	}	
}

function brackets(){
	let string = document.getElementById('inputString').value;
        let square=0;
        let curly=0;
        let paranthesis=0;
        for(let i=0; i<=string.length-1; i++){
		if(string[i]==")"){}
	}
}


function byte(){
	let code=[72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100];
        let string="";
        for (let i=0;i<code.length; i++){
		var char=String.fromCharCode(code[i]);
                string+=char;
         }
         printOutput('answerId',string);
}












