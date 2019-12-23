import React from 'react'
import { shallow } from 'enzyme'
import Button from './Button'

describe('Test button component', () => {
  it('should be defined', () => {
    expect(Button).toBeDefined()
  })

  it('should fire event', () => {
    const mockCallBack = jest.fn()

    const button = shallow((<Button onClick={mockCallBack}>click me</Button>))
    button.find('button').simulate('click')
    expect(mockCallBack.mock.calls.length).toEqual(1)
  })

  it('should render correctly', () => {
    const tree = shallow(
      <Button text='button text' className="btn" />
    )
    expect(tree).toMatchSnapshot()
  })
})