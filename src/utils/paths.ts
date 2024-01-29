export const paths = {
  home() {
    return "/";
  },
  search(query?: string) {
    if (!query) {
      return "/search";
    }
    return "/search?title=" + query;
  },
  account() {
    return "/account";
  },
  liked() {
    return "/liked";
  },
};
