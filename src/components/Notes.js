import React, { useContext, useEffect, useRef, useState } from 'react'
import noteContext from '../context/notes/noteContext'
import Noteitem from './Noteitem';
import alertContext from '../context/alert/alertContext';
import { useNavigate } from 'react-router-dom'
import progressContext from '../context/progress/progressContext';

const Notes = () => {

    let context = useContext(noteContext)
    const { notes, fetchAllNotes, editNote, deleteNote } = context;
    const { showAlert } = useContext(alertContext)
    const { setProgress, setLoading } = useContext(progressContext)
    const updatemodalbtn = useRef(null)
    const deletemodalbtn = useRef(null)
    const closeUpdatebtn = useRef(null)
    const closeDeletebtn = useRef(null)
    const [note, setNote] = useState({ id: "", etitle: "", edescription: "", etag: "" })
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem("iNotebook-tkn")) {
            fetchAllNotes(showAlert, setProgress, setLoading)
        }
        else {
            navigate("/login");
        }
        // eslint-disable-next-line
    }, [])

    const updateNote = (currentNote) => {
        updatemodalbtn.current.click()
        setNote({ id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag })
    }

    const removeNote = (currentNote) => {
        deletemodalbtn.current.click()
        setNote({ id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag })
        // deleteNote(note._id, showAlert, setProgress)
    }

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }

    const handleUpdate = (e) => {
        editNote(note.id, note.etitle, note.edescription, note.etag, showAlert, setProgress, setLoading)
        closeUpdatebtn.current.click()
    }

    const handleDelete = (e) => {
        deleteNote(note.id, showAlert, setProgress, setLoading)
        closeDeletebtn.current.click()
    }

    return (
        <>
            <button type="button" ref={updatemodalbtn} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#updateModal">
                Launch update modal
            </button>

            <button type="button" ref={deletemodalbtn} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#deleteModal">
                Launch delete modal
            </button>

            <div className="modal fade" id="deleteModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Delete Note</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3 my-3 text-center">
                                    <label htmlFor="etitle" className="form-label">
                                        Are you sure you want to delete this Note?
                                    </label>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" ref={closeDeletebtn}>Close</button>
                            <button type="button" className="btn btn-danger" onClick={handleDelete}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="updateModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Note</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3 my-3">
                                    <label htmlFor="etitle" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="etitle" name='etitle' aria-describedby="emailHelp" value={note.etitle} onChange={onChange} required placeholder='At least 3 Characters' />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="edescription" className="form-label">Description</label>
                                    <input type="text" className="form-control" id="edescription" name='edescription' value={note.edescription} onChange={onChange} required placeholder='At least 5 Characters' />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="etag" className="form-label">Tag</label>
                                    <input type="text" className="form-control" id="etag" name='etag' value={note.etag} onChange={onChange} required placeholder='At least 3 Characters' />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" ref={closeUpdatebtn}>Close</button>
                            <button type="button" className="btn btn-primary" disabled={note.etitle.length < 3 || note.edescription.length < 5 || note.etag.length < 3} onClick={handleUpdate}>Update Note</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container row">
                <h2>Your Notes</h2>
                {notes.length === 0 && <p className='mx-1'>No Notes to Display - Please add a note to preview it here!</p>}
                {notes.map((note) => {
                    return <Noteitem key={note._id} note={note} updateNote={updateNote} removeNote={removeNote} />
                })}
            </div>
        </>
    )
}

export default Notes
