import { Component } from '@angular/core';
import{ BuyService } from '../Service/buy.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  // providers:[BuyService]
})
export class ProductsComponent {
  products = [
    {id: 1, name: 'Canh Ga Chien Nuoc Mam', price: '10', Size: 'small', available: 'Available', image: '/assets/products/canh ga.jpeg'},
    {id: 2, name: 'Cha Gio', price: '20', Size: 'small', available: 'Available', image: '/assets/products/chagio.jpeg'},
    {id: 3, name: 'Goi Ngo Sen', price: '30', Size: 'small', available: 'Available', image: '/assets/products/goingosen.jpeg'},
    {id: 4, name: 'Bo Nuong La Lop', price: '40', Size: 'small', available: 'Not Available', image: '/assets/products/lalop.jpeg'},
    {id: 5, name: 'Thit Nuong Xien Que', price: '50', Size: 'large', available: 'Not Available', image: '/assets/products/thitnuong.jpeg'},
    {id: 5, name: 'Tom Nuong Sa te', price: '50', Size: 'large', available: 'Not Available', image: '/assets/products/tomnuong.jpeg'},
  ];

  title = 'item';
  constructor(private buyService: BuyService) {
  }
  onBuy(){
    // const buyService = new BuyService();
    this.buyService.onBuyClicked(this.title)
  }
}
