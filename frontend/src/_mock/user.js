import { sample } from 'lodash';
import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

export const users = [...Array(24)].map((_, index) => ({
  id: faker.string.uuid(),
  avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
  name: faker.person.fullName(),
  company: faker.address.streetAddress(),
  isVerified: faker.datatype.boolean(),
  status: sample(['active']),
  role: sample([
    'Back pain',
    'Neck pain',
    'Chest',
    'leg',
    'arm broken',
    'knee',
    'back',
    'leg',
    'knee',
    'knee',
  ]),
}));
