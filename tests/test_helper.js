const Blog = require('../models/blog')

const initialBlogs = [
  {
    title: 'testi1',
    author: 'testaaja1',
    url: 'asdasd123123',
    likes: '1'
  },
  {
    title: 'testi2',
    author: 'testaaja2',
    url: 'qwerty101010',
    likes: '2'
  },
]

/*
const nonExistingId = async () => {
    const note = new Note({ content: 'willremovethissoon', date: new Date() })
    await note.save()
    await note.remove()
  
    return note._id.toString()
  }
  
const notesInDb = async () => {
    const notes = await Note.find({})
    return notes.map(note => note.toJSON())
}
*/

module.exports = {
    initialBlogs
}