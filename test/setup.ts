const logSpy = jest.spyOn(global.console, 'log')
const warnSpy = jest.spyOn(global.console, 'warn')

if (!process.env.ENABLE_LOGGING) {
  logSpy.mockImplementation(() => {});
  warnSpy.mockImplementation(() => {});
}

afterEach(() => {
  logSpy.mockClear()
  warnSpy.mockClear()
});
