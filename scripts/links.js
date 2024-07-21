const baseURL = "https://isaimar.github.io/wdd230/";
const linksURL = "https://isaimar.github.io/wdd230/data/links.json";
const cards = document.querySelector("#links");


  const displayLinks = (links) => {
    links.forEach((link) => {
      // Create elements to add to the div.cards element
      let card = document.createElement('section');
      let week = document.createElement('p'); 
      let website = document.createElement('a');
  
      // Build the h2 content out to show the link's full name
      week.textContent = `${link.week}`; // fill in the blank
      // Build the image portrait by setting all the relevant attributes
      website.setAttribute("href", link.links[0].url);
      website.textContent = `${link.links[0].title} | ${link.links[1].title} | ${link.links[2].title}`

  
      // Append the section(card) with the created elements
      card.appendChild(week);
      card.appendChild(website);
  
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