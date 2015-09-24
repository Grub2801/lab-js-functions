// Question 1
function maxOfTwoNumbers(x, y) {
	if (x > y) {
		console.log(x);
	}
	else {
		console.log(y);
	}
}

// Question 2
function maxOfThree(x, y, z) {
	if ((x > y) && (x > z)) {
		console.log(x);
	}
	else if ((y > x) && (y > z)) {
		console.log(y);
	}
	else {
		console.log(z);
	}
}

// Question 3
function isCharacterAVowel(x) {
	x.toLowerCase();
	if ((x == 'a') || (x == 'e') || (x == 'i') || (x == 'o') || ( x == 'u')) {
		return "True";
	}
	else {
		return "False";
	}
}

// Question 4
function sumArray(xyz) {
	var total = 0;
	for (var i = 0; i < xyz.length; i ++) {
	    total += xyz[i];
        console.log(total);
	}
	return total;
}

sumArray([1,2,3,4])

// Question 4
function multiplyArray(wxy) {
	var total = 1;
	for (var i = 0; i < wxy.length; i ++) {
	    total *= wxy[i];
        console.log(total);
	}
	return total;
}
multiplyArray([1,2,3,4]) 

// Question 5
var numberOfArguments = function(){
	var num = 0;
    for (i = 0; i < arguments.length; i++) {
    num = arguments.length;
    }
return num
}
numberOfArguments(1, 4, 5, 3, 6)

// Question 6
var reverseString = function (text) {
    var newText = " ";
    for (var i = (text.length-1); i >= 0; i--) 
    newText += text[i];
    return newText;
}

reverseString("jag testar")

// Question 7
function findLongestWord (myArray) {
    var longest = [];
    var longestName = "";
    
    for (var i = 0; i < myArray.length; i++) {
        if (myArray[i].length > longest) {
            longest = myArray[i].length;
            longestWord = myArray[i];
        }
    }
return longestWord
}

// Question 8
function filterLongWords (myArray, x) {
     
	var longestWord = []

	for (var i = 0; i < myArray.length; i++) {
		if (myArray[i].length > x) {
			longestWord.push(myArray[i]);
		}
	}
	return longestWord;
}

filterLongWords(["Johny", "Czechoslovakia", "Aubumayang", "Penelope", "Slovenia"], 10)

// Bonus 1

var string = function () {
    this.newStr = ""
    this.reverseString = function(str) {
        for (var i = (str.length-1); i >= 0; i--) 
        this.newStr.push(str[i]);
    }
}    
"General Assembly".reverseString()


// Bonus 2
function charactersOccurencesCount() {
  
}

