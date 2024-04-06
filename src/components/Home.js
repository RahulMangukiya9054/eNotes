import React from 'react'
import Notes from './Notes'
import AddNote from './AddNote'

const Home = () => {

  document.title = "iNotebook"

  return (
    <div className="container my-5">
      <AddNote />
      <Notes />
    </div>
  )
}

export default Home
