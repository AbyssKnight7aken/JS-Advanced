window.addEventListener("load", solve);

function solve() {

  const firtsNameEl = document.getElementById('first-name');
  const lastNameEl = document.getElementById('last-name');
  const ageNameEl = document.getElementById('age');
  const storyTitleEl = document.getElementById('story-title');
  const genreEl = document.getElementById("genre");
  const storyEl = document.getElementById('story');

  const previewUlElement = document.getElementById("preview-list");
  const mainElement = document.getElementById("main");

  let publishBtnEl = document.getElementById("form-btn");

  publishBtnEl.addEventListener('click', onPublish);

  function onPublish(event) {
    event.preventDefault();

    const inputs = {
      FirstName: firtsNameEl.value,
      LastName: lastNameEl.value,
      Age: ageNameEl.value,
      StoryTitle: storyTitleEl.value,
      Gerne: genreEl.value,
      Story: storyEl.value,
    }

    if (firtsNameEl.value == ''
      || lastNameEl.value == ''
      || ageNameEl.value == ''
      || storyTitleEl.value == ''
      || storyEl.value == '') {
      return;
    }

    const liElement = document.createElement('li');
    liElement.classList.add('story-info');

    const articleElement = document.createElement('article');
    const h4Element = document.createElement('h4');
    h4Element.innerText = `Name: ${inputs.FirstName} ${inputs.LastName}`;

    const agePElement = document.createElement('p');
    agePElement.innerText = `Age: ${inputs.Age}`;

    const titlePElement = document.createElement('p');
    titlePElement.innerText = `Title: ${inputs.StoryTitle}`;

    const genrePElement = document.createElement('p');
    genrePElement.innerText = `Genre: ${inputs.Gerne}`;

    const storyTextPElement = document.createElement('p');
    storyTextPElement.innerText = `${inputs.Story}`;

    const saveButton = document.createElement('button');
    saveButton.classList.add('save-btn');
    saveButton.innerText = 'Save Story';

    const editButton = document.createElement('button');
    editButton.classList.add('edit-btn');
    editButton.innerText = 'Edit Story';

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-btn');
    deleteButton.innerText = 'Delete Story';

    articleElement.appendChild(h4Element);
    articleElement.appendChild(agePElement);
    articleElement.appendChild(titlePElement);
    articleElement.appendChild(genrePElement);
    articleElement.appendChild(storyTextPElement);

    liElement.appendChild(articleElement);
    liElement.appendChild(saveButton);
    liElement.appendChild(editButton);
    liElement.appendChild(deleteButton);
    previewUlElement.appendChild(liElement);

    firtsNameEl.value = '';
    lastNameEl.value = '';
    ageNameEl.value = '';
    storyTitleEl.value = '';
    storyEl.value = '';

    publishBtnEl.disabled = true;

    //Edit Button functionality:
    editButton.addEventListener('click', onEdit);

    function onEdit() {
      publishBtnEl.disabled = false;
      editButton.disabled = true;
      deleteButton.disabled = true;

      firtsNameEl.value = inputs.FirstName;
      lastNameEl.value = inputs.LastName;
      ageNameEl.value = inputs.Age;
      genreEl.value = inputs.Gerne;
      storyTitleEl.value = inputs.StoryTitle;
      storyEl.value = inputs.Story;

      liElement.remove();
    }

    // Delete Button Funcionality:
    deleteButton.addEventListener('click', onDelete);

    function onDelete() {
      liElement.remove();
      publishBtnEl.disabled = false;
    }

    // Save Button Funcionality:
    saveButton.addEventListener('click', onSave);

    function onSave() {
      mainElement.remove();
      const h1SavedEl = document.createElement('h1');
      h1SavedEl.innerText = 'Your scary story is saved!';

      const divEl = document.createElement('div');
      divEl.setAttribute('id', 'main');
      divEl.appendChild(h1SavedEl);
      const bodyEl = document.querySelector('.body');
      bodyEl.appendChild(divEl);

    }

  }

}
