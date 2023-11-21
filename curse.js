
var text_l = [];
fetch("filter_profanity_russian.txt")
    .then((res) => res.text())
    .then((text) => {
        text_l = text.split('\n')
        const div = document.getElementById('curse_word')
        div.innerHTML = text_l[getRandomInt(text_l.length - 1)]
    })
    .catch((e) => console.error(e));
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const getPhrase = () => {
    const div = document.getElementById('curse_word')
    div.innerHTML = text_l[getRandomInt(text_l.length - 1)]
}