String.prototype.shuffle = function () {
    var i,
        a = this.split(""),
        n = a.length;

    for (i = n - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }
    return a.join("");
};

var isLastCharALetter = function (input) {
    var lastCharacter = input[input.length - 1];
    if (lastCharacter === '!' || lastCharacter === '?' || lastCharacter === '.' || lastCharacter === '"' || lastCharacter === '\'') {
        return false;
    } else {
        return true;
    }
};

var doesWordContainAQuote = function (input) {
    var indexOfQuote = input.indexOf("'");
    
    if (indexOfQuote > -1) {
        return true;
    }
    
    return false;
}

function processWordWithQuote(input) {
    var indexOfQuote = input.indexOf("'");
    
    var stringUpToQuote = input.substr(0, indexOfQuote);
    
    if (stringUpToQuote.length > 3) {
        
        var firstCharacter = input[0];
        
        var internalCharacters = input.substring(1,indexOfQuote-1).shuffle();
        
        var quotePlusOtherChars = input.substr(indexOfQuote-1);
        
        return firstCharacter + internalCharacters + quotePlusOtherChars;
        
    } else {
        return input;
    }
}

function processOrdinaryWord(input) {
    var firstCharacter = input[0];
    
    var lastCharacter = input[input.length - 1];
    
    var internalCharacters = input.substring(1, input.length - 1);
    
    return firstCharacter + internalCharacters.shuffle() + lastCharacter;
}

function processWordEndingWithTerminator(input) {
    
    if (input.length-1 > 3)
    {
        var lastCharacterIndex = input.length - 2;
    
        var firstCharacter = input[0];
        
        var lastCharacter = input[input.length - 2];
    
        var internalCharacters = input.substring(1, lastCharacterIndex);
    
        return firstCharacter + internalCharacters.shuffle() + lastCharacter + input[input.length - 1];
    } else {
        return input;
    }
}

var isWordACurrencyAmount = function (input) {
    var firstCharacter = input[0];
    
    if (firstCharacter === '£' || firstCharacter === '$') {
        return true;
    }
    else {
        return false;
    }
}

var isNumber = function (input){
    return !isNaN(input);
}

var shufflePreserveFirstLast = function (input) {
    if (input.length > 3 && !isWordACurrencyAmount(input) && !isNumber(input)) {
        if (doesWordContainAQuote(input) === true) {
            return processWordWithQuote(input);
        } else if (isLastCharALetter(input) === true){
            return processOrdinaryWord(input);
        } else {
            return processWordEndingWithTerminator(input);
        }
    }
    else {
        return input;
    }
};

function textToReplace(text) {
    var tokenisedString = text.split(" ");
    
    var shuffledOutput = "";
    if (tokenisedString.length > 1) {  
        $.each(tokenisedString, function (key, value) {
            if (key === tokenisedString.length - 1) {
                // this is the last item - no need to append whitespace here
                shuffledOutput += shufflePreserveFirstLast(value);
            }
            else
            {
                shuffledOutput += shufflePreserveFirstLast(value) + " ";
            }
        });
    } else {
        shuffledOutput = shufflePreserveFirstLast(text);
    }

    return shuffledOutput;
}

function recursiveReplace(node) {
    if (node.nodeType == 3) { // text node
        node.nodeValue = node.nodeValue.replace(node.nodeValue, textToReplace(node.nodeValue));
    } else if (node.nodeType == 1) { // element
        $(node).contents().each(function () {
            recursiveReplace(this);
        });
    }
}

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  alert('test');
});

// Run the Welter as soon as the document's DOM is ready.
recursiveReplace(document.body);
