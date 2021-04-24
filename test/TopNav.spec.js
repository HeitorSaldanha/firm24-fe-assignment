import { mount } from '@vue/test-utils'
import TopNav from '@/components/TopNav'

describe('TopNav', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(TopNav)
    expect(wrapper.vm).toBeTruthy()
  })
})
