import { shallowMount } from "@vue/test-utils";
import Sample from "@/components/Sample.vue";
import mockAxios from "axios";

const response = {
  data: {
    userId: 1,
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body:
      "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  }
};

describe("Sample.vue", () => {
  mockAxios.get.mockReturnValue(Promise.resolve(response));
  const wrapper = shallowMount(Sample, {
    mocks: {
      $axios: mockAxios
    }
  });
  it("userId ⇛ 1", () => {
    expect(wrapper.exists()).toBe(true);
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
    expect(mockAxios.get).toBeCalledWith(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.vm.userId).toBe(1);
  });
});
