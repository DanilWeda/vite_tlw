export function setupCounter(htmlElement) {
  const state = {
    counter: 0,
  };

  const INITIAL_VALUE = 0;

  const setCounter = (count) => {
    state.counter = count;
    htmlElement.innerHTML = `count is ${state.counter}`;
  };

  const handleChangeCount = () => setCounter(state.counter + 1);

  htmlElement.addEventListener("click", handleChangeCount);

  setCounter(INITIAL_VALUE);
}
