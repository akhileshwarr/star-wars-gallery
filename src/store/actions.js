import peopleData from '../assets/people.json';

import films1 from '../assets/films1.json';
import films2 from '../assets/films2.json';

export const toggleTheme = checked => ({
    type: 'TOGGLE_THEME',
    checked
  })

  export const fetchPeople = () => ({
    type: 'FETCH_PEOPLE',
    people: peopleData
  })

  export const fetchFilim = personUrl => ({
    type: 'FETCH_FILIM',
    filimDetails: [ films1,films2 ],
    personUrl: personUrl
  })