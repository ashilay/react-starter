module.exports = {
  'Demo test' : function (browser) {
    browser
      .url('http://localhost:8080')
      .waitForElementVisible('body', 1000)
      .assert.containsText('#root h1', 'Hello')
      .assert.containsText('#root h1', 'John Doe')
      .end();
  }
};
