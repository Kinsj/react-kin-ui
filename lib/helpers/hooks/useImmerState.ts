import {useState, useCallback} from 'react';

import produce, {Draft} from 'immer';

export type setState<S> = (f: (draft: Draft<S>) => void | S) => void;

export function useImmerState<S = any>(initialValue: S): [S, setState<S>];

export function useImmerState(initialValue: any) {
  const [val, updateValue] = useState(initialValue);
  return [
    val,
    useCallback(updater => {
      updateValue(produce(updater));
    }, []),
  ];
}

export default useImmerState;