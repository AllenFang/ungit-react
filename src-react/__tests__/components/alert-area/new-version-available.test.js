jest.dontMock('components/alert-area/new-version-available');
import sinon from 'sinon';
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import NewVersionAvailable from 'components/alert-area/new-version-available';

describe('alert-area/new-version-available component', () => {
  let wrapper;
  let platform = 'windows';
  const latestVersion = '1.3';
  const onDismiss = sinon.spy();
  
  beforeEach(() => {
    wrapper = mount(
      <NewVersionAvailable 
        latestVersion={ latestVersion }
        platform={ platform }
        onDismiss={ onDismiss } />
    );
  });

  it("should render successfully", function() {
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('.alert.alert-info').length).toBe(1);
    expect(wrapper.contains(<span>{ latestVersion }</span>)).toBe(true);
    expect(wrapper.contains(<a href="https://github.com/FredrikNoren/ungit">available</a>)).toBe(true);
    expect(wrapper.contains(<a href="https://github.com/FredrikNoren/ungit/blob/master/CHANGELOG.md">changelog</a>)).toBe(true);
    expect(wrapper.contains(<code>{ ' npm update -g ungit' }</code>)).toBe(true);
    expect(wrapper.find('button').length).toBe(1);
  });

  it('should trigger click events when clicking dismiss button', () => {
    wrapper.find('button').simulate('click');
    expect(onDismiss.callCount).toBe(1);
  });

  describe('when platform is not existing', () => {
    beforeEach(() => {
      platform = null;
      wrapper = mount(
        <NewVersionAvailable 
          latestVersion={ latestVersion }
          platform={ platform }
          onDismiss={ onDismiss } />
      );
    });

    it('should render installation indication with sudo -H ', () => {
      expect(wrapper.contains(<code>{ 'sudo -H npm update -g ungit' }</code>)).toBe(true);
    });
  });
});