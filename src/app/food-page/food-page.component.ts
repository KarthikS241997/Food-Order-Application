import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart/cart.service';
import { FoodService } from '../services/food/food.service';
import { Foods } from '../shared/models/food';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent {

  food!: Foods;

  constructor ( private activatedRoute: ActivatedRoute, private fs : FoodService, private cartService: CartService, private router: Router) {
    activatedRoute.params.subscribe(params => {
      if(params['id']){
        this.food = fs.getFoodById(params['id']);
      }
    })
  }

  addToCart(){
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }

}
