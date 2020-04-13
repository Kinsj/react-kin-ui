// https://jestjs.io/docs/en/configuration.html

module.exports = {
  verbose: true,
  clearMocks: false,
  reporters: ["default", "jest-junit"],  // 配置分析报表

  // 覆盖率相关配置
  collectCoverage: true,  // 是否生成测试报表
  collectCoverageFrom: ["lib/**/*.{ts,tsx}", "!**/node_modules/**"],
  coverageDirectory: "coverage",  // 生成的报告存放路径
  coverageReporters: ['text', 'lcov'],  // 生成报告的种类： text: 控制台输出， lcov: 业内知名分析报告


  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  moduleNameMapper: {  // 将以下对应后缀的文件默认导出为指定格式（__mocks__目录下的js指定）
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootdir>/test/__mocks__/file-mock.js",
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
  },
  testMatch: ['<rootDir>/**/__tests__/**/*.{js,jsx,ts,tsx}'],
  transform: {
    "^.+unit\\.(js|jsx)$": "babel-jest",
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  setupFilesAfterEnv: ["<rootDir>test/setupTests.js"]
};