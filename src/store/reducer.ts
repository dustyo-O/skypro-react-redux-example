import { COUNTER_DECREMENT_ACTION, COUNTER_INCREMENT_ACTION, COUNTER_RESET_ACTION, RootAction } from "./actions";

export function counterReducer(state = { value: 0 }, action: RootAction) {
  console.log('counterReducer');
  console.log(state);
  console.log(action);
  switch (action.type) {
    case COUNTER_INCREMENT_ACTION:
      return { value: state.value + 1 };
    case COUNTER_DECREMENT_ACTION:
      return { value: state.value - 1 };
    case COUNTER_RESET_ACTION:
      return { value: 0 };
    default:
      return state
  }
}
