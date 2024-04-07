import { useState } from "react"
import NoteContext from "./noteContext"
import axios from "axios"


const NoteState = (props) => {

    const host = process.env.REACT_APP_HOST;

    let initialNotes = []
    const [notes, setNotes] = useState(initialNotes)

    // Fetch all Notes
    const fetchAllNotes = async (showAlert, setProgress, setLoading) => {
        // API Call
        try {
            const url = `${host}/api/note/list`
            setLoading(true)
            setProgress(30)
            const res = await axios.get(url, {
                headers: {
                    'authorization': localStorage.getItem("iNotebook-tkn"),
                    'Content-Type': 'application/json'
                }
            }
            );
            // console.log('res====>', res)
            setProgress(70)
            if (res.data.type === "Success") {
                setNotes(res.data.data)
                setLoading(false)
                setProgress(100)
            }

        } catch (error) {
            setLoading(false)
            setProgress(100)
            showAlert("danger", "Error while fetching Notes!")
        }
    }

    // Add Note
    const addNote = async ({ title, description, tag }, showAlert, setProgress, setLoading) => {
        // API Call
        try {
            const url = `${host}/api/note/add`
            const body = {
                "title": title,
                "description": description,
                "tag": tag
            }
            setLoading(true)
            setProgress(30)
            const res = await axios.post(url, body, {
                headers: {
                    'authorization': localStorage.getItem("iNotebook-tkn"),
                    'Content-Type': 'application/json'
                }
            }
            );
            // console.log('res====>', res)
            setProgress(70)
            if (res.data.type === "Success") {
                const result = res.data.data;
                const note = {
                    "_id": result._id,
                    "title": result.title,
                    "description": result.description,
                    "tag": result.tag
                }
                setNotes(notes.concat(note));
                setLoading(false)
                setProgress(100)
                showAlert("success", "Note added successfully!")
            }

        } catch (error) {
            setLoading(false)
            setProgress(100)
            showAlert("danger", "Error adding a note!")
        }
    }

    // Delete Note
    const deleteNote = async (id, showAlert, setProgress, setLoading) => {
        // API Call
        try {
            const url = `${host}/api/note/delete/${id}`
            setLoading(true)
            setProgress(30)
            const res = await axios.delete(url, {
                headers: {
                    'authorization': localStorage.getItem("iNotebook-tkn"),
                    'Content-Type': 'application/json'
                }
            }
            );
            setProgress(70)
            if (res.data.type === "Success") {
                const newNotes = notes.filter((note) => { return note._id !== id })
                setNotes(newNotes)
                setLoading(false)
                setProgress(100)
                showAlert("success", "Note is successfully deleted!")
            }


        } catch (error) {
            setLoading(false)
            setProgress(100)
            showAlert("danger", "Error deleting a note!")
        }
    }

    // Edit Note
    const editNote = async (id, title, description, tag, showAlert, setProgress, setLoading) => {
        // API Call
        try {
            const url = `${host}/api/note/update/${id}`

            const body = {
                "title": title,
                "description": description,
                "tag": tag
            }
            setLoading(true)
            setProgress(30)
            const res = await axios.patch(url, body, {
                headers: {
                    'authorization': localStorage.getItem("iNotebook-tkn"),
                    'Content-Type': 'application/json'
                }
            }
            );
            // console.log('res====>', res)
            setProgress(70)
            if (res.data.type === "Success") {
                // Todo Alert

                // Logic to update note
                let newNotes = JSON.parse(JSON.stringify(notes))
                for (let i = 0; i < newNotes.length; i++) {
                    const element = newNotes[i]
                    if (element._id === id) {
                        newNotes[i].title = title;
                        newNotes[i].description = description;
                        newNotes[i].tag = tag;
                        break;
                    }
                }
                setNotes(newNotes)
                setLoading(false)
                setProgress(100)
                showAlert("success", "Note is successfully updated!")
            }

        } catch (error) {
            setLoading(false)
            setProgress(100)
            showAlert("danger", "Error updating a note!")
        }
    }

    return (
        <NoteContext.Provider value={{ notes, fetchAllNotes, addNote, deleteNote, editNote }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState