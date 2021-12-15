import { render, screen } from '@testing-library/react';
import { ReactDOM } from 'react';
import renderer from 'react-test-renderer';
import { cellRenderer } from './list'
import { shallow, mount } from 'enzyme'
import ListData from './list'

describe('ListData should display correctly', () => {
    let wrapper, listData, agGridReact;
    beforeAll(() => {
        wrapper = shallow(<ListData />);
        listData = mount(<ListData />);
        agGridReact = listData.find('AgGridReact').instance();
    });


    it('renders ListData without crashing', () => {
        expect(wrapper.exists()).toBe(true);
    });
    it('has table with operation column', async () => {
        expect(listData.find('div').first().text()).toContain('Operation');
    });
    it('checking function componentDidMount is called and callBackendAPI ok', () => {
        const instance = listData.instance();
        const spy = jest.spyOn(instance, 'callBackendAPI');
        instance.componentDidMount();
        expect(spy).toHaveBeenCalled();
    })
    it('renders some operations', async () => {

    })
    test('statusCellRenderer function ok', () => {
        wrapper.instance().statusCellRenderer = jest.fn();
        wrapper.update();
        expect(wrapper.instance().statusCellRenderer).toMatchSnapshot();
    });
    test('statusCellRenderer renders correct status Finished in cell', () => {
        const fakeData = {
            data: {
                status: 1
            }
        }
        const testwrapper = shallow(<ListData />)
        const test = testwrapper.instance().cellRenderer(fakeData);
        expect(test.includes('Finished')).toBe(true);
        expect(test.includes('./assets/finished.svg')).toBe(true);
    })
    test('statusCellRenderer renders correct status Failed in cell', () => {
        const fakeData = {
            data: {
                status: 2
            }
        }
        const testwrapper = shallow(<ListData />)
        const test = testwrapper.instance().cellRenderer(fakeData);
        expect(test.includes('Failed')).toBe(true);
        expect(test.includes('./assets/failed.svg')).toBe(true);
    })
    test('statusCellRenderer renders correct status Interrupted in cell', () => {
        const fakeData = {
            data: {
                status: 3
            }
        }
        const testwrapper = shallow(<ListData />)
        const test = testwrapper.instance().cellRenderer(fakeData);
        expect(test.includes('Interrupted')).toBe(true);
        expect(test.includes('./assets/interrupted.svg')).toBe(true);
    })
    test('statusCellRenderer renders nothing', () => {
        const fakeData = {
            data: {
            }
        }
        const testwrapper = shallow(<ListData />)
        const test = testwrapper.instance().cellRenderer(fakeData);
        expect(test).toEqual('');
    })
})