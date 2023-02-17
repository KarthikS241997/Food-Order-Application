import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll(): Foods[]{
    return [
      {
        id : 1,
        price: 10,
        name: 'Burger' ,
        favorite: true,
        star: 4.5,
        tags: ['FastFood', 'Lunch', 'Burger'],
        imageUrl: '/assets/food1.jpg',
        cookTime: '10 - 20',
        origins: ['Italy']
      },
      {
        id : 2,
        price: 12,
        name: 'Chicken Roll' ,
        favorite: false,
        star: 4,
        tags: ['FastFood', 'Lunch', 'Roll'],
        imageUrl: '/assets/food2.jpg',
        cookTime: '5 - 10',
        origins: ['Germany', 'India']
      },
      {
        id : 3,
        price: 18,
        name: 'Pizza' ,
        favorite: true,
        star: 4.5,
        tags: ['FastFood', 'Lunch', 'Pizza'],
        imageUrl: '/assets/food3.jpg',
        cookTime: '15 - 20',
        origins: ['Italy', 'France']
      },
      {
        id : 4,
        price: 8,
        name: 'French Fries' ,
        favorite: true,
        star: 4.8,
        tags: ['FastFood', 'Fried'],
        imageUrl: '/assets/food4.jpg',
        cookTime: '10 - 20',
        origins: ['Italy', 'US', 'India']
      },
      {
        id : 5,
        price: 20,
        name: 'Fried Chicken' ,
        favorite: false,
        star: 4.1,
        tags: ['Lunch', 'Chicken', 'Fried'],
        imageUrl: '/assets/food5.jpg',
        cookTime: '10 - 20',
        origins: ['Italy', 'US', 'Germany']
      },
      {
        id : 6,
        price: 12,
        name: 'Momos' ,
        favorite: false,
        star: 3.8,
        tags: ['FastFood', 'Lunch', 'Momos'],
        imageUrl: '/assets/food6.jpg',
        cookTime: '10 - 15',
        origins: ['Italy', 'Uk', 'India']
      },
      {
        id : 7,
        price: 16,
        name: 'Pepparoni Pizza' ,
        favorite: false,
        star: 4.0,
        tags: ['FastFood', 'Lunch', 'Pizza'],
        imageUrl: '/assets/food7.jpg',
        cookTime: '10 - 15',
        origins: ['Italy']
      },
      {
        id : 8,
        price: 16,
        name: 'Pepparoni Cheese Pizza' ,
        favorite: false,
        star: 4.0,
        tags: ['FastFood', 'Lunch', 'Pizza'],
        imageUrl: '/assets/food7.jpg',
        cookTime: '10 - 15',
        origins: ['Italy']
      }
    ]
  }

  getAllFoodsByTag(tag: string): Foods[] {
    // if(tag == "All"){
    //   return this.getAll();
    // }
    // else {
    //   return this.getAll().filter(food => food.tags?.includes(tag));
    // }
    return tag === 'All' ?  this.getAll() :  this.getAll().filter(food => food.tags?.includes(tag));
  }

  getAllTags(): Tag[] {
    return [
      {name: 'All', count: 8},
      {name: 'FastFood', count: 6},
      {name: 'Pizza', count: 3},
      {name: 'Burger', count: 1},
      {name: 'Fried', count: 3},
      {name: 'Lunch', count: 5},
      {name: 'Momos', count: 11},
      {name: 'Chicken', count: 1},
      {name: 'Roll', count: 1}
    ]
  }

  getFoodById(id: number) : Foods {
    return this.getAll().find(food => food.id == id)!;
  }
}
