import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

const POST_TITLES = [
  "Back Pain",
  "Neck Pain",
  "Shoulder Pain",
  "Knee",
  "Foot ",
  "Ankle",
  "hand",
  "Hip",
  "Full Body"];

export const posts = [...Array(23)].map((_, index) => ({
  id: faker.string.uuid(),
  cover: `/assets/images/covers/cover_${index + 1}.jpg`,
  title: POST_TITLES[index + 1],
  createdAt: "",
  view: "",
  comment: "",
  share: "",
  favorite: "",
  author: {
    name: "",
    avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
  },
}));
