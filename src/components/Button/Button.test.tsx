import React from 'react'
import { shallow, configure } from 'enzyme'
import Button from './Button'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

describe('Test Button component', () => {
  it('should be defined', () => {
    expect(Button).toBeDefined()
  })

  it('click event is fired', () => {
    const mockCallBack = jest.fn()

    const button = shallow((<Button onClick={mockCallBack}>Ok!</Button>))
    button.find('button').simulate('click')
    expect(mockCallBack.mock.calls.length).toEqual(1)
  })

  it('should render correctly', () => {
    const tree = shallow(
      <Button text='button text' className="btn" />
    );
    expect(tree).toMatchSnapshot();
  })
})