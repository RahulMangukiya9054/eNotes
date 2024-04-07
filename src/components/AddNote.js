import React, { useContext, useState } from 'react'
import noteContext from '../context/notes/noteContext'
import alertContext from '../context/alert/alertContext';
import progressContext from '../context/progress/progressContext';

const AddNote = () => {

    const context = useContext(noteContext);
    const { addNote } = context;
    const { showAlert } = useContext(alertContext)
    const { setProgress, setLoading } = useContext(progressContext)

    const [note, setNote] = useState({ title: "", description: "", tag: "" })

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addNote(note, showAlert, setProgress, setLoading);
        setNote({ title: "", description: "", tag: "" })
    }

    return (
        <div className="container my-3">
            <h2>Add a Note</h2>
            <form>
                <div className="mb-3 my-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" name='title' value={note.title} onChange={onChange} required placeholder='At least 3 Characters' />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" className="form-control" id="description" name='description' value={note.description} onChange={onChange} required placeholder='At least 5 Characters' />
                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label">Tag</label>
                    <input type="text" className="form-control" id="tag" name='tag' value={note.tag} onChange={onChange} required placeholder='At least 3 Characters' />
                </div>
                <button type="submit" disabled={note.title.length < 3 || note.description.length < 5 || note.tag.length < 3} className="btn btn-primary" onClick={handleSubmit}>Add Note</button>
            </form>
        </div>
    )
}

export default AddNote
