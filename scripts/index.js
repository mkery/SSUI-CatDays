/*
* This is our data
*/
catDays = [
  {
    img: "Cat1.JPG",
    title: "Monday",
    desc:
      "On Mondays Taro checks the mail delivery for socks. If there are no socks delivers, she waits in a box to be returned by post."
  },
  {
    img: "Cat2.JPG",
    title: "Tuesday",
    desc:
      "On Tuesdays Taro thinks about friends she burned with sick comments and then forgot. On this day, she prefers black socks out of mourning."
  },
  {
    img: "Cat3.JPG",
    title: "Wednesday",
    desc:
      "On Wednesday Taro goes to work. She prefers buisness casual socks, to give her fortitude to get through hours of paperwork."
  },
  {
    img: "Cat4.JPG",
    title: "Thursday",
    desc:
      "Thurday is a day of rest after hard work. Taro will take any socks out of the dirty laundry bin."
  },
  {
    img: "Cat5.JPG",
    title: "Friday",
    desc:
      "Friday brings a rich harvest, as the laundry is yet to be done, there are plenty of socks around. Taro stores some for later."
  },
  {
    img: "Cat6.JPG",
    title: "Saturday",
    desc:
      "On Saturday Taro braces for the coming barren winter and eats layered wool socks."
  },
  {
    img: "Cat7.JPG",
    title: "Sunday",
    desc:
      "Sunday the laundry is all cleaned and hidden away in drawers. Taro hates every minute."
  },
  {
    img: "Cat8.JPG",
    title: "Taro?",
    desc:
      "Is a special kitten."
  },
  {
    img: "Cat9.JPG",
    title: "Socks?",
    desc:
      "A delicacy. Taro also eats all kinds of clothes. It is NOT healthy or OK for cats to eat clothes. They're not goats."
  }
];

/*
* This function is called once the DOM loads
*/
function loadPage() {
  console.log("it's alive!!!");

  let contentArea = document.getElementsByClassName("contentArea")[0]

  catDays.forEach(item => {
    let div = buildItem(item)
    contentArea.appendChild(div)
  })
}

/*
* this function dynamically creates divs to display
* the data
*/
function buildItem(data) {
  let imgSrc = data.img
  let title = data.title
  let desc = data.desc

  let itemBlock = document.createElement("div")
  itemBlock.classList.add("itemBlock")

  let catImage = document.createElement("div")
  catImage.classList.add("catImage")
  catImage.style.backgroundImage = 'url("images/' + imgSrc + '")'
  itemBlock.appendChild(catImage)

  let catTitle = document.createElement("div")
  catTitle.textContent = title
  catTitle.classList.add("catTitle")
  itemBlock.appendChild(catTitle)

  let catDesc = document.createElement("div")
  catDesc.textContent = desc
  catDesc.classList.add("catDesc")
  itemBlock.appendChild(catDesc)

  return itemBlock
}
