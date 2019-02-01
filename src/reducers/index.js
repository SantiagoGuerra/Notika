import {combineReducers} from 'redux'

const initialState = {
  notes: [
    {
      id: '12w4',
      title: 'Example',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean volutpat aliquet mauris a sollicitudin. Curabitur quis mauris dignissim, egestas arcu eu, maximus ante. Pellentesque vitae suscipit quam. Donec turpis diam, fringilla vitae enim sit amet, commodo ornare enim. Suspendisse ut tempor tellus. Vestibulum congue eros in ligula ornare tempor. Nulla fermentum quam nec sodales sodales. In neque sem, imperdiet sed arcu ut, gravida fermentum mauris. Maecenas pellentesque sem sed diam pharetra, non rhoncus odio sagittis. Aenean vitae euismod nisi. Phasellus vitae justo vel ni',
      category: {
        name: 'Example',
        color: 'red',
        id: '1223'
      }
    },
    {
      id: '1rt4',
      title: 'Example',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean volutpat aliquet mauris a sollicitudin. Curabitur quis mauris dignissim, egestas arcu eu, maximus ante. Pellentesque vitae suscipit quam. Donec turpis diam, fringilla vitae enim sit amet, commodo ornare enim. Suspendisse ut tempor tellus. Vestibulum congue eros in ligula ornare tempor. Nulla fermentum quam nec sodales sodales. In neque sem, imperdiet sed arcu ut, gravida fermentum mauris. Maecenas pellentesque sem sed diam pharetra, non rhoncus odio sagittis. Aenean vitae euismod nisi. Phasellus vitae justo vel ni',
      category: {
        name: 'Example',
        color: 'red',
        id: '1l23'
      }
    },
    {
      id: '12s4',
      title: 'Example',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean volutpat aliquet mauris a sollicitudin. Curabitur quis mauris dignissim, egestas arcu eu, maximus ante. Pellentesque vitae suscipit quam. Donec turpis diam, fringilla vitae enim sit amet, commodo ornare enim. Suspendisse ut tempor tellus. Vestibulum congue eros in ligula ornare tempor. Nulla fermentum quam nec sodales sodales. In neque sem, imperdiet sed arcu ut, gravida fermentum mauris. Maecenas pellentesque sem sed diam pharetra, non rhoncus odio sagittis. Aenean vitae euismod nisi. Phasellus vitae justo vel ni',
      category: {
        name: 'Example',
        color: 'red',
        id: '12sf'
      }
    },
    {
      id: '1124',
      title: 'Example',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean volutpat aliquet mauris a sollicitudin. Curabitur quis mauris dignissim, egestas arcu eu, maximus ante. Pellentesque vitae suscipit quam. Donec turpis diam, fringilla vitae enim sit amet, commodo ornare enim. Suspendisse ut tempor tellus. Vestibulum congue eros in ligula ornare tempor. Nulla fermentum quam nec sodales sodales. In neque sem, imperdiet sed arcu ut, gravida fermentum mauris. Maecenas pellentesque sem sed diam pharetra, non rhoncus odio sagittis. Aenean vitae euismod nisi. Phasellus vitae justo vel ni',
      category: {
        name: 'Example',
        color: 'red',
        id: '1234'
      }
    }
  ],
  ui: {
    formIsOpen: false,
    categoryButtonIsOpen: false
  },
  user: {
    name: 'Alan Doe',
    picURL: 'https://www.rmanj.com/wp-content/uploads/2016/08/avatar-img-03.jpg'
  }
}

const notes = (state = initialState.notes, action ) => {
  switch(action.type) {
    case 'SOME_ACTION':
      return []
    default :
      return state 
  }
}

const ui = (state = initialState.ui, action) => {
  switch (action.type) {
    case 'SOME':
    default:
      return state
  }
}

const user = (state = initialState.user, action) => {
  switch(action.type) {
    case 'SOME':
      return {}
    default :
      return state
  }
}

const app = combineReducers({
  notes,
  ui,
  user
})

export default app