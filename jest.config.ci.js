// https://jestjs.io/docs/en/configuration.html
const base = require('./jest.config');
module.exports = Object.assign({}, base, {
  reporters: ['jest-junit'],  // 配置分析报表
  // 覆盖率相关配置
  collectCoverage: true,  // 是否生成测试报表
  collectCoverageFrom: ['lib/**/*.{ts,tsx}', '!**/node_modules/**'],
  coverageDirectory: 'coverage',  // 生成的报告存放路径
  coverageReporters: ['text', 'lcov'],  // 生成报告的种类： text: 控制台输出， lcov: 业内知名分析报告
});