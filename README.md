# stickyNote

Hosting Link: https://trishadas13.github.io/stickyNote/
<hr>
<h2>🚩HTML code description: </h2>
div class="top"

•	It's the top part of the application.

div class="noteContainer"

•	This container holds the text area for entering the sticky note content and options for setting the note's color.

div class="textArea"

•	A text area textarea where you can input the content of your sticky note.

•	The cols and rows attributes define the size of the text area.

•	It has a placeholder text, "Start your Sticky note journey from here," to provide instructions to the user.

•	The required attribute indicates that the text area must be filled before submitting the form.

div class="colorContainer"

•	A container for choosing the note's color.

input type="color" value="black"

•	An input element with the type "color," which allows the user to pick a color for the sticky note.

•	It starts with a default value of black.

button Add Note /button

•	A button that, when clicked, will add the sticky note to the application.

div class="down"

•	This is the bottom part of the application.

h1 You haven't added notes yet /h1

•	An h1 element that displays a message if there are no notes added yet.

div class="notes" /div

•	An empty div element with the class "notes." This is where added sticky notes will be displayed once you start adding them to the application.

<hr>
<h2>🚩CSS code description: </h2>
The universal selector (*) is used to reset the margin, padding, and box-sizing properties for all HTML elements, ensuring consistent spacing and sizing.

The body element is set to cover the entire viewport height and displays a background image. It ensures the image doesn't repeat and covers the entire viewport.

The .top class represents the top section of the page. It has a specific height, background color, border-radius for curved corners, and a box-shadow for a slight shadow effect. The content is centered using display: flex; justify-content: center;. Inside this section, there's a textarea element styled with rounded corners, a dashed border, and a text shadow. It's positioned absolutely with a higher z-index value.

The .noteContainer class represents a container for notes at the bottom of the page. It's absolutely positioned at the bottom.

The .colorContainer class is used to style a container for color pickers with images and input fields.

Buttons are styled with various properties, including border-radius, box-shadow, font-family, and other properties for appearance, and interactions.

A h1 element is positioned absolutely in the middle of the page with white text, a specific font, text shadow, and an underline decoration.

The .notes class represents a section for displaying notes. It's styled with flex-wrap and padding.

Individual notes with the .note class are styled with rounded corners, background color, and a dashed border. The delete button within each note is floated to the right.

<hr>
<h2>🚩JavaScript code description: </h2>
This JavaScript code is designed to create and manage notes with a specified background color on a web page. Here's a breakdown of its functionality:
1.	It selects various elements on the web page and stores them in variables:
•	addNote: Represents a button element.
•	notesContainer: Represents a container for displaying notes.
•	textArea: Represents a textarea element where the user can enter note content.
•	heading: Represents a heading element.
•	color: Represents an input element where the user can choose a background color for the notes.
2.	It adds an event listener to the "addNote" button (addNote) for the "click" event.
3.	Inside the "click" event listener, it retrieves the content from the textArea and stores it in the text variable.
4.	It checks if the text variable is empty. If it is, it prevents the default behavior of the button click (which would be form submission) and displays an alert, prompting the user to add text.
5.	If the text is not empty, it creates a new div element (notes) to represent the note. It sets the content of the note as the text from the textArea. It also includes a "Delete" button within the note.
6.	It appends the new note (notes) to the notesContainer.
7.	It sets the background color of both the p elements (text content) and the div elements (notes) to the selected color from the color input.
8.	It clears the content of the textArea by setting its value to an empty string.
9.	It adds another event listener to each "Delete" button within the notes. When a "Delete" button is clicked, it removes the parent div containing the note from the notesContainer.

<hr>
<h2>🚩Summary: </h2>
In summary, this CSS code is used to create a visually appealing web page with a background image, note-taking section, and color pickers. The styles include rounded corners, box shadows, and various effects to enhance the page's appearance and interactivity.

In summary, this code allows users to create colored notes with text content. The notes can be added, and the background color can be customized. Users can also delete individual notes by clicking the "Delete" button within each note.
<hr>
<h2>🚩UI: </h2>

![image](https://github.com/trishaDas13/stickyNote/assets/126088849/4d60ddeb-e82a-467d-8c7b-6aa44e9caf0f)
