Word Welter
===========

The inspiration for this Google Chrome extension is a neologism called [Typoglycemia](http://en.wikipedia.org/wiki/Typoglycemia) which is the "purported recent discovery about the cognitive processes behind reading written text".

For example most people can understand the following even though the text has been scrambled:

> "I cdn'uolt blveiee taht I cluod aulaclty uesdnatnrd waht I was rdanieg"

The original text is:

> "I couldn't believe that I could actually understand what I was reading"

Hence this extension scrambles all the words in a webpage, except for the first and last characters.

As you can see from tests.js, I have developed the scrambling code so that it can cope with many different types of words e.g. words ending in punctuation, words with apostrophes. However, this is not a comprehensive text parser, so let me know if you find any issues. Unlike the example taken from the aforementioned Wikipedia page, for a word like "couldn't", I have chosen to fix the first character and also the last three (i.e. "n't") and then scramble all the rest; I found that the words get much harder to decipher if this approach is not taken!

Install
-------

You can get this extension directly from the Chrome Web Store:

http://bit.ly/wordwelter

Alternatively, to install this extension from the GitHub source follow these instructions:

1. Download the following files and place them into the same directory:

  * content_script.js	
  * jquery-1.10.2.min.js
  * manifest.json

2. Download Google Chrome (note that this extension was last tested successfully on Chrome 31.0.1650.63 m).

3. Run Chrome.

4. Go to Tools -> Extensions.

5. Select "Load unpacked extension..." and choose the directory created in step 1.

6. Ensure that "Enabled" is checked.

The Word Welter extension will now cause all web pages to be scrambled.

To disable this extension either un-check "Enabled" in "Tools -> Extensions" or remove the extension from chrome by clicking on the bin icon.

Note that the word scrambling functionality is initially disabled. To enable it, click the Word Welter browser button. This button toggles the word scrambling functionality on and off.

Testing
-------

Test driven development (TDD) was used to develop the code found in content_script.js. [QUnit](http://qunitjs.com/) has been used to write the unit tests.

License
-------

MIT

Attribution
-----------

The picture used for the icon in this extension can be found [here](http://www.flickr.com/photos/chrisinplymouth/3836807704/) [CC License](http://creativecommons.org/licenses/by-nc-sa/2.0/)
