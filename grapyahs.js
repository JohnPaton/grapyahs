// Colors
var green = '#40A41B',
    orange = '#FB6107',
    purple = '#871765',
    pink = '#e12f5e',
    blue = '#1900C1',
    cyan = '#22a39f',
    red = '#bf2828',
    grey = '#333333',
    colors = [green, orange, purple, pink, blue, cyan],
    lastColor, secondLastColor

function randomColor(){
    i = Math.floor(Math.random() * colors.length)
    c = colors[i]
    if ((c != lastColor) && (c != secondLastColor)){
        // encourage variety
        secondLastColor = lastColor;
        lastColor = c;
        return c
    } else {
        return randomColor()
    }
}

// Card generation
function sizeText(text){
    chars = text.length
    if (chars < 20) {
        return `<h1>${text}</h1>`
    } else if (chars < 50){
        return `<h2>${text}</h2>`
    } else if (chars < 90){
        return `<h3>${text}</h3>`
    } else if (chars < 140){
        return `<h4>${text}</h4>`
    } else if (chars < 200){
        return `<h5>${text}</h5>`
    } else {
        return text
    }
}


function cardHTML(front, back, color){
    if (!color) {color = randomColor()}
    return `
    <div class="flip-card text-light my-3 px-1" style="border:0">
      <div class="flip-card-inner"  >
        <div class="flip-card-front"> 
          <div class="flip-card-body rounded p-2" style="border:0;background-color:${color};" >
            <div class="flip-card-text">
                ${sizeText(front)}
            </div>
          </div>
        </div>

        <div class="flip-card-back" >
          <div class="flip-card-body rounded p-2" style="border:0;background-color:${grey};" >   
            <div class="flip-card-text">
                ${sizeText(back)}
            </div>
          </div>
        </div>
      </div>
    </div>`
}

// @TODO: Store these in a text file and parse them
$("#grapyahs").append(
    cardHTML(
        "What's the most important part of becoming an Australian photographer?", 
        "You have to have a g'd eye."
));
$("#grapyahs").append(
    cardHTML(
        "Wat voor mol voelt geen pijn?", 
        "Een paracetamol."
));
$("#grapyahs").append(
    cardHTML(
        "Which Dutch province has the best fries?", 
        "Friesland."
));
$("#grapyahs").append(
    cardHTML(
        "Hoe noem je een fascistische sla?", 
        "Spinazi."
));
$("#grapyahs").append(
    cardHTML(
        "Wat is het favoriete spelletje van je gootsteen?", 
        "Verstoppertje."
));
$("#grapyahs").append(
    cardHTML(
        "Wat zeggen je darmen als ze hun teen stoten?", 
        "Verteeering!",
));
$("#grapyahs").append(
    cardHTML(
        "Hoe noem je een vegetarische taco?", 
        "Een sla-co."
))
;$("#grapyahs").append(
    cardHTML(
        "Wat gebeurt als je een tiener de baas van je bedrijf maakt?", 
        "Die gaat failliYEET."
));
$("#grapyahs").append(
    cardHTML(
        "What do you call it when a cow masturbates?", 
        "Beef jerky."
));
$("#grapyahs").append(
    cardHTML(
        "What do you call two French women in a relationship?", 
        "Trésbians."
));
$("#grapyahs").append(
    cardHTML(
        "Why did the plane crash?", 
        "Because the pilot was a loaf of bread!"
));
$("#grapyahs").append(
    cardHTML(
        "Where do red people go after their weddings?", 
        "On their honey-maroon."
));
$("#grapyahs").append(
    cardHTML(
        "Waarom ging de ambitieuze elektricien dood?", 
        "Hij pakte altijd de leiding!"
));
$("#grapyahs").append(
    cardHTML(
        "Why did the ambitious electrician get killed?", 
        "He was always taking charge!"
));

fixHeights()

// Masonry
var grid = $("#grapyahs").masonry({
    columnWidth: ".flip-card",
    itemSelector: ".flip-card",
    percentPosition: true
})

grid.masonry('on', 'layoutComplete', fixHeights())

// Card flipping functionlity
$('.flip-card').on('click', function(){
    $(this).toggleClass('flipped')
});

// // Timeouts to avoid jitter
// var timeoutIn, timeoutOut, delay = 100;
// $('.flip-card').on('mouseenter',
//     function(){
//         if (timeoutOut) {
//             clearTimeout(timeoutOut)
//         }
//         console.log("Flipping")
//         this_card = $(this)
//         timeoutIn = setTimeout(function(){
//             this_card.addClass('flipped')
//         }, delay);
//     }
// )

// $('.flip-card').on('mouseleave',
//     function(){
//         if (timeoutIn) {
//             clearTimeout(timeoutIn)
//         }
//         console.log("Flipping")
//         this_card = $(this)
//         timeoutOut = setTimeout(function(){
//             this_card.removeClass('flipped')
//         }, delay);
//     }
// )

// Make sure each card's front and back is the same height
function fixHeights(){
    console.log("fixing heights")
    $('.flip-card').each(function(){
        maxHeight = 0
        $(this).find('.flip-card-text').each(function(){
            maxHeight = Math.max(maxHeight, $(this).height())
        })
        $(this).find('.flip-card-body').height(maxHeight)
        $(this).height(maxHeight)
        // $(this).find('.card-body').css('background-color', randomColor())
    })    
    console.log("doing layout")
    if (grid) {grid.masonry('layout')};
}

$(window).resize(fixHeights)
