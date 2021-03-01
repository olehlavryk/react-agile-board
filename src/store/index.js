import { types } from "mobx-state-tree";
import UsersStore from "src/store/users";
import BoardStore from "src/store/board";

const RootStore = types.model("RootStore", {
  users: types.optional(UsersStore, {}),
  boards: types.optional(BoardStore, {}),
});

export default RootStore;
