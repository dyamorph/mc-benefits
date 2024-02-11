import { makeAutoObservable } from "mobx";

class FavoritesStore {
  favorites = [];

  constructor() {
    makeAutoObservable(this);
  }

  toggleFavorite = (benefit) => {
    const index = this.favorites.findIndex((item) => item.title === benefit.title);
    if (index !== -1) {
      this.favorites.splice(index, 1);
    } else {
      this.favorites.push(benefit);
    }
  };

  removeFromFavorites = (benefit) => {
    const index = this.favorites.findIndex((item) => item.title === benefit.title);
    if (index !== -1) {
      this.favorites.splice(index, 1);
    }
  };

  isFavorite = (benefit) => {
    return this.favorites.some((item) => item.title === benefit.title);
  };
}

export default new FavoritesStore();
