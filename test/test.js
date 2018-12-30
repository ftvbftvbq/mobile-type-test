const testMobile = require('../lib/index.min');
test('测试机型默认为空', () => {
    expect(testMobile()).toBe('');
})