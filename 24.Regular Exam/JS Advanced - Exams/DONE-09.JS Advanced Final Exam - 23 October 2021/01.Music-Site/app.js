window.addEventListener('load', solve);

function solve() {

    const genreElement = document.getElementById('genre');
    const songNameElement = document.getElementById('name');
    const authorElement = document.getElementById('author');
    const dateElement = document.getElementById('date');

    const collectionOfSongsDiv = document.querySelector('.all-hits-container');
    const savedSongsDiv = document.querySelector('.saved-container');

    let likesCounter = document.querySelector('.likes > p');
    let counter = 0;


    const addButton = document.getElementById('add-btn');

    addButton.addEventListener('click', onAdd);

    function onAdd(event) {
        event.preventDefault();

        const inputs = {
            genre: genreElement.value,
            song: songNameElement.value,
            author: authorElement.value,
            date: dateElement.value
        }

        if (genreElement.value == '' || songNameElement.value == '' || authorElement.value == '' || dateElement.value == '') {
            return
        }
        console.log(inputs);

        // Create Elements...
        const divElement = document.createElement('div');
        divElement.classList.add('hits-info');

        const img = document.createElement('img');
        img.src = './static/img/img.png';

        const genre = document.createElement('h2');
        genre.innerText = `Genre: ${inputs.genre}`;

        const name = document.createElement('h2');
        name.innerText = `Name: ${inputs.song}`;

        const author = document.createElement('h2');
        author.innerText = `Author: ${inputs.author}`;

        const date = document.createElement('h3');
        date.innerText = `Date: ${inputs.date}`;

        const saveButton = document.createElement('button');
        saveButton.classList.add('save-btn');
        saveButton.innerText = 'Save song';

        const likeButton = document.createElement('button');
        likeButton.classList.add('like-btn');
        likeButton.innerText = 'Like song';

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-btn');
        deleteButton.innerText = 'Delete';

        //Append elements...
        divElement.appendChild(img);
        divElement.appendChild(genre);
        divElement.appendChild(name);
        divElement.appendChild(author);
        divElement.appendChild(date);
        divElement.appendChild(saveButton);
        divElement.appendChild(likeButton);
        divElement.appendChild(deleteButton);

        collectionOfSongsDiv.appendChild(divElement);

        genreElement.value = '';
        songNameElement.value = '';
        authorElement.value = '';
        dateElement.value = '';

        //Like Song Button funcionality
        likeButton.addEventListener('click', onLike)

        function onLike() {
            counter++;
            likesCounter.innerHTML = `Total Likes: ${counter}`;
            likeButton.disabled = true;
        }

        //Save Song Button funcionality
        saveButton.addEventListener('click', onSave);

        function onSave() {
            savedSongsDiv.appendChild(divElement);
            likeButton.remove();
            saveButton.remove();
        }

        //Delete Song Button funcionality
        deleteButton.addEventListener('click', onDelete);

        function onDelete() {
            divElement.remove();
        }
    }

}