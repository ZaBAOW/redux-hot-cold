import React from 'react';
import { shallow } from 'enzyme';

import statusSection from './status-section';

describe('<statusSection />', () => {
    it('Renders without crashing', () => {
        shallow(<statusSection />);
    });
});