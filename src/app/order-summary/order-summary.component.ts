import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent implements OnInit {

  tax:any=2;
  address:any;
  productlist:any=[];
  orderdetail:any;
  constructor(private http:HttpClient,private data: DataService ,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
     this.address= JSON.parse(localStorage.getItem('address'))
this.orderdetail=JSON.parse(localStorage.getItem('viewcarttotal'))
this.productlist=JSON.parse(localStorage.getItem('viewcartitem'))
     console.log(this.orderdetail);
     
  }

}
