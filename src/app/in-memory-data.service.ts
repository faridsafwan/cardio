import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const cardios = [
      { id: 1, name: '500 Calories Run', level: 'Intermediate', calories: 500, points:100, img: "./assets/slice image/card-02.png" },
      { id: 2, name: '2.4 KM Run', level: 'Intermediate', calories: 640, points:100, img: "./assets/slice image/card-01.png" },
      { id: 3, name: '20 Push up', level: 'Beginner', calories: 200, points:50, img: "./assets/slice image/card-01.png" },
      { id: 4, name: '30 Sit up', level: 'Beginner', calories: 350, points:70, img: "./assets/slice image/card-02.png" },
      { id: 5, name: 'Diet', level: 'Advanced', calories: 400, points:1000, img: "./assets/slice image/card-01.png" },
    ];
    return {cardios};
  }
}
