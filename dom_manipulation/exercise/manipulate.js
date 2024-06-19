const container = document.querySelector("#container");

const content = document.createElement("div");

content.classList.add("contents");
content.textContent = "This is the glorious text-content!";
container.appendChild(content);

const paragraph = document.createElement("p");
paragraph.textContent = "Hey I'm red!";
paragraph.style.color = "red";
content.appendChild(paragraph);

const header3 = document.createElement("h3");
header3.textContent = "I'm a blue h3!";
header3.style.color = "blue";
content.appendChild(header3);

const newDiv = document.createElement("div");
newDiv.style.backgroundColor = "pink";
newDiv.style.border = "solid";
container.appendChild(newDiv);

const header1 = document.createElement("h1");
header1.textContent = "I'm in a div";
newDiv.appendChild(header1);

const paragraph2 = document.createElement("p");
paragraph2.textContent = "ME TOO!";
newDiv.appendChild(paragraph2);