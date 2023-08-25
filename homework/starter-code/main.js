let index = 0;
let lineIndex = 0; //This global variable might help you to write the displayNextLine function

let poem_html = {
    id: "poem2",
    name: "HTML Roses",
    author: "Thomas Davidson",
    verses: [
        [
            "Roses are red",
            "Violets are blue",
            "HTML is OG",
            "People love that too"
        ]
    ]
}

let poem_css = {
    id: "poem3",
    name: "CSS Roses",
    author: "Thomas Davidson",
    verses: [
        [
            "Roses are red",
            "Violets are blue",
            "I love CSS",
            "Soon you will too"
        ],
        [
            "Colours are tricky",
            "And many are new",
            "But CSS works its magic",
            "In every hue"
        ]
    ]
}

let poem_js = {
    id: "poem4",
    name: "JS Roses",
    author: "Thomas Davidson",
    verses: [
        [
            "Roses are red",
            "Violets are blue",
            "Next up is Javascript",
            "You'll love that too"
        ]
    ]
}

// TODO add W.J.'s poem from https://readwildness.com/30/lofton-flies and any other poems you would like to display

//TODO add the new poems to the array
let poems = [poem_html, poem_css, poem_js];


// TODO edit this function so that it ONLY displays the title and author of the poem and not the full poem content
function displayPoem(poem) {
    // Update the poem element id
    document.querySelector('.poem').id = poem.id;

    // Update the title
    document.querySelector('.poem-title').textContent = poem.name;

    // Update the author
    document.querySelector('.poem-author').textContent = "by " + poem.author.toUpperCase();

    // Update the poem
    const poemContent = document.querySelector('.poem-content');

    poemContent.innerHTML = '';

    for (verse of poem.verses) {
        const poemVerse = document.createElement('ul');
        poemVerse.classList.add("verse");

        for (line of verse) {
            const lineElement = document.createElement('li');
            lineElement.textContent = line;
            poemVerse.appendChild(lineElement);
        }

        poemContent.appendChild(poemVerse);
    }


}

function displayNextPoem() {
    //Update the global variable keeping track of the current poem
    index++;

    //If the index gets too big, reset it
    if (index > poems.length - 1) {
        index = 0;
    }

    //Call our first function
    displayPoem(poems[index]);
}

function displayNextLine() {
    //TODO write a function to display the next line of a poem

    //Pointers
    //  consider how to handle poems with multiple verses
    //  consider what to do when it's the first line of a new verse
    //  don't forget to add an event listener (in the main body of the javascript file to tie this function to your new button)
}

displayNextPoem();

//TODO add an event listener to run the displayNextPoem function when the 'display-next-poem-button' is clicked


