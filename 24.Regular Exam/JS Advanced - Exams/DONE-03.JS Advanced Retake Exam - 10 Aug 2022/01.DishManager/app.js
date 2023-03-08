window.addEventListener("load", solve);

function solve() {

  const firstNameEl = document.getElementById('first-name');
  const lastNameEl = document.getElementById('last-name');
  const ageEl = document.getElementById('age');
  const genderEl = document.getElementById('genderSelect');
  const dishInfoEl = document.getElementById('task');
  let counter = document.getElementById('progress-count');

  const ulInProgressEl = document.getElementById('in-progress');
  const ulFinishedEl = document.getElementById('finished');

  const submitBtton = document.getElementById('form-btn');

  submitBtton.addEventListener('click', onSubmit)

  function onSubmit(event) {
    event.preventDefault();

    const inputs = {
      firstName: firstNameEl.value,
      lastName: lastNameEl.value,
      age: ageEl.value,
      gender: genderEl.value,
      dishInfoEl: dishInfoEl.value
    };

    console.log(counter.textContent);

    if (firstNameEl.value == '' || lastNameEl.value == '' || ageEl.value == '' || dishInfoEl.value == '') {
      return;
    }

    const liElement = document.createElement('li');
    liElement.classList.add('each-line');
    const articleElement = document.createElement("article");

    const h4Element = document.createElement("h4");
    h4Element.textContent = `${inputs.firstName} ${inputs.lastName}`;

    const pGenderAge = document.createElement("p");
    pGenderAge.textContent = `${inputs.gender}, ${inputs.age}`;

    const pDescription = document.createElement("p");
    pDescription.textContent = `Dish description: ${inputs.dishInfoEl}`;

    const editButton = document.createElement("button");
    editButton.classList.add("edit-btn");
    editButton.textContent = "Edit";

    const completeButton = document.createElement("button");
    completeButton.classList.add("complete-btn");
    completeButton.textContent = "Mark as complete";

    articleElement.appendChild(h4Element);
    articleElement.appendChild(pGenderAge);
    articleElement.appendChild(pDescription);

    liElement.appendChild(articleElement);
    liElement.appendChild(editButton);
    liElement.appendChild(completeButton);

    ulInProgressEl.appendChild(liElement);

    counter.textContent++;

    firstNameEl.value = '';
    lastNameEl.value = '';
    ageEl.value = '';
    dishInfoEl.value = '';


    editButton.addEventListener('click', onEdit);

    function onEdit() {
      liElement.remove();
      firstNameEl.value = inputs.firstName;
      lastNameEl.value = inputs.lastName;
      ageEl.value = inputs.age;
      dishInfoEl.value = inputs.dishInfoEl;
      counter.textContent--;
    }

    completeButton.addEventListener('click', onComplete);

    function onComplete() {
      editButton.remove();
      completeButton.remove();
      counter.textContent--;
      ulFinishedEl.appendChild(liElement);
    }

    const clearButton = document.querySelector("#clear-btn");
    clearButton.addEventListener("click", onClear);

    function onClear() {
      ulFinishedEl.innerHTML = '';
    }
  }
}
