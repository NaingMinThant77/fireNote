import React, { useState } from 'react'

const AddNote = ({ getNotes }) => {
    const [note, setNote] = useState("");

    const addNote = async (e) => {
        e.preventDefault();
        if (note.trim().length === 0 ) {
            alert("Please enter a valid note.")
            return;
        }
        try {                     //default - get method                  //anything.json
            await fetch("https://firenote-bdeab-default-rtdb.firebaseio.com/notes.json", {
                method: "POST",
                body: JSON.stringify({ note, isChecked: false }),
                headers: {
                    "Content-Type": "application/json" //case-sensitive
                }
            });
            setNote("");
            getNotes();
        } catch (err) {
            alert("something went wrong. Try again later.");
        }
    }

    return (
        <section onSubmit={addNote}>
            <form className='card'>
                <input type="text" placeholder='add note here' value={note}
                    onChange={e => setNote(e.target.value)} />
                <button className='submit-btn' >Add Note</button>
            </form>
        </section>
    )
}

export default AddNote