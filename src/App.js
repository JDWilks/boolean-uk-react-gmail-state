import Header from './components/Header'
import initialEmails from './data/emails'
import './App.css'
import { useState } from 'react'

function App() {
  const [emails, setEmails] = useState(initialEmails)

  console.log('email after state is called', emails)

  // ⬇ function to update state (emails) for read

  function toggleRead(targetEmail) {
    const updatedEmails = [...emails]
    const indexToChange = emails.findIndex(function (email) {
      return email.id === targetEmail.id
    })
    const originalEmail = emails[indexToChange]
    const updatedEmail = { ...originalEmail, read: !originalEmail.read }
    updatedEmails[indexToChange] = updatedEmail
    setEmails(updatedEmails)
  }

  // ⬇ function to update state (emails) for starred

  function toggleStars(targetEmail) {
    const updatedEmails = [...emails]
    const indexToChange = emails.findIndex(function (email) {
      return email.id === targetEmail.id
    })
    const originalEmail = emails[indexToChange]
    const updatedEmail = { ...originalEmail, starred: !originalEmail.starred }
    updatedEmails[indexToChange] = updatedEmail
    setEmails(updatedEmails)
  }

  return (
    <div className="app">
      <Header />
      <nav className="left-menu">
        <ul className="inbox-list">
          <li className="item active" onClick={() => {}}>
            <span className="label">Inbox</span>
            <span className="count">?</span>
          </li>
          <li className="item" onClick={() => {}}>
            <span className="label">Starred</span>
            <span className="count">?</span>
          </li>

          <li className="item toggle">
            <label htmlFor="hide-read">Hide read</label>
            <input
              id="hide-read"
              type="checkbox"
              checked={false}
              onChange={() => {}}
            />
          </li>
        </ul>
      </nav>
      <main className="emails">
        <ul>
          {emails.map(function (email) {
            return (
              <li
                key={email.id}
                className={`email ${email.read ? 'read' : 'unread'}`}
              >
                <input
                  className="read-checkbox"
                  type="checkbox"
                  checked={email.read}
                  onChange={() => {
                    toggleRead(email)
                  }}
                />
                <input
                  className="star-checkbox"
                  type="checkbox"
                  checked={email.starred}
                  onChange={() => {
                    toggleStars(email)
                  }}
                />
                <span className="sender">{email.sender}</span>
                <span className="title">{email.title}</span>
              </li>
            )
          })}
        </ul>
      </main>
    </div>
  )
}

export default App

// ⬇⬇⬇⬇⬇function to update state (emails)
// ⬇⬇⬇⬇⬇long functino wtih explanation

// function toggleRead(targetEmail) {
//   // ⬇ created a new array with all the original emails
//   const updatedEmails = [...emails]

//   // ⬇ finds the index of the email we want to change
//   const indexToChange = emails.findIndex(function (email) {
//     return email.id === targetEmail.id
//   })

//   // ⬇ we stored the original email we want to update
//   const originalEmail = emails[indexToChange]

//   // ⬇ we create a copy of the original email wtih the opposite of read (toggle)
//   const updatedEmail = { ...originalEmail, read: !originalEmail.read }

//   // ⬇ taking the email we want to change and swapping it with the updated copy
//   updatedEmails[indexToChange] = updatedEmail

//   // ⬇ replacing the old array in state, with the updated version
//   setEmails(updatedEmails)
// }

// function toggleReadShort(targetEmail) {

// ⬇ create a new variable with the updated emails
// ⬇ map does this for us
// const updatedEmails = emails.map(function(email){
// ⬇ we loop over each individual email
// ⬇ fit he emails id match our target emails id
//   if(email.id === targetEmail.id){
// ⬇ we get back an pdated copy
//   return {...email, read: !email.read}
// }
// ⬇ othereise we get back the original email, untouched
// return email
// })

// setEmails(updatedEmails)

// }

// using ternary:

// function toggleReadShort(targetEmail) {

//   const updatedEmails = emails.map(email =>
//     email.id === targetEmail.id ? {
//     ...email, read: !email.read } : email
//   )

//   setEmails(updatedEmails)
// }

// original emails [m2,m3,m4,m5,m6] <<< m1
// updated emails [m2,m3,m8,m5,m6] <<< m7
// react needs to know we have a new array to update the page
