import { makeObservable, observable, action } from "mobx";
import { foodImages } from "../assets/images/food";
import { healthImages } from "../assets/images/health";
import { studyImages } from "../assets/images/study-and-hobby";
import { beautyImages } from "../assets/images/beauty";
import { sportImages } from "../assets/images/sport";
import { newBenefitsImages } from "../assets/images/new-benefits";

class ImageStore {
  categoryImages = [
    { title: "Новинки", images: newBenefitsImages },
    { title: "Еда и напитки", images: foodImages },
    { title: "Здоровье", images: healthImages },
    { title: "Обучение и хобби", images: studyImages },
    { title: "Красота", images: beautyImages },
    { title: "Спорт", images: sportImages },
  ];

  constructor() {
    makeObservable(this, {
      categoryImages: observable,
      getCategoryImagesByTitle: action,
    });
  }

  getCategoryImagesByTitle = (categoryTitle) => {
    const category = this.categoryImages.find((item) => item.title === categoryTitle);
    return category ? category.images : [];
  };
}

const imageStore = new ImageStore();
export default imageStore;
