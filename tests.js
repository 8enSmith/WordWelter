test( "When three character word then do not modify", function() {
	strictEqual( textToReplace("abc"), "abc", "abc == abc" );
	strictEqual( textToReplace("abc def"), "abc def", "abc def == abc def" );
	strictEqual( textToReplace("abc def ghi"), "abc def ghi", "abc def ghi == abc def ghi" );
});

test( "When greater than three character word then first and last same as original", function() {
	strictEqual( textToReplace("abcd")[0], "a", "abcd processed - First char is a" );
	strictEqual( textToReplace("abcd")[3], "d", "abcd processed - Last char is d" );

	strictEqual( textToReplace("abcd efgh")[0], "a", "abcd efgh processed - First char is a" );
	strictEqual( textToReplace("abcd efgh")[3], "d", "abcd efgh processed - Fourth char is a" );
	strictEqual( textToReplace("abcd efgh")[5], "e", "abcd efgh processed - Sixth char is a" );
	strictEqual( textToReplace("abcd efgh")[8], "h", "abcd efgh processed - Ninth char is a" );
});

test("When last char is a letter then return object with false and position of last but one char", function() {
	ok( isLastCharALetter("abc!") === false, "abc! - last char is not a letter");
});

test( "When last character is not a letter then use dont use it as anchor but use next one in", function() {
	strictEqual( textToReplace("abc!"), "abc!", "abc! == abc!" );
	strictEqual( textToReplace("abc?"), "abc?", "abc? == abc?" );
	strictEqual( textToReplace("abc."), "abc.", "abc. == abc." );
    strictEqual( textToReplace("abc\""), "abc\"", "abc\" == abc\"" );
    strictEqual( textToReplace("abc'"), "abc'", "abc' == abc'" );

	strictEqual( textToReplace("abcd!")[0], "a", "abcd! - First char is a" );
	strictEqual( textToReplace("abcd!")[3], "d", "abcd! - Fourth char is d" );
	strictEqual( textToReplace("abcd!")[4], "!", "abcd! - Last char is !" );

	strictEqual( textToReplace("abcd! abcd!")[0], "a", "abcd! abcd! - First char is a" );
	strictEqual( textToReplace("abcd! abcd!")[3], "d", "abcd! abcd! - Fourth char is d" );
	strictEqual( textToReplace("abcd! abcd!")[4], "!", "abcd! abcd! - Firth char is !" );
	strictEqual( textToReplace("abcd! abcd!")[6], "a", "abcd! abcd! - Seventh char is a" );
	strictEqual( textToReplace("abcd! abcd!")[9], "d", "abcd! abcd! - Tenth char is d" );
	strictEqual( textToReplace("abcd! abcd!")[10], "!", "abcd! abcd! - Eleventh char is !" );

	strictEqual( textToReplace("abcdefghijklmno!")[0], "a", "abcd! - First char is a" );
	strictEqual( textToReplace("abcdefghijklmno!")[14], "o", "abcd! - last but one char is o" );
	strictEqual( textToReplace("abcdefghijklmno!")[15], "!", "abcd! - Last char is !" );
});

test("Mix of types", function() {
	ok( textToReplace("abc defg hij! klmn!").substring(0,2), "abc", "abc defg hij! klmn! - Fist three is abc");
	ok( textToReplace("abc defg hij! klmn!")[4], "d", "abc defg hij! klmn! - Fifth char i d");
	ok( textToReplace("abc defg hij! klmn!")[7], "g", "abc defg hij! klmn! - Seventh char i g");
	ok( textToReplace("abc defg hij! klmn!").substring(9,13), "hij!", "Found hij!");
    ok( textToReplace("abc defg hij! klmn!")[15], "k", "Found k");
    ok( textToReplace("abc defg hij! klmn!").substring(18), "n!", "Found n!");
});

test( "When word has a quote then treat it as an anchor", function() {
	strictEqual( textToReplace("you're"), "you're", "you're == you're" );
    
    strictEqual( textToReplace("Leroy's")[0], "L", "Lerroy's - First char is L" );
    strictEqual( textToReplace("Leroy's")[4], "y", "Lerroy's - Fifth char is y" );
    strictEqual( textToReplace("Leroy's").substring(4), "y's", "Leroy's - Last two chars are 's" );
});

test("When word is a currency then do not scramble", function() {
	strictEqual(textToReplace("£9876"), "£9876", "£9876 == £9876" );
    strictEqual(textToReplace("£9,876"), "£9,876", "£9,876 == £9,876" );
    strictEqual(textToReplace("$345"), "$345", "$345 == $345" );
});

test("When word is a number then do not scramble", function() {
	strictEqual(textToReplace("2013"), "2013", "2013 == 2013" );
    strictEqual(textToReplace("1234567890"), "1234567890", "1234567890 == 1234567890" );
});