# HW: Web Development

The reward of learning D3 is exponentially greater compared to higher-level visualization libraries that provide preconfigured templates for common chart types.
However, the creation of expressive visualizations in D3 requires a certain level of programming experience and web development knowledge (HTML, CSS, JavaScript, etc). It is imperative that you are comfortable using all the technologies that we superficially walk through in this article. The learning curve of D3 is challenging for the short time span of a single academic term, so it's important that you either (a) have some prior exposure to web technologies or (b) are up for the challenge of getting up to speed. 

This tutorial will serve to refresh you in case you're rusty. 
Note that for those who are earlier on in their web development journey, there is an additional [RESOURCES_README.md](RESOURCES_README.md) that you may find helpful. 

#### Tutorial Outline

0. [Development Setup: Use several web development tools (code editor, local webserver, web browser developer tools)](#tools)
1. [HTML: Set up and modify HTML documents](#html)
2. [CSS: Define CSS rules to style web pages (with CSS selectors)](#css)
3. [JS: Solid understanding of JavaScript fundamentals](#js)
4. [Homework Assignment](#assignment)

## 0. <a name="tools">Development Setup</a>

### Code editor

Check out Thomas's suggestions for development setup in [the resources file](RESOURCES_README.md#tools) including IDE, running a web server, developer tools for debugging. If you are already comfortable with web development then please feel free to continue using whatever setup you are most comfortable with. This section will detail potential options you can use and will go into detail on the setup that the TA will be using in class.



## 1. <a name="html">HTML</a>

[HTML](https://www.w3schools.com/html/) (Hypertext Markup Language) is used to structure content for web browsers. It enables us to differentiate between content and structure of a document. A comprehensive and well structured list of HTML elements can be found at [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element). We will use the latest evolution of HTML referred to as [HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5).

In D3 web applications, HTML is primarily used to create a basic layout and to add control widgets, such as checkboxes, radio buttons, and input sliders. Most of the visual elements will be actually drawn inside an `<svg></svg>` container. You will learn about **SVG** in the first D3 tutorial.

### HTML Boilerplate

Every HTML5 document requires a little bit of boilerplate code that you should just copy and past every time you create a new file. A boilerplate is a piece of code that is usually copied with little or no alteration, much like a template, to speed up the creation of new files. In the case of HTML5 this includes several HTML tags (e.g. \<head>, \<html>, ...) that don't have visual equivalents on the website, but that are necessary to define the document's metadata. All HTML elements are surrounded by angle bracket tags, which come in pairs where the end is preceded by a slash. 

Make sure to get familiar with this structure:

```html
<!DOCTYPE HTML>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Web page title</title>
    
    <!-- The following line references an external css file -->
    <link href="css/styles.css" rel="stylesheet">
</head>
<body>
	This is where the main content of the page goes.
	
	<!-- Load external JS files -->
	<script src="js/main.js"></script>
</body>
</html>
```

### HTML Elements

HTML features several built-in elements with default styling and features (which can be overwritten) that can be used to alter the display of a webpage using raw html. Here is one approach to displaying a poem. It is enclosed in a `<div></div>`, has headers of two different sizes to display the title `<h1>` and the author `<h2>`, then uses the paragraph `<p>` element and `</br>` to induce line breaks. Try adding it within the `<body></body>` (after `<body>` and before `</body>`).

```html
<div>
	<h1>CSS Roses</h1>
	<h2>by Thomas Davidson</h2>
	<p>
		Roses are red, </br>
   		Violets are blue, </br>
   		I love CSS, </br>
   		Soon you will too
	</p>
</div>
```

*Result:*

![Alternative HTML Example Result](images/html-example-1.png?raw=true "Alternative HTML Example Result")

An alternative approach could be to use an unordered list (`<ul>`) and utilise a list item (`<li>`) for each line of the poem:

```html
<div>
	<h1>CSS Roses</h1>
	<h2>by Thomas Davidson</h2>
	<ul>
		<li>Roses are red,</li>
		<li>Violets are blue,</li>
		<li>I love CSS,</li>
		<li>Soon you will too</li>
	</ul>
</div>
```

*Result:*

![HTML Example Result](images/html-example.png?raw=true "HTML Example Result")

### Classes and IDs

Classes and IDs are extremely helpful for selecting specific HTML elements. Your CSS and JavaScript (JS) code will rely heavily on classes and IDs to identify elements in *selectors*.

In the above HTML examples, the elements have no attributes, so the only possible way to identify the element is by its tag name such as *div*. If there are multiple div-tags in one page, which happens frequently, selecting just the above div element becomes a problem.

(1) ```<div id="poem-123">CSS Roses</div>```

To solve this problem, you can give the element a unique ID: *poem-123*. However, each element can only have a single ID, and each ID value can be used only once per page!

(2) ```<div class="poem content">CSS Roses</div>```

Any attribute or styling information that needs to be applied to multiple elements on a page should be done with a *class*. In the above example, we have assigned the div element to the class *poem*, that allows us to select all HTML containers of the type *poem*. At the same time, we have assigned the div element to the class *poem*. 

Elements can be assigned multiple classes, simply by separating them with a space.

### DOM

The Document Object Model (DOM) is a programming interface for HTML, XML, and SVG documents. It provides a hierarchical (tree-structured) representation of the document and it defines a way that the structure can be accessed from programs so that they can change the document structure, style, and content. Or in other words, it is a model that the browser generates, when it parses the HTML document. We will later use JS/D3 to add to and manipulate the DOM dynamically.


## 2. <a name="css">CSS</a>

With HTML you define the structure and content of the page and with CSS you set its style - things like fonts, colors, margins, backgrounds, and so on.

A stylesheet will usually consist of a list of CSS rules that are inserted either in a ```<style>``` block in your HTML header, or, more often, stored in an external file and included via the below line of code, which assumes that you have a separate file ```style.css``` in the folder ```css```. Make sure to always include an external style sheet in the HTML header (inside the ```<head></head>``` elements of your HTML file). 

```html
<link rel="stylesheet" href="css/style.css"> 
``` 

CSS styles consist of selectors and properties, grouped in curly brackets. A property and its value are separated by a colon, and the line is terminated with a semicolon.

A simple rule in CSS applied to `<div>` elements can look like the following, which adjusts font size, padding (white space), background color, text color, and border:

```css
div {
	font-size: 15px;
	padding: 30px 10px;
	background-color: #F7F7F7;
	color: black;
	border: 2px solid red;
}
```

*Result:* 

![CSS Example 2 Result](images/new-css-example.png?raw=true "CSS Example 2 Result")

If you are searching for an exhaustive list of style properties we recommend [Mozilla's Developer Platform](https://developer.mozilla.org/en-US/docs/Web/CSS) or [w3schools.com](http://www.w3schools.com/CSS/). Some CSS properties are needed quite often, so you should try to memorize them.

In the above example we have assigned our CSS rule to all div containers but if we want to style specific elements we can use the selectors *id* and *class*.

As you can see in the example below, IDs are preceded with a hash mark (*#poem-1*) and class names are preceded with a period (*.poem*). You can also use descendent selectors to address nested elements (*.poem li*), where the child is separated from its parent by a space.  

*Example:* 

`style.css` 

```css
.poem {
  font-size: 15px;
  padding: 30px 10px;
  background-color: #f7f7f7;
  color: black;
  border: 2px solid red;
}

/* Remove the bullet points from the li items in the poem class */
.poem li {
  list-style-type: none;
}

/* Make everything in the first poem div be underlined */
#poem-1 {
  text-decoration: underline;
}

.not-a-poem {
  background-color: black;
  color: #ffdff7;
}
```

`index.html`

```html
<!DOCTYPE HTML>
<html lang="en">
<head>
	<meta charset="UTF-8">
  	<title>Simple CSS</title>
  	<link rel="stylesheet" href="css/style.css"> 
</head>
<body>

<div class="poem" id="poem-1">
      <h1>CSS Roses</h1>
      <h2>by Thomas Davidson</h2>
      <ul>
        <li>Roses are red,</li>
        <li>Violets are blue,</li>
        <li>I love CSS,</li>
        <li>Soon you will too</li>
      </ul>
    </div>

    <div class="not-a-poem">
      <ul>
        <li>My list elements</li>
        <li>Should have bullet points</li>
        <li>And this div should be black</li>
        <li>with no outline</li>
      </ul>
    </div>

    <div class="poem" id="poem-2">
      <h1>HTML Roses</h1>
      <h2>by Thomas Davidson</h2>
      <ul>
        <li>Roses are red,</li>
        <li>Violets are blue,</li>
        <li>HTML is OG,</li>
        <li>People love that too</li>
      </ul>
    </div>

</body>
</html>
```

*Result:*

![CSS Example Result](images/new-css-example-1.png?raw=true "CSS Example Result")

## 3. <a name="js">JavaScript (JS)</a>

*From now on, and in all upcoming tutorials and assignments we will use the common abbreviation JS for the term JavaScript.*

We highly recommend that you follow a JS style guide (e.g., [Google](https://google.github.io/styleguide/jsguide.html)) to ensure consistency and to improve the overall code quality, especially in team projects.

The resources README file contains [additional Javascript resources](RESOURCES_README.md#js), including how to define variables, how to use other data structures such as arrays and objects, conditional statements and loops, functions, and some advanced concepts such as template literals and array manipulation. Refer to this file as a resource on syntax. 


### Javascript for the tutorial

In the tutorial you will be shown how to create a web-page that displays a poem and a button to display the next poem in an array. The poems are all JS objects that look like this:

```javascript
const poem_js = {
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
```
The body element of the html file will look something like this:
```html
<div class="controls">
      <button type="button" id="display-next-poem-button">
        Display Next Poem
      </button>
    </div>
    <div class="poem-wrapper">
      <div class="poem">
        <h1 class="poem-title"></h1>
        <h2 class="poem-author"></h2>

        <div class="poem-content">
          
        </div>
      </div>
    </div>
    <script src="main.js"></script>
```

In order to add the desired functionality to the web page we have to do the following three things:

<ol>
	<li>Write a js function that will take a poem object and update the relevant html elements with the content from the object - *displayPoem*</li>
	<li>Write a function that will display the next poem in the array of poems by calling our first function - *displayNextPoem*</li>
	<li>Make sure our second function is triggered when we click the button on the web page.</li>
</ol>

(1) *displayPoem*

To update the relevant html elements we will have to use *query selectors* in order to select and update html elements with relevant fields from the js objects. Much like with css we use '.' to select classes and '#' to select ids.

Here is an example of how to update the relevant fields with the poem metadata:
```javascript
    // Update the poem element id
    document.querySelector('.poem').id = poem.id;

    // Update the title
    document.querySelector('.poem-title').textContent = poem.name;

    // Update the author
    document.querySelector('.poem-author').textContent = "by " + poem.author.toUpperCase();
```

In order to update the content of the poem we will have to use a nested for loop (a loop within a loop) to loop over the verses of each poem, and then each line of each verse:

```javascript
// Update the poem
    const poemContent = document.querySelector('.poem-content');

//Make sure the div is completely empty
    poemContent.innerHTML = '';

//Iterate over each verse in the poem
    for (verse of poem.verses) {
	//Create a new unordered list
        const poemVerse = document.createElement('ul');
	//Add the correct class list to the unordered list
        poemVerse.classList.add("verse");

	//Iterate over each line of the verse
        for (line of verse) {
            const lineElement = document.createElement('li');
            lineElement.textContent = line;
            poemVerse.appendChild(lineElement);
        }

        poemContent.appendChild(poemVerse);
    }
```

(2) *displayNextPoem*

To keep track of the currently displayed poem we will utilise a global variable in our js file called *index*. We will increase this by one and then call our first function:
```javascript
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
```

(3) Trigger *displayNextPoem* on button push

To make sure our second function triggers when we click the button we want to add something called an *Event Listener* which will trigger the *displayNextPoem* on the 'click' event of the button with id 'display-next-poem-button'. The following code should go in the bottom of the body of the 'main.js' file:

```javascript
//Trigger our second function when we click the button
document.getElementById("display-next-poem-button").addEventListener("click", function () {
    displayNextPoem();
})
```



## 4. <a name="assignment">Homework Assignment</a> 

Where to go from here? Now that you've gotten comfortable with HTML, CSS, and JS, it's time to put it to the test. For the homework assignment you are required to take the starter code provided at [HW 1](homework/starter-code) and complete the *TODO* statements littered throughout the HTML, CSS and Javascript files. 

You should submit your source files on GitHub classroom and they should consist of ```index.html```, ```styles.css``` and ```main.js``` files.

The grading of your assignment will be based on successful execution of the following requirements:

1. On load it should display the title and author of one poem, and have two poems which read "Display Next Poem" and "Display Next Line" [15%]
2. When the "Display Next Poem" button is clicked the title and author of the next poem in an array should be displayed and any poem content should be removed. [15%]
3. When the end of the array is reached clicking the "Display Next Poem" should display the first poem author and title again. [15%]
4. Clicking the "Display Next Line" button should display the next line of the poem. [15%]
5. There should be clear separation between verses. [5%]
6. The poem title and poem author should be styled differently from one another, as should the poem content. (The TODO's will specify some constraints (such as the body background being black, but otherwise use your creativity and try to illustrate a wide variety of different css attributes). [25%]
7. One poem (and only one!) should have different styling than the other poems displayed. [10%]
8. You may log things to the console but your web-page should throw no errors when it is completed.

Note that you are *not required to submit completed tutorial code*, only the completed homework code. 
However, if you successfully complete the tutorial, it will help you with some of the requirements above. 

Here is an example of what your finished web page could look like on initial load:

![Homework Example](images/homework-example.png?raw=true "Homework Starter Example Screenshot")

If you need guidance on how to work with Github to submit your assignment, check out [the resources README file](RESOURCES_README.md#git).


##### Sources

* [Tamara Munzner's web development tutorial](https://github.com/UBC-InfoVis/2021-436V-tutorials/tree/master/0_Web_Tutorial)
* [Harvard's visualization course (CS171)](https://www.cs171.org/)
* [dataviscourse.net (University of Utah)](http://dataviscourse.net/tutorials/lectures/lecture-git/)
* [javascripttutorial.net](https://www.javascripttutorial.net/)
