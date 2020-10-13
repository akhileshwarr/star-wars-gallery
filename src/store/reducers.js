import { combineReducers } from 'redux'

const themeState = (state = false, action) => {
    switch (action.type) {
      case 'TOGGLE_THEME':
        return action.checked
      default:
        return state
    }
  }

  const updateFilimDetals = (state,action) => {
    return  state.results.map((person)=>{
      if(person.url === action.personUrl){
        return {...person, filimDetails: action.filimDetails}
      }
        return person
    })
    
  }
  
  const peopleState = (state = { "next": null,
results:[] },action) => {
    switch (action.type) {
      case 'FETCH_PEOPLE':
        return { 
          next : action.people.next,
        results : action.people.results
        }
      case 'FETCH_FILIM':
        return {
          ...state,
          results : updateFilimDetals(state,action)
        }   
      default:
        return state
    }
  }

  export default combineReducers({ themeState, peopleState })