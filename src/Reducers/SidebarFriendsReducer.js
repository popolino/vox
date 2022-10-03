import store from "../state";

const SHOW_ACTION = "SHOW_ACTION";
console.log(document.querySelector(".comment"));

export const SidebarFriendsReducer = (state = store.friendsData, action) => {
  switch (action.type) {
    case "SHOW_MESSAGE":
      return {
        ...state,
      };
    default:
      return state;
  }
};
