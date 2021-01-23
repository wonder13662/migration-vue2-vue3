import axios from 'axios';
import event from './modules/event';
import user from './modules/user';
// TODO 환경변수를 외부에서 받아서 사용하는 형태로 바꾸기

const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

const createWrapper = (module) => {
  const wrapper = {};
  Object.keys(module).forEach((name) => {
    if (!!module[name] && typeof module[name] === 'function') {
      const func = module[name];
      /* eslint-disable func-names */
      const wrapperFunc = function (...theArgs) {
        return func(apiClient, ...theArgs);
      };
      wrapper[name] = wrapperFunc;
    }
  });

  return wrapper;
};

const eventWrapper = createWrapper(event);
const userWrapper = createWrapper(user);

export default {
  event: {
    ...eventWrapper,
  },
  user: {
    ...userWrapper,
  },
};
