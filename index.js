const render = document.getElementById("render")
const mainTitle = document.querySelector(".main_title")
const mainDesc = document.querySelector(".main_desc")
const textArea = document.querySelector("textarea")
const view = document.querySelector(".view")
const innerhtml = document.querySelector(".innerHTML")


mainTitle.addEventListener("click", () => {
    // let selected = textArea.value.substring(textArea.selectionStart,textArea.selectionEnd)
    // console.log(selected)
    let selected = textArea.value.substring(textArea.selectionStart,textArea.selectionEnd)
    console.log(selected)
    let match = textArea.value.search(selected)
    console.log(match)
    let replaced = textArea.value.replace(match.toString(), "xxx")
    console.log(replaced)
    // let formated = setMainTitle(selected)
    // view.innerHTML += formated
})
mainDesc.addEventListener("click", () => {
    let selected = textArea.value.substring(textArea.selectionStart,textArea.selectionEnd)
    let formated = setDesc(selected)
    view.innerHTML += formated
})
render.addEventListener("click", () => {
    innerhtml.value = view.innerHTML
})
// ----------------
const setMainTitle = txt => {
    if(txt==="") return console.error("Noting was selected")
    let formated = `<div class="ct">${txt}</div>`
    return formated
}
const setDesc = txt => {
    if(txt==="") return console.error("Noting was selected")
    let formated = `<div class="cd">${txt}</div>`
    return formated
}