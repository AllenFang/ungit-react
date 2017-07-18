jest.dontMock('components/alert-area/git-version-error');
import sinon from 'sinon';
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import GitVersionError from 'components/alert-area/git-version-error';

describe('alert-area/git-version-error component', () => {
  let wrapper;
  const gitVersionError = 'test';
  const onDismiss = sinon.spy();
  
  beforeEach(() => {
    wrapper = mount(<GitVersionError gitVersionError={ gitVersionError } onDismiss={ onDismiss } />);
  });

  it("should render successfully", function() {
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('.alert.alert-danger').length).toBe(1);
    expect(wrapper.contains(<span>{ gitVersionError }</span>)).toBe(true);
    expect(wrapper.find('button').length).toBe(1);
  });

  it('should trigger click events when clicking dismiss button', () => {
    wrapper.find('button').simulate('click');
    expect(onDismiss.callCount).toBe(1);
  });
});