import React, { useState } from 'react'
import axios from 'axios';

const AddNote = ({ getNotes }) => {
    const [note, setNote] = useState("");

    const addNote = async (e) => {
        e.preventDefault();
        if (note.trim().length === 0) {
            alert("Please enter a valid note.")
            return;
        }
        try {                     //default - get method                  //anything.json
            // await fetch("https://firenote-bdeab-default-rtdb.firebaseio.com/notes.json", {
            //     method: "POST",
            //     body: JSON.stringify({ note, isChecked: false }),
            //     headers: {
            //         "Content-Type": "application/json" //case-sensitive
            //     }
            // });
            await axios.post("https://firenote-bdeab-default-rtdb.firebaseio.com/notes.json", {
                note,
                isChecked: false,
            });
            setNote("");
            getNotes();
        } catch (err) {
            alert("something went wrong. Try again later.");
        }
    }

    return (
        <form className='card' onSubmit={addNote}>
            <input type="text" placeholder='add note here' value={note}
                onChange={e => setNote(e.target.value)} />
            <button className='submit-btn' >Add Note</button>
        </form>

    )
}

export default AddNote