import React from 'react';

const About = () => {

  document.title = "eNotes - About";

  return (
    <div className="container p-5">
      <div className="row">
        <div className="">
          <div className="text-center mb-5">
            <h2 className="display-4">About eNotes!</h2>
            <p className="lead">eNotes is your personal space online where you can write down your thoughts, ideas, and anything important. It’s easy and safe to use, anytime and anywhere.</p>
          </div>

          <div className="card text-center mb-5">
            <div className="card-header">
              <h4>What We Do</h4>
            </div>
            <div className="card-body">
              <p>We made eNotes simple on purpose. We want you to have a place where you can easily write, edit, and organize your notes without any hassle. Whether it’s a big idea, daily tasks, or something that just popped into your head, eNotes is here for you.</p>
            </div>
          </div>

          <div className="d-flex justify-content-center my-4">
            <div className="table-responsive">
              <table className="table">
                <thead className='table-light'>
                  <tr>
                    <th>Feature</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody className='table-group-divider'>
                  <tr>
                    <td><strong>Create</strong></td>
                    <td>Write down your thoughts with an easy-to-use editor. It’s straightforward and has everything you need.</td>
                  </tr>
                  <tr>
                    <td><strong>Edit</strong></td>
                    <td>Change your notes whenever you want. It’s easy to add more thoughts or change what you wrote before.</td>
                  </tr>
                  <tr>
                    <td><strong>Secure</strong></td>
                    <td>Only you can see your notes. They’re kept safe and private.</td>
                  </tr>
                  <tr>
                    <td><strong>Access Anywhere</strong></td>
                    <td>Use eNotes on your computer or phone. Your notes are always there for you, wherever you are.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="card text-center mb-5">
            <div className="card-header">
              <h4>Our Story</h4>
            </div>
            <div className="card-body">
              <p>eNotes started because we wanted a simple way to keep track of our thoughts and ideas without getting lost in complications. We created eNotes to help everyone write and keep their notes in an easy and organized way.</p>
            </div>
          </div>

          <div className="card text-center">
            <div className="card-header">
              <h4>Join Us</h4>
            </div>
            <div className="card-body">
              <p>Sign up for eNotes and start keeping your notes in one place. It’s a great way to make sure your ideas are saved and ready whenever you need them.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
