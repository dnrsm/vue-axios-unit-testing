import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";
import mockAxios from "axios";

jest.mock("axios");

describe("HelloWorld.vue", () => {
  it("正常にレンダリングされる", async () => {
    mockAxios.get.mockReturnValueOnce(Promise.resolve({ data: {} }));
    const wrapper = shallowMount(HelloWorld, {
      mocks: {
        $axios: mockAxios
      }
    });
    expect(wrapper.exists()).toBe(true);
  });
});
