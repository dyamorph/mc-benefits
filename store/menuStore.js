import { makeAutoObservable } from "mobx";

class MenuStore {
  activeCategory = "Все скидки";
  activeCategoryIndex = undefined;

  constructor() {
    makeAutoObservable(this);
  }

  setActiveCategory(category, index) {
    this.activeCategory = category;
    this.activeCategoryIndex = index;
  }
}

const menuStore = new MenuStore();
export default menuStore;
