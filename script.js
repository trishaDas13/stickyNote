let textArea = document.querySelector('textarea');
let addNote = document.querySelector('.colorContainer button');
let heading = document.querySelector('.down h1');
let notesContainer = document.querySelector('.notes');

addNote.addEventListener('click', (e) => {
    let text = textArea.value;
    heading.style.display = 'none';
    if(text === ""){
        e.preventDefault();
        alert("Please add the text first !");
    }
    let notes = document.createElement('div');
    notes.innerHTML = `
        <div class="note">
            <p>
                ${text}
            </p>
            <button btn='del'>Delete</button>
        </div>
    `
    notes.classList.add('.note');
    notesContainer.appendChild(notes);

    let delbutton = document.querySelector(`button[btn="del"]`);
    delbutton.addEventListener('click' , () => {
        console.log("kk");
        notes.innerHTML = "";
    });
    
});




