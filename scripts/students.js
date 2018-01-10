/**
 * A script to add students details to main homepage.
 */

var students = [
  { name: "Andrew O'Leary", image: "placeholder.jpg", specialInterest: "N/A", link: "andrew-oleary" },
  { name: "Ian McCurrach", image: "placeholder.jpg", specialInterest: "N/A", link: "ian-mccurrach" },
  { name: "Jim Sheeran", image: "placeholder.jpg", specialInterest: "N/A", link: "jim-sheeran" },
  { name: "Jose Pena", image: "placeholder.jpg", specialInterest: "N/A", link: "jose-pena" },
  { name: "Mohamoud Dahir", image: "placeholder.jpg", specialInterest: "N/A", link: "mohamoud-dahir" },
  { name: "Mostafa Al-Bakaa", image: "placeholder.jpg", specialInterest: "N/A", link: "mostafa-al-bakaa" },
  { name: "Nirmean Sawi", image: "placeholder.jpg", specialInterest: "N/A", link: "nirmean-sawi" },
  { name: "Pedro Astigarraga", image: "placeholder.jpg", specialInterest: "N/A", link: "pedro-astigarraga" },
  { name: "Tahmid Dewan", image: "placeholder.jpg", specialInterest: "N/A", link: "tahmid-dewan" },
  { name: "Thomas Dagg", image: "placeholder.jpg", specialInterest: "N/A", link: "thomas-dagg" },
  { name: "Shane Addicoat", image: "placeholder.jpg", specialInterest: "N/A", link: "shane-addicoat" }
];

students.forEach(function(element) {
  var name = document.createTextNode(element.name);
  var interest = document.createTextNode("Special Interest: " + element.specialInterest);

  var image = document.createElement('img');
  image.setAttribute('src', 'styles/images/' + element.image);
  image.setAttribute('class', 'students-list-item-image');

  var nameDiv = document.createElement('div');
  nameDiv.setAttribute('class', 'students-list-item-name');
  nameDiv.appendChild(name);

  var interestDiv = document.createElement('div');
  interestDiv.setAttribute('class', 'students-list-item-interest');
  interestDiv.appendChild(interest);

  var wrapper = document.createElement('a');
  wrapper.setAttribute('class', 'students-list-item');
  wrapper.setAttribute('href', element.link + '/index.html');
  wrapper.appendChild(image);
  wrapper.appendChild(nameDiv);
  wrapper.appendChild(interestDiv);

  document.getElementById("students-list").appendChild(wrapper);
});
