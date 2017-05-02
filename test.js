import Vue from 'vue';
import VueLadda from './src/vue-ladda.vue';

describe('VueLadda', () => {
  const Ctor = Vue.extend(VueLadda);

  it('require given "loading" prop', () => {
    spyOn(console, 'error').andCallFake((msg) => {
      expect(msg.startsWith('[Vue warn]: Missing required prop: "loading"')).toBeTruthy();
    })
    const vm = new Ctor().$mount();
  })

  it('sets the correct default data', () => {
    const vm = new Ctor().$mount();
    expect(vm.dataStyle).toBe('expand-left');
    expect(vm.progress).toBe(0);
  });
});
