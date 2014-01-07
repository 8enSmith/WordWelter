WordWelter
==========

What is this?
=============

WordWelter is a Chrome extension which randomises the characters in all words in a webpage, except for the first and last characters.

The inspiration for this extension is a neologism called Typoglycemia (see http://en.wikipedia.org/wiki/Typoglycemia) which is the "purported recent discovery about the cognitive processes behind reading written text".

For example most people can understand the following even though the text has been scrabled:

"I cdn'uolt blveiee taht I cluod aulaclty uesdnatnrd waht I was rdanieg: the phaonmneel pweor of the hmuan mnid."

The orginal text was:

"I couldn't believe that I could actually understand what I was reading: the phenomenal power of the human mind."

As you can see from tests.js, I have developed the scrambling code so that it can cope with many different types of words e.g. words ending in punctuation, words with apostrophes. However, this is not a compreshensive text parser, so let me know if you find any issues.

How does one install this Chrome extension?
===========================================

To install this extension:

1) Download the following files and place them into the same directory:

content_script.js	
jquery-1.10.2.min.js
manifest.json

2) Download Google Chrome (note that this extension was last tested successfully on Chrome 31.0.1650.63 m)

3) Run Chrome

4) Go to Tools -> Extensions

5) Select "Load unpacked extension..." and choose the directory created in step 1)

6) Ensure that "Enabled" is checked

The WordWelter extension will now cause all web pages to be scrambled.

