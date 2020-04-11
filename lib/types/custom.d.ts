declare module '*.svg' {
  const content: any;
  export default content;  // 给所有svg加了一个默认导出，在外部import xxx from xxx.svg的时候有用
}