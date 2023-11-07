import GameEngaine from './GameEngaine'
import * as renderer from 'react-test-renderer'
import 'jest-canvas-mock'

describe('тест для движка', () => {
  let component: renderer.ReactTestRenderer

  beforeEach(() => {
    component = renderer.create(
      <GameEngaine handleGameOver={() => console.log('test')} />
    )
  })
  it('create snapshot', () => {
    expect(component.toJSON()).toMatchSnapshot()
  })
})
