import React from 'react'

const Noteitem = (props) => {

    const { note, updateNote, removeNote } = props;

    return (
        <div className='col-md-3'>
            <div className="card my-3">
                <div className="card-body">
                    <h5 className="card-title w-100">{note.title}</h5>
                    <p className="card-text">{note.description}</p>
                    <p className="card-text"><b>Tag :</b> {note.tag}</p>
                    <i className="fa-regular fa-pen-to-square" title='Edit' style={{ color: "#0eff0a" }} onClick={() => { updateNote(note) }}></i>
                    <i className="fa-regular fa-trash-can mx-2" title='Delete' style={{ color: "#f20202" }} onClick={() => { removeNote(note) }}></i>
                </div>
            </div>
        </div>
    )
}

export default Noteitem
