
class CatItem{

  constructor(imgSrc, title, desc){
    this.imgSrc = imgSrc
    this.title = title
    this.desc = desc
    this.element = this.buildItem()
  }

  buildItem() {
    let itemBlock = document.createElement("div")
    itemBlock.classList.add("itemBlock")

    let catImage = document.createElement("div")
    catImage.classList.add("catImage")
    catImage.style.backgroundImage = 'url("images/' + this.imgSrc + '")'
    itemBlock.appendChild(catImage)

    let catTitle = document.createElement("div")
    catTitle.textContent = this.title
    catTitle.classList.add("catTitle")
    itemBlock.appendChild(catTitle)

    let catDesc = document.createElement("div")
    catDesc.textContent = this.desc
    catDesc.classList.add("catDesc")
    itemBlock.appendChild(catDesc)

    return itemBlock
  }
}
