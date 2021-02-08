import "./index.scss";
import store, { increment, decrement, reset } from "./store";

const resultEl = document.querySelector(".counter__result");
const incrementBtn = document.querySelector("[data-action='increment']");
const resetBtn = document.querySelector("[data-action='reset']");
const decrementBtn = document.querySelector("[data-action='decrement']");

const incrementHandler = () => {
  store.dispatch(increment());
};

const decrementHandler = () => {
  store.dispatch(decrement());
};

const resetHandler = () => {
  store.dispatch(reset());
};

incrementBtn.addEventListener("click", incrementHandler);
decrementBtn.addEventListener("click", decrementHandler);
resetBtn.addEventListener("click", resetHandler);

store.subscribe(() => {
  const state = store.getState();
  const currentValue = state.history.reduce((acc, value) => acc + +value, 0);
  const historyString = state.history.join(" ");

  resultEl.textContent =
    state.history.length === 0 ? "" : `${historyString} = ${currentValue}`;
});
