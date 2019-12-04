import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public product: any = {};
  //  activatedroute exei plirofories gia to url

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit() {


    this.route.params.subscribe(params => {


      this.http.get('http://localhost:3000/product/' +  params.productId).subscribe(responce => {
        this.product = responce;

      });
    }); // params gia na paroyme parametrous apo url

  }

}
