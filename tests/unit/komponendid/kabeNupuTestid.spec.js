import {shallowMount} from "@vue/test-utils";
import OlenKomponent from "@/components/OlenKomponent";

describe("Selectors component tests", () => {

  it("Test default style", () => {
    const wrapper = shallowMount(OlenKomponent);
    expect(wrapper.findAll('div').at(0).classes()).toContain('must');
    expect(wrapper.findAll('div').at(0).classes()).toContain('nupp');
  });

  it("Test black style", async () => {
    const wrapper = shallowMount(OlenKomponent);
    await wrapper.setProps({player: 'must'});
    expect(wrapper.findAll('div').at(0).classes()).toContain('must');
    expect(wrapper.findAll('div').at(0).classes()).toContain('nupp');
  });

  it("Test white style", async () => {
    const wrapper = shallowMount(OlenKomponent);
    await wrapper.setProps({player: 'valge'});
    expect(wrapper.findAll('div').at(0).classes()).toContain('valge');
    expect(wrapper.findAll('div').at(0).classes()).toContain('nupp');
  });
});
