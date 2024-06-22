
const programmingLanguages = ['Python', 'JavaScript', 'Java'];

const ul = document.createElement('ul');

programmingLanguages.forEach(lang => {
  const li = document.createElement('li');
  li.textContent = lang;
  ul.appendChild(li);
});

const myListContainer = document.getElementById('myList');
myListContainer.appendChild(ul);
