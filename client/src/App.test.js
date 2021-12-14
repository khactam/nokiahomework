import { render, screen } from '@testing-library/react';
import { ReactDOM } from 'react';
import { shallow, mount } from 'enzyme'
import App from './App';
import ListData from './components/list';

jest.useRealTimers();
describe('App is rendered without issue', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });
  it('renders basic element', () => {
    render(<App />);
    const textConnectedToExpress = screen.getByText('Test here');
    expect(textConnectedToExpress).toBeInTheDocument();
  });
  test('component mount correctly and fetch data from express ok', async () => {
    const wrapper = await mount(<App />);
    await wrapper.instance().componentDidMount();
    wrapper.findWhere(
      n => n.type() === 'span' && n.contains('Test connect with react success')
    )
  })
})



describe('ListData should contain at least one child operation', () => {
  it('App should contain at least one child operation', async() => {
    const listData = await mount(<ListData/>);
    listData.findWhere(
      n => n.type() === 'div' && n.contains('CHILD-OPERATION')
    )
  })
})