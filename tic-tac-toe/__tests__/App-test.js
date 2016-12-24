// used this stack overflow to create my own test
// http://stackoverflow.com/questions/25533036/test-a-react-component-function-with-jest?rq=1
// used this as an example too: https://github.com/facebook/jest/blob/master/examples/async/__tests__/user-test.js
// did not manage to get it fully working
// latest error: Cannot find module 'react/addons' from 'App-test.js'
// looking at this resource: https://facebook.github.io/react/docs/addons.html


jest.dontMock('../src/App');
// any other modules '../src/App' uses that shouldn't
// be mocked should also be passed to `jest.dontMock`

var React, IndicatorComponent, Indicator, TestUtils;

describe('App', function() {
  beforeEach(function() {
    React = require('react/addons');
    TestUtils = React.addons.TestUtils;
    // Notice this is the Indicator *class*...
    AppComponent = require('../src/App.js');
    // ...and this is an Indicator *instance* (rendered into the DOM).
    App = TestUtils.renderIntoDocument(<AppComponent />);
    // Jest will mock the functions on this module automatically for us.
    // might need this?
    // TriggerAnAction = require('../action');
  });

  it('Resets the gameboard', function() {
    // dont need this part?
    // Replace the `refresh` method on our component instance
    // with a mock that we can use to make sure it was called.
    // The mock function will not actually do anything by default.

    // Indicator.refresh = jest.genMockFunction();

    // Manually call the real `tie`, which is supposed to set some
    // state by clearning it.
    App.reset();
    expect(App.state.gameBoard).toBe([
        ' ', ' ', ' ',
        ' ', ' ', ' ',
        ' ', ' ', ' '
      ]);

  });
});

