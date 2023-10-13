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
        <div class="note">
            <p class= "para">
                ${text}
            </p>
            <button btn='del'>Delete</button>
        </div>
    `
    notes.classList.add('.note');
    notesContainer.appendChild(notes);

    let stickyNoteContent = document.querySelectorAll('.note p');
    stickyNoteContent.forEach((eachNote) => {
        eachNote.style.backgroundColor= color.value;
    });

    let stickyNote = document.querySelectorAll('.note');
    stickyNote.forEach((eachNote) => {
        eachNote.style.backgroundColor= color.value;
    });



    
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