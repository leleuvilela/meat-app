import {Routes} from '@angular/router'

import {HomeComponent} from './home/home.component'
import {AboutComponent} from './about/about.component'
import {RestaurantsComponent} from './restaurants/restaurants.component'
import {RestaurantDetailComponent} from './restaurant-detail/restaurant-detail.component'
import {MenuComponent} from './restaurant-detail/menu/menu.component'
import {ReviewsComponent} from './restaurant-detail/reviews/reviews.component'
import { OrderComponent } from './order/order.component';
import { OrderSumaryComponent } from 'app/order/order-sumary/order-sumary.component';

export const ROUTES: Routes = [
  {path:'', component: HomeComponent},
  {path:'about', component: AboutComponent},
  {path:'restaurants', component: RestaurantsComponent},
  {path:'restaurants/:id', component: RestaurantDetailComponent,
    children: [
      {path: 'menu', component: MenuComponent},
      {path: 'reviews', component: ReviewsComponent},
      {path: '', redirectTo: 'menu', pathMatch: 'full'}
    ]},
  {path:'order', component: OrderComponent},
  {path:'order-summary', component: OrderSumaryComponent}
]
