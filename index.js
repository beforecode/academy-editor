const render = document.getElementById("render")
const mainTitle = document.querySelector(".main_title")
const mainDesc = document.querySelector(".main_desc")
const textArea = document.querySelector("textarea")
const view = document.querySelector(".view")


mainTitle.addEventListener("click", () => {
    const formaterObj = {
        start: `<div class="ct">`,
        end: "</div>"
    }
    finder(textArea, formaterObj)  
})
mainDesc.addEventListener("click", () => {
    const formaterObj = {
        start: `<div class="cd">`,
        end: "</div>"
    }
    finder(textArea, formaterObj)
})
render.addEventListener("click", () => {
    view.innerHTML = textArea.value
})
// ----------------
let finder = (tetxArea, formaterObj) => {
        let {selectionStart,selectionEnd, value} = textArea
        if(selectionStart === selectionEnd) return console.error("Noting was selected")
        let {start, end} = formaterObj
        let str = value.substring(selectionStart, selectionEnd)
        tetxArea.value = value.replace(str, start + str + end)
}


