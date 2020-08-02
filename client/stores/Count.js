import { observable, action } from "mobx";
import { createContext } from "react";

class Count {
  @observable number = 0;

  @action increase = () => {
    this.number++;
  };

  @action decrease = () => {
    this.number--;
  };
}

const countStore = new Count();
export default createContext(countStore);
