// 高级函数
function scopedClassMaker(prefix: string) {
  return function (name?: string) {
    return `${prefix}${name ? "-" + name : ''}`;
  };
}

export {scopedClassMaker}