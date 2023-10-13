let addNote = document.querySelector('.colorContainer button');
let notesContainer = document.querySelector('.notes');
let textArea = document.querySelector('textarea');
let heading = document.querySelector('.down h1');
let color = document.querySelector('input');
// console.log(color);

addNote.addEventListener('click', (e) => {

    //todo ---------- to append the notes ----------
    let text = textArea.value;
    heading.style.display = 'none';
    if(text === ""){
        e.preventDefault();
        alert("Please add the text first !");
        return;
    }
    let notes = document.createElement('div');
    notes.innerHTML = `
        <div class="note" color='bg'>
            <p>
                ${text}
            </p>
            <button btn='del'>Delete</button>
        </div>
    `
    notes.classList.add('.note');
    notesContainer.appendChild(notes);
    textArea.value = "";

     //todo ---------- to delete the notes ----------
    let delbutton = document.querySelectorAll(`button[btn="del"]`);
    delbutton.forEach((dltEle) => {
        dltEle.addEventListener('click' , (e) => {
            if(dltEle.innerText == 'Delete'){
                e.target.parentElement.parentElement.remove();
            }
        });
        
    });   

});

//todo ---------- to color the notes ---------- 
color.addEventListener('change', function(e){
    // e.preventDefault();
    let stickyNote = document.querySelectorAll('.note');
    console.log(stickyNote);

    stickyNote.forEach((eachNote) => {
        let bgcolor = e.target.value;
        eachNote.style.backgroundColor = bgcolor;
        console.log(eachNote);
    });
});