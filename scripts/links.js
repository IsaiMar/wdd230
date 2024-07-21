const baseURL = "https://isaimar.github.io/wdd230/";
const linksURL = "https://isaimar.github.io/wdd230/data/links.json";
const cards = document.querySelector("#links");


  const displayLinks = (links) => {
    links.forEach((link) => {
      // Create elements to add to the div.cards element
      let card = document.createElement('section');
      let week = document.createElement('p'); 
      let website1 = document.createElement('a');
      let website2 = document.createElement('a');
      let website3 = document.createElement('a');

      // Build the h2 content out to show the link's full name
      week.textContent = `${link.week}`; // fill in the blank
      // Build the image portrait by setting all the relevant attributes
      website1.setAttribute("href", link.links[0].url);
      website1.textContent = `${link.links[0].title} |`;
      website2.setAttribute("href", link.links[1].url);
      website2.textContent = `${link.links[1].title} |`;
      website3.setAttribute("href", link.links[2].url);
      website3.textContent = `${link.links[2].title}`;


  
      // Append the section(card) with the created elements
      card.appendChild(week);
      card.appendChild(website1);
      card.appendChild(website2);
      card.appendChild(website3);


  
      cards.appendChild(card);
    }); // end of arrow function and forEach loop
  }

  async function getLinks(linksURL) {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data.weeks);
    displayLinks(data.weeks);
  }

 getLinks(linksURL);