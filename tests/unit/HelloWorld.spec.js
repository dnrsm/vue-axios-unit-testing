import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";
import mockAxios from "axios";

const response = {
  data: [
    {
      id: 1,
      name: "Leanne Graham"
    },
    {
      id: 2,
      name: "Ervin Howell"
    },
    {
      id: 3,
      name: "Clementine Bauch"
    }
  ]
};

describe("HelloWorld.vue", () => {
  mockAxios.get.mockReturnValue(Promise.resolve(response));
  const wrapper = shallowMount(HelloWorld, {
    mocks: {
      $axios: mockAxios
    }
  });
  it("正常にレンダリングされる", () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.exists()).toBe(true);
  });
  it("一度だけ呼ばれる", () => {
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
  });
  it("usersのエンドポイントが引数として与えられる", () => {
    expect(mockAxios.get).toBeCalledWith(
      "https://jsonplaceholder.typicode.com/users"
    );
  });
  it("usersの一番目のname ⇛ Leanne Graham", () => {
    expect(wrapper.vm.users[0].name).toMatch("Leanne Graham");
  });
});
