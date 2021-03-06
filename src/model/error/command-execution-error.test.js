import CommandExecutionError from './command-execution-error';

describe('CommandExecutionError', () => {
  it('instantiates', () => {
    expect(() => new CommandExecutionError()).not.toThrow();
  });

  test.each([1, 'one', { name: '!' }])('Displays title %s', (message) => {
    const error = new CommandExecutionError(message);

    expect(error.name).toStrictEqual('CommandExecutionError');
    expect(error.message).toStrictEqual(message.toString());
  });
});
