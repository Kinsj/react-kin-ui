import React, {useEffect} from 'react';

function useDidMount(callback: React.EffectCallback) {
  useEffect(callback, []);
}

export default useDidMount