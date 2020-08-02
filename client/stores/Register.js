import { observable, action } from 'mobx';
import { createContext } from 'react';

class Register {
  @observable name = '';
  @observable email = '';
  @observable password = '';
  @observable passwordCheck = '';

  @action onChangeHandler = (e) => {
    this[e.target.name] = e.target.value;
  };
}

const registerStore = new Register();
export default createContext(registerStore);
