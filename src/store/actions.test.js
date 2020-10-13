import {toggleTheme, fetchPeople, fetchFilim} from './actions'
import peopleData from '../assets/people.json';

import films1 from '../assets/films1.json';
import films2 from '../assets/films2.json';

test('toggleTheme should return expected action', () => {

    expect(toggleTheme(true)).toEqual({
        type: 'TOGGLE_THEME',
        checked:true
      });
  });

  test('fetchPeople should return expected action', () => {

    expect(fetchPeople()).toEqual({
        type: 'FETCH_PEOPLE',
        people:peopleData
      });
  });

  test('fetchFilim should return expected action', () => {

    expect(fetchFilim("personUrl")).toEqual({
        type: 'FETCH_FILIM',
        filimDetails:[films1,films2],
        personUrl:"personUrl"
      });
  });