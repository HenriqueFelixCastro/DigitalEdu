export const BLOG_POSTS = [
  {
    id: "1",
    title: "Blog Post Example 1",
    authors: [
      { name: "Author 1", title: "Author 1 Title" },
      { name: "Author 2", title: "Author 2 Title" },
    ],
    tags: [
      { text: "Hard Skills", color: "green" },
      { text: "Trend", color: "cyan" },
    ],
    date: "07 Jul 2021",
    duration: "50 minutes",
    imageURL: `${process.env.PUBLIC_URL}/img/highlited_card.jpg`,
    isJobMarketHighlight: true,
    paragraphsBeforeHighlight: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat2.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat3.",
    ],
    highlight:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaH.",
    paragraphsAfterHighlight: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat4.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat5.",
    ],
  },

  {
    id: "2",
    title: "Blog Post Example 2",
    authors: [{ name: "Author 1", title: "Author 1 Title" }],
    tags: [{ text: "Career Skills", color: "purple" }],
    date: "05 Jul 2021",
    duration: "12 minutes",
    imageURL: `${process.env.PUBLIC_URL}/img/highlited_card.jpg`,
    isJobMarketHighlight: false,
    paragraphsBeforeHighlight: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat2.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat3.",
    ],
    highlight:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaH.",
    paragraphsAfterHighlight: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat4.",
    ],
  },

  {
    id: "3",
    title: "Blog Post Example 3",
    authors: [
      { name: "Author 1", title: "Author 1 Title" },
      { name: "Author 2", title: "Author 2 Title" },
      { name: "Author 3", title: "Author 3 Title" },
    ],
    tags: [{ text: "Soft Skills", color: "gray" }],
    date: "04 Jul 2021",
    duration: "42 minutes",
    imageURL: `${process.env.PUBLIC_URL}/img/highlited_card.jpg`,
    isJobMarketHighlight: false,
    paragraphsBeforeHighlight: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    ],
    highlight:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaH.",
    paragraphsAfterHighlight: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat2.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat3.",
    ],
  },
];
