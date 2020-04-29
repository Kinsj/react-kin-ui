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
  return (name: string | ClassToggles, options?: Options) =>
    Object.entries(typeof name === 'string' ? {[name]: name} : name)
      .filter(kv => kv[1] !== false)
      .map(kv => kv[0])
      .map(name => [prefix, name]
        .filter(Boolean)
        .join('-'))
      .concat(options && options.extra || [])
      .join(' ');
}


export default classes;

export {scopedClassMaker};