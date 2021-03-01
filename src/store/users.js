import { types, flow } from "mobx-state-tree";
import CallApi from "src/api";

export const User = types.model("User", {
  id: types.identifier,
  createdAt: types.string,
  name: types.string,
  avatar: types.string,
});

const ActiveUser = User.named("ActiveUser");

const UsersStore = types
  .model("UsersStore", {
    users: types.maybe(types.array(User)),
    me: types.maybe(ActiveUser),
  })
  .actions((self) => {
    return {
      load: flow(function* () {
        self.users = yield CallApi.get("users");
        self.me = yield CallApi.get("me");
      }),
      afterCreate() {
        self.load();
      },
    };
  });

export default UsersStore;
