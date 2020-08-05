import React from 'react';

interface Props {
  [K: string]: any
}

export default (Component: React.ComponentType<any>, props: Props) => {
  return <Component {...props} />
};