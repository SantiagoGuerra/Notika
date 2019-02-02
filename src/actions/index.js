import uuid from 'uuid'
let aleatoryColor = (max) => Math.floor(Math.random() * max)
let colors = ['#1abc9c', '#2ecc71', '#3498db', '#9b59b6', '#16a085', '#27ae60', '#2980b9', '#8e44ad', '#f1c40f', '#e67e22', '#e74c3c', '#f39c12', '#d35400', '#c0392b']
let indexColor = -1
export const showFormAction = val => ({
  type: 'SHOW_FORM',
  showForm: val
})

export const showAddCategoryAction = val => ({
  type: 'SHOW_ADD_CATEGORY',
  showAddCategory: val
})

export const createNoteAction = note => ({
  type: 'CREATE_NOTE',
  note
})

export const handleTitleNoteAction = title => ({
  type: 'TITLE',
  id: uuid.v4(),
  title
})

export const handleTextNoteAction = text => ({
  type: 'TEXT',
  text
})

export const handleCategoryAction = (name, color)=> {
  return {
    type: 'CATEGORY',
    name,
    color: color || colors[aleatoryColor(14)],
    id: uuid.v4()
  }
}

export const resetNote = () => ({
  type: 'RESET'
})