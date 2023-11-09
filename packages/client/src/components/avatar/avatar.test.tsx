import * as renderer from 'react-test-renderer'
import { Avatar } from '.'

describe('тест для аватара', () => {
  let component: renderer.ReactTestRenderer

  beforeEach(() => {
    component = renderer.create(
      <Avatar
        src="/53ab8463-3462-48ae-a03a-56f6d1f46735/0a496edf-57c0-4e82-82e2-dd49572f2949_котенок с молоком.jpe"
        handleOnChangeField={() => console.log('test')}
      />
    )
  })
  it('create snapshot', () => {
    expect(component.toJSON()).toMatchSnapshot()
  })

  it('should render correct svg icon', () => {
    expect(
      component.root.findByProps({ 'data-testid': 'avatarImg' })
    ).toBeDefined()
  })
})
