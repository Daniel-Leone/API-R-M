const fragment = document.createDocumentFragment();

const template = document.querySelector('#personaje');

const container = document.querySelector('#container')

const api = 'https://rickandmortyapi.com/api/character'

fetch(api)
    .then(res => res.json())
    .then(data => {
        const array = data.results
        
        array.forEach(pers =>{

            const clone = template.content.cloneNode(true);

            clone.querySelector('#img img').src = pers.image;
            clone.querySelector('#img img').alt = pers.name;
            clone.querySelector('#img img').dataset.name = pers.name;
            clone.querySelector('#info #name').textContent = pers.name;
            clone.querySelector('#info #specie').textContent = pers.species;

            fragment.appendChild(clone)
        })

        container.appendChild(fragment)
    })

