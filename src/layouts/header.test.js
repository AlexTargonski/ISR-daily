import React       from 'react';
import { expect }  from 'chai';
import { shallow } from 'enzyme';
import Enzyme      from 'enzyme';
import Adapter     from 'enzyme-adapter-react-16';

import Header      from './header';

Enzyme.configure({ adapter: new Adapter() });

describe('<Header />', () => {
  it('renders <Header /> component', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('LogoBrand'))
  });
});
