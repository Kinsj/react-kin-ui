import React, {useEffect, useRef} from 'react';

const useDidUpdate = (fn: React.EffectCallback, deps: React.DependencyList) => {

  const isDidUpdate = useRef(false);

  useEffect(() => {
    if (isDidUpdate.current) {
      fn && fn();
    } else {
      isDidUpdate.current = true;
    }
  }, deps);
};

export default useDidUpdate;