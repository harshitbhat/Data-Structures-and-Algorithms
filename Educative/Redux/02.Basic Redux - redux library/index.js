function reducer(state, action) {
  switch (action) {
    case 'INCREMENT':
      return { ...state, counter: state.counter + 1 };
    case 'DECREMENT':
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
}

const initialState = {
  counter: 3,
};

const store = Redux.createStore(reducer, initialState);

function updateView() {
  document.querySelector('#counter').innerText = initialState.counter;
}

store.subscribe(updateView);
updateView();

document
  .querySelector('#increment')
  .addEventListener('click', () => store.dispatch({ type: 'INCREMENT' }));
document
  .querySelector('#decrement')
  .addEventListener('click', () => store.dispatch({ type: 'DECREMENT' }));
