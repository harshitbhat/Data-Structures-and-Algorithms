function updateView() {
  document.querySelector('#counter').innerText = state.counter;
}
// subscribe
const listener = [];

function subscribe(callback) {
  listener.push(callback);
}

// reducer
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

// dispatch

let state = {
  counter: 0,
};

function dispatch(action) {
  const newState = reducer(state, action);
  if (newState !== state) {
    state = newState;
    listener.forEach((listener) => listener());
  }
}

document
  .querySelector('#increment')
  .addEventListener('click', () => dispatch('INCREMENT'));
document
  .querySelector('#decrement')
  .addEventListener('click', () => dispatch('DECREMENT'));

// update
updateView();
subscribe(updateView);
