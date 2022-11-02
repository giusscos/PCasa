const bodyEl = document.querySelector('body')
const containerHeaderEl = document.querySelector('.main_header > .container')
const navEl = `
                <nav class="navigation">
                    <ul class="list" id="list-nav"></ul>
                </nav>
                `
const linesEl = `
                <div class="lines">
                    <span class="line top"></span>
                    <span class="line bot"></span>
                </div>
                `

containerHeaderEl.innerHTML += linesEl
containerHeaderEl.innerHTML += navEl

const listNavEl = document.getElementById('list-nav')

const LINKS = [
    {
        'name': 'detersivi alla spina',
        'link': '/detersivi'
    },
    {
        'name': 'artigianato locale',
        'link': '/artigianato'
    },
    {
        'name': 'prodotti tipici',
        'link': '/prodotti-tipici'
    },
]

for (let i = 0; i < LINKS.length; i++) {
    const currentName = LINKS[i].name
    const currentLink = LINKS[i].link

    listNavEl.innerHTML += `
        <li class="list-item">
            <a href="${currentLink}" class="item-link">
                ${currentName}
            </a>
        </li>
    `
}

navEl.innerHTML += listNavEl

const linesDomEl = document.querySelector('.lines')
let isClicked = false

linesDomEl.addEventListener('click', () => {
    if(!isClicked){
        bodyEl.classList.add('open')
    } else{
        bodyEl.classList.remove('open')
    }

    isClicked = !isClicked
})