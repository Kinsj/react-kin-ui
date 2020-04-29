function classes(...names: (string | undefined)[]) {
  return names.filter(Boolean).join(' ');
}


interface Options {
  extra: string | undefined
}

interface ClassToggles {
  [K: string]: boolean // 表示 {‘string类型的任意值’ : boolean}
}

function scopedClassMaker(prefix: string) {
  return function (name?: string | ClassToggles, options?: Options) {

    let result;

    if(typeof name === 'string' || name === undefined) {
      result = [prefix, name].filter(Boolean).join('-')
    } else {
      result = Object.entries(name).filter(kv => kv[1]).map(kv => kv[0]).map(n => {
        return [prefix, n].filter(Boolean).join('-')
      })
    }

    if (options && options.extra) {
      return [result, options && options.extra].filter(Boolean).join(' ');
    } else {
      return result;
    }
  };
}


export default classes;

export {scopedClassMaker};