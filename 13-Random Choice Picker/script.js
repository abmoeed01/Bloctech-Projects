const tagsEl = document.getElementById("tags");
const textarea = document.getElementById("textarea");

textarea.focus();

textarea.addEventListener("keyup", (e) => {
    createTags(e.target.value);

    if (e.key === "Enter") {
        setTimeout(() => {
            e.target.value = ""
        }, 10)
        randomSelect();
    }
})

function createTags(input) {
    const tags = input.split(",").filter(tag => tag.trim()
        !== "").map(tag => tag.trim())

    tagsEl.innerHTML = ""

    tags.forEach(tag => {
        const tagEl = document.createElement("span");
        tagEl.classList.add("tag")
        tagEl.innerText = tag
        tagsEl.appendChild(tagEl)
    })
}

function randomSelect() {
    const times = 30;

    const interval = setInterval(() => {
        const randomTag = pickRandomTag()

        highlightTag(randomTag)

        setTimeout(() => {
            unHighlightTag(randomTag)
        }, 100);
    }, 100);

    setTimeout(() => {
        clearInterval(interval)

        setTimeout(() => {
            const randomTag = pickRandomTag()
            highlightTag(randomTag)
        }, 100);
        
    }, times * 100);
}

function pickRandomTag() {
    const tags = document.querySelectorAll(".tags");
    return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag) {
    tag.classList.add("highlight")
}

function unHighlightTag(tag) {
    tag.classList.remove("highlight")
}





// const textarea = document.getElementById('textarea');
// const tagsEl = document.getElementById('tags');


// textarea.addEventListener('keyup', (event) => {
//     createTags(event.target.value);

//     if(event.key === 'Enter'){
//         setTimeout(() => {
//             event.target.value = '';
//         }, 10);

//         randomSelect();
//     }
// })


// function createTags(input) {
//     const tags = input.split(',').filter(tag => tag.trim() !== '' ).map(tag => tag.trim());
//     console.log(tags)

//     tagsEl.innerHTML='';

//     tags.forEach(tag => {
//         const t = document.createElement('span');
//         t.classList.add('tag');
//         t.innerText = tag;
//         tagsEl.append(t);

//     })

// }


// function randomSelect() {

//     const times = 30;
//     const int = 100;

//     const interval = setInterval(() => {
//         // randomly select a tag
//         const randomTag = pickRandomTag();

//         //highlight 
//         highlightTag(randomTag);

//         //unhighlight
//         setTimeout(() => {
//             unHighlightTag(randomTag)
//         }, int);
        
//     }, int);


//     setTimeout(() => {
//         clearInterval(interval);

//         setTimeout(() => {

//             // randomly select a tag
//             const randomTag = pickRandomTag();

//             //highlight 
//             highlightTag(randomTag);
            
//         }, int);


//     }, int * times);

// }


// function pickRandomTag() {
//     const tags = document.querySelectorAll('.tag');
//     return tags[Math.floor(Math.random() * tags.length)];
// }

// function highlightTag(tag) {
//     tag.classList.add('highlight')
// }

// function unHighlightTag(tag) {
//     tag.classList.remove('highlight')
// }

// Know when enter is pressed 
// randomly pick a tag for sometime 
// pick for final iteration 