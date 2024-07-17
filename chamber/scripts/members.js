const url = "/chamber/data/members.json"
const cards = document.querySelector("#cards")

const displayMembers = (members) => {
  members.forEach((member) => {
    let card = document.createElement("section")
    let name = document.createElement("h2")
    let info = document.createElement("ul")

    name.textContent = `${member.name}`
    info.innerHTML = `<li>Location: ${member.address}</li>
    <li>Phone number: ${member.phone}</li>
    <li>Website: ${member.website}</li>
    <li>Membership lvl: ${member.membership_level}</li>`

    card.appendChild(name)
    card.appendChild(info)

    cards.appendChild(card)
  })
}

async function getMemberData(url) {
  const response = await fetch(url)
  const data = await response.json()
  //   console.table(data.members);
  displayMembers(data.members)
}

getMemberData(url)
