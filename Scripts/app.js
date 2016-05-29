/* main JavaScript file */
// IIFE - Immediately Invoked Function Expression
(function(){
    "use strict";
    
    // define an array of HTML elements
    var paragraphElements = [];
    
    paragraphElements[0] = document.getElementById("paragraphOne");
    paragraphElements[1] = document.getElementById("paragraphTwo");
    paragraphElements[2] = document.getElementById("paragraphThree");
    
    // define your paragraphs array;
    var paragraphs = [];
    
    // data for my pages
    paragraphs[0] = "From my childhood I was always interested in computers from taking them apart too, playing with all sorts of graphical softwares. Which naturally lead me into studying at Centennial College for Software Engineering. Following in my parents footsteps I am work-a-holic but I don't find work, work finds me =p Some of my hobbies on my free time I love to excerise and play sports, basketball being my favorite sport. When I do find the time traveling with my friends exploring new places. Very much attracted to fashion with how unique one can be and all the different ways it allows someone to express themself. Its made me have an eye for detail all around me, but my favourite thing to pay attention to is Shoe's. (Hence Shoe Addict!!!!)  ";
    
    
    paragraphs[1] = "This is my second paragraph. It is only visible on the second page";
    
    
    paragraphs[2] = "This is my third paragraph. It is only visible on the third page";
    
    // second way to define an array
    //var paragraphs = new Array();
    
    // check to see if paragraph one exists
    for (var index = 0; index < paragraphElements.length; index++) {
        if(paragraphElements[index]) {
         paragraphElements[index].textContent = paragraphs[index];
        }
    }
    
    
})();