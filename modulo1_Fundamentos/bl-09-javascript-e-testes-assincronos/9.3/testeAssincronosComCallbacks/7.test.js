const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};
it('verifique a chamada do callback de uma função uppercase', (done) => {
  uppercase('diego', (string) => {
    try {
      expect(string).toEqual('DIEGO');
      done();
    } catch (error) {
      done(error);
    }
  });
});
