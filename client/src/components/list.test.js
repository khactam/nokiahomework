import { render, screen } from '@testing-library/react';
import { ReactDOM } from 'react';
import { shallow, mount } from 'enzyme'
import ListData from './list'

describe('ListData should display correctly', () => {
    it('renders ListData without crashing', () => {
        shallow(<ListData/>);
    });
    it('has table with operation column', async () => {
        const listData = await mount(<ListData/>);
        expect(listData.find('div').first().text()).toContain('Operation');
    });
})

