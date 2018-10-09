from string import ascii_uppercase

#Defines the letter to Morse mapping
code = {
    'A': '.-',
    'B': '-...',
    'C': '-.-.',
    'D': '-..',
    'E': '.',
    'F': '..-.',
    'G': '--.',
    'H': '....',
    'I': '..',
    'J': '.---',
    'K': '-.-',
    'L': '.-..',
    'M': '--',
    'N': '-.',
    'O': '---',
    'P': '.--.',
    'Q': '--.-',
    'R': '.-.',
    'S': '...',
    'T': '-',
    'U': '..-',
    'V': '...-',
    'W': '.--',
    'X': '-..-',
    'Y': '-.--',
    'Z': '--..'
}

#Opens the file and reads all words
file = open("words.txt","r")
words = file.read()
file.close()

morse = words

# Converts all words to morse
for letter in list(ascii_uppercase):
    morse = morse.replace(letter, code[letter])

# Creates list of the morse and english words from strings
morsewords = morse.split("\n")
engwords = words.split("\n")

# Finds the max length of morse words
maxlength = max([len(i)] for i in morsewords)[0]

# Creates a dictionary of {morse words : english words}
words = dict(zip(morsewords, engwords))

# MorseInput = input("Morse code :")
MorseInput = ".--....-....-.-..-----."

# This is the recursive function
def decode(morse, eng="", oneWord=False, twoWord=False):
    # Print the english when finished
    if morse == "":
        print(eng)
    else:
        i = 1
        # While loop allows to go through all possWord where condition met
        while len(morse) >= i and i <= maxlength:
            possWord = morse[:i]
            # Checks if the word is a real word
            if possWord in words.keys():
                # Real word therefore add to english and the morse
                newEng = eng + " " + words[possWord]
                newMorse = morse[i:]
                # Checks if that not more than one, One length word used
                if len(words[possWord]) == 1:
                    if not oneWord:
                        decode(newMorse, newEng, True, twoWord)
                # Checks if that not more than one, Two length word used
                elif len(words[possWord]) == 2:
                    if not twoWord:
                        decode(newMorse, newEng, oneWord, True)
                # Word is greater than two so doesn't matter
                else:
                    decode(newMorse, newEng, oneWord, twoWord)                    
            i += 1


decode(MorseInput)