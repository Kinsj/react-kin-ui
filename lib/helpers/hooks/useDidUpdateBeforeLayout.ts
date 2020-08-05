import React, {useLayoutEffect, useRef} from 'react';

const useDidUpdateBeforeLayout = (fn: React.EffectCallback, deps: React.DependencyList) => {

  const isDidUpdate = useRef(false);

  useLayoutEffect(() => {
    if (isDidUpdate.current) {
      return fn && fn();
    } else {
      isDidUpdate.current = true;
    }
  }, deps);
};

export default useDidUpdateBeforeLayout;