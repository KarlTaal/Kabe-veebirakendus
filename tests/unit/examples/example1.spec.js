import { shallowMount } from "@vue/test-utils";
import OlenKomponent from "@/components/kabeNupp";

describe("Selectors component tests", () => {

  it("Example test 1",  () => {
    const wrapper = shallowMount(OlenKomponent);
    console.log(wrapper.html());
    expect(1+1).toEqual(2);
  });

});
