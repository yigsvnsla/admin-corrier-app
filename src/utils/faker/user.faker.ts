import { IUser } from '@/interfaces/user.interface';
import { faker } from '@faker-js/faker';

export function createRandomUsers(count = 30): IUser[] {
  const list: IUser[] = [];
  for (let index = 0; index < count; index++) {
    list.push(createRandomUser());
  }
  return list;
}

export function createRandomUser(): IUser {
  const sex = faker.person.sexType();
  const firstName = faker.person.firstName(sex);
  const lastName = faker.person.lastName();
  const email = faker.internet.email();
  return {
    _id: faker.string.uuid(),
    avatar: faker.image.avatar(),
    birthday: faker.date.birthdate(),
    email,
    firstName,
    lastName,
    sex,
    subscriptionTier: faker.helpers.arrayElement(['free', 'basic', 'business']),
  };
}

export function fakeAsyncGetUsers(): Promise<IUser[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(createRandomUsers()), 5000);
  });
}
