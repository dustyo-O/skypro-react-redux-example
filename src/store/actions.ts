export const COUNTER_INCREMENT_ACTION = 'COUNTER@INCREMENT' as const;
export const COUNTER_DECREMENT_ACTION = 'COUNTER@DECREMENT' as const;
export const COUNTER_RESET_ACTION = 'COUNTER@RESET' as const;

export function counterIncrement() {
  return { type: COUNTER_INCREMENT_ACTION };
}

export function counterDecrement() {
  return { type: COUNTER_DECREMENT_ACTION };
}

export function counterReset() {
  return { type: COUNTER_RESET_ACTION };
}

type CounterIncrementActionType = ReturnType<typeof counterIncrement>;
type CounterDecrementActionType = ReturnType<typeof counterDecrement>;
type CounterResetActionType = ReturnType<typeof counterReset>;

export type RootAction =
  | CounterIncrementActionType
  | CounterDecrementActionType
  | CounterResetActionType
  ;
