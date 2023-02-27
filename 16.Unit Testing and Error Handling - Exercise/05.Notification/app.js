function notify(message) {
  
  const notificationDiv = document.getElementById('notification');
  notificationDiv.innerText = message;
  notificationDiv.style.display = 'block';

  notificationDiv.addEventListener('click', hideIt);

  function hideIt(event) {
    event.target.style.display = 'none'
  }
}

// Write a JS function that receives a string message and displays it inside a div with id "notification.
// The div starts hidden and when the function is called, reveal it. After the user clicks on it, hide the div. 