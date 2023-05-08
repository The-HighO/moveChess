const chess = document.querySelector(".chess")
const boxes = document.querySelectorAll(".box")
let chessPiece;


chess.addEventListener('dragstart', (e) => {
      chessPiece = e.target  
})

boxes.forEach(boxes =>{
    boxes.addEventListener('dragover', (e)=>{
        e.preventDefault()
    })

    boxes.addEventListener('drop', (e)=>{
        e.target.append(chessPiece) 
    })
})