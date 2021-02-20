import { shallowMount } from "@vue/test-utils";
import KabeNupp from "@/components/KabeNupp";

describe("Selectors component tests", () => {

  it("Example test 1",  () => {
    const wrapper = shallowMount(KabeNupp);
    console.log(wrapper.html());
    expect(1+1).toEqual(2);
  });

});
