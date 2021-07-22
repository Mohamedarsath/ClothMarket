import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {


productList:any[]=[]
productList1:any[]=[]
cartItems:any[]=[];
searchText:any;

dlist:any={
  error: "false",
  message: "dashboard listed",
  data:
   [
  {kids:[
      {
          "id": 21,
          "productname": "test 1",
          "productprice": "10",
          "productimage": "https://rukminim1.flixcart.com/image/495/594/kekadu80/kids-t-shirt/7/a/c/11-12-years-tnv-rd-gyrnboy-abs1-tripr-original-imafv7ngfwuzud3u.jpeg?q=50",
          "description": "test description",
          "categorytype": "kids",
          "created_at": null,
          "updated_at": null,
          "category": 4
      },
      {
          "id": 22,
          "productname": "test 1",
          "productprice": "10",
          "productimage": "https://rukminim1.flixcart.com/image/495/594/kesv0y80/kids-dress/n/q/h/4-5-years-cotton-kids-jhabla-girls-frocks-sonia-collection-original-imafvdsmxc66h5xg.jpeg?q=50",
          "description": "test description",
          "categorytype": "kids",
          "created_at": null,
          "updated_at": null,
          "category": 4
      },
      {
          "id": 23,
          "productname": "test 1",
          "productprice": "10",
          "productimage": "https://rukminim1.flixcart.com/image/495/594/k6b2snk0/kids-ethnic-set/2/c/9/10-11-years-yellowkp-ftc-fashions-original-imafjh8ckqznzgg6.jpeg?q=50",
          "description": "test description",
          "categorytype": "kids",
          "created_at": null,
          "updated_at": null,
          "category": 4
      },
      {
          "id": 24,
          "productname": "test 1",
          "productprice": "10",
          "productimage": "https://rukminim1.flixcart.com/image/495/594/kpedle80/kids-t-shirt/a/4/g/5-6-years-3abaa-nikunj-original-imag3nbccxqkwnmg.jpeg?q=50",
          "description": "test description",
          "categorytype": "kids",
          "created_at": null,
          "updated_at": null,
          "category": 4
      },
      {
          "id": 25,
          "productname": "test 1",
          "productprice": "10",
          "productimage": "https://rukminim1.flixcart.com/image/495/594/k5vcya80pkrrdj/kids-dress/k/a/7/4-5-years-whiterose-digimart-original-imafnjgdwvcf6f9e.jpeg?q=50",
          "description": "test description",
          "categorytype": "kids",
          "created_at": null,
          "updated_at": null,
          "category": 4
      },
      {
          "id": 26,
          "productname": "test 1",
          "productprice": "10",
          "productimage": "https://rukminim1.flixcart.com/image/495/594/jx6fiq80/kids-short/c/j/m/12-13-years-ct-shorts-race3-cute-trend-original-imafhpy8r66qxckm.jpeg?q=50",
          "description": "test description",
          "categorytype": "kids",
          "created_at": null,
          "updated_at": null,
          "category": 4
      },
      {
          "id": 27,
          "productname": "test 1",
          "productprice": "10",
          "productimage": "https://rukminim1.flixcart.com/image/495/594/k6ci8i80/kids-apparel-combo/t/e/y/10-11-years-capfrock-ftc-fashions-original-imafkzcdegdyzkfy.jpeg?q=50",
          "description": "test description",
          "categorytype": "kids",
          "created_at": null,
          "updated_at": null,
          "category": 4
      },
      {
          "id": 28,
          "productname": "test 1",
          "productprice": "10",
          "productimage": "https://rukminim1.flixcart.com/image/495/594/kk2wl8w0/kids-dress/e/y/n/8-9-years-myellow01-ftc-fashions-original-imafzgdyffwhgzas.jpeg?q=50",
          "description": "test description",
          "categorytype": "kids",
          "created_at": null,
          "updated_at": null,
          "category": 4
      },
      {
          "id": 29,
          "productname": "test 1",
          "productprice": "10",
          "productimage": "https://rukminim1.flixcart.com/image/495/594/jvv9zm80/kids-ethnic-set/b/v/t/2-3-years-digibc001-digimart-original-imafggkydgvztb2k.jpeg?q=50",
          "description": "test description",
          "categorytype": "kids",
          "created_at": null,
          "updated_at": null,
          "category": 4
      },
      {
          "id": 30,
          "productname": "test 1",
          "productprice": "10",
          "productimage": "https://rukminim1.flixcart.com/image/495/594/k6mibgw0/kids-dress/d/5/4/10-11-years-blueribjacket-ftc-fashions-original-imafz5g6mffxnkd9.jpeg?q=50",
          "description": "test description",
          "categorytype": "kids",
          "created_at": null,
          "updated_at": null,
          "category": 4
      }
  ]},
  {womens:[
      {
          "id": 11,
          "productname": "test 1",
          "productprice": "10",
          "productimage": "https://rukminim1.flixcart.com/image/495/594/kfr5le80-0/kurta/j/d/n/l-316k711-saara-original-imafw56vvrkhzt74.jpeg?q=50\n",
          "description": "test description",
          "categorytype": "womens",
          "created_at": null,
          "updated_at": null,
          "category": 3
      },
      {
          "id": 12,
          "productname": "test 2",
          "productprice": "10",
          "productimage": "https://rukminim1.flixcart.com/image/495/594/k6l2vm80/ethnic-set/n/j/v/xxl-bkgreen-baba-kurti-original-imafpytuqxvjyebf.jpeg?q=50",
          "description": "test description",
          "categorytype": "womens",
          "created_at": null,
          "updated_at": null,
          "category": 3
      },
      {
          "id": 13,
          "productname": "test 3",
          "productprice": "10",
          "productimage": "https://rukminim1.flixcart.com/image/495/594/km6mxe80/ethnic-set/7/q/d/xxl-jef-rbd-814-jaffry-embroidery-original-imagf5a5hgqzzfzw.jpeg?q=50",
          "description": "test description",
          "categorytype": "womens",
          "created_at": null,
          "updated_at": null,
          "category": 3
      },
      {
          "id": 14,
          "productname": "test 10",
          "productprice": "10",
          "productimage": "https://rukminim1.flixcart.com/image/495/594/kflftzk0/ethnic-set/e/a/p/xs-ie10ks4be1096-indo-era-original-imafwfyzjwf9x5hm.jpeg?q=50",
          "description": "test description",
          "categorytype": "womens",
          "created_at": null,
          "updated_at": null,
          "category": 3
      },
      {
          "id": 15,
          "productname": "test 10",
          "productprice": "10",
          "productimage": "https://rukminim1.flixcart.com/image/495/594/kf75fgw0/ethnic-set/a/f/a/xxl-gdf0012-goverdhan-fashion-original-imafvpxxtpagjrqc.jpeg?q=50",
          "description": "test description",
          "categorytype": "womens",
          "created_at": null,
          "updated_at": null,
          "category": 3
      },
      {
          "id": 16,
          "productname": "test 10",
          "productprice": "10",
          "productimage": "https://rukminim1.flixcart.com/image/495/594/kpa39u80/ethnic-set/0/5/v/xxl-sa19kr275r-surhi-original-imag3jwbq8hbv6mb.jpeg?q=50",
          "description": "test description",
          "categorytype": "womens",
          "created_at": null,
          "updated_at": null,
          "category": 3
      },
      {
          "id": 17,
          "productname": "test 10",
          "productprice": "10",
          "productimage": "https://rukminim1.flixcart.com/image/495/594/kq43iq80/ethnic-set/a/y/l/l-001-rangshalaa-original-imag4766tvvvh4yd.jpeg?q=50",
          "description": "test description",
          "categorytype": "womens",
          "created_at": null,
          "updated_at": null,
          "category": 3
      },
      {
          "id": 18,
          "productname": "test 10",
          "productprice": "10",
          "productimage": "https://rukminim1.flixcart.com/image/495/594/k66sh3k0/salwar-kurta-dupatta/g/g/q/m-designers-rayon-kurtta-plazzo-set-kirti-designers-original-imafzphvhj4azz5s.jpeg?q=50",
          "description": "test description",
          "categorytype": "womens",
          "created_at": null,
          "updated_at": null,
          "category": 3
      },
      {
          "id": 19,
          "productname": "test 10",
          "productprice": "10",
          "productimage": "https://rukminim1.flixcart.com/image/495/594/k58hwnk0/ethnic-set/k/f/a/m-sr-185-sanganeri-tex-original-imafnut9wuzvqxmp.jpeg?q=50",
          "description": "test description",
          "categorytype": "womens",
          "created_at": null,
          "updated_at": null,
          "category": 3
      },
      {
          "id": 20,
          "productname": "test 10",
          "productprice": "10",
          "productimage": "https://rukminim1.flixcart.com/image/495/594/kngd0nk0/ethnic-set/g/5/c/s-u1001-prisca-original-imag24ghzgng9y8h.jpeg?q=50",
          "description": "test description",
          "categorytype": "womens",
          "created_at": null,
          "updated_at": null,
          "category": 3
      }
  ]},
  {mens:[
      {
          "id": 1,
          "productname": "test 1",
          "productprice": "10",
          "productimage": "https://rukminim1.flixcart.com/image/495/594/kmkxbww0/shirt/f/n/i/m-mss21eppsh016c-metronaut-original-imagfgbpv3e4jemz.jpeg?q=50",
          "description": "test description",
          "categorytype": "mens",
          "created_at": null,
          "updated_at": null,
          "category": 2
      },
      {
          "id": 2,
          "productname": "test 2",
          "productprice": "10",
          "productimage": "https://rukminim1.flixcart.com/image/495/594/klscivk0/shirt/5/f/s/m-maw20csh072b-metronaut-original-imagyu6ffvkrbxy6.jpeg?q=50",
          "description": "test description",
          "categorytype": "mens",
          "created_at": null,
          "updated_at": null,
          "category": 2
      },
      {
          "id": 3,
          "productname": "test 3",
          "productprice": "10",
          "productimage": "https://rukminim1.flixcart.com/image/495/594/kp5sya80/shirt/a/d/t/40-pcsfsslpu03998-peter-england-original-imag3g559g3fn28y.jpeg?q=50",
          "description": "test description",
          "categorytype": "mens",
          "created_at": null,
          "updated_at": null,
          "category": 2
      },
      {
          "id": 4,
          "productname": "test 4",
          "productprice": "10",
          "productimage": "https://rukminim1.flixcart.com/image/495/594/jzzvs7k0/shirt/h/a/h/l-c301-dustypink-dennis-lingo-original-imafjvx7b9jguhdv.jpeg?q=50",
          "description": "test description",
          "categorytype": "mens",
          "created_at": null,
          "updated_at": null,
          "category": 2
      },
      {
          "id": 5,
          "productname": "test 5",
          "productprice": "10",
          "productimage": "https://rukminim1.flixcart.com/image/495/594/k6fd47k0/shirt/d/x/r/xxl-c415-red-dennis-lingo-original-imafzvvrqtgx7nan.jpeg?q=50",
          "description": "test description",
          "categorytype": "mens",
          "created_at": null,
          "updated_at": null,
          "category": 2
      },
      {
          "id": 6,
          "productname": "test 6",
          "productprice": "10",
          "productimage": "https://rukminim1.flixcart.com/image/495/594/k6fd47k0/shirt/9/f/5/xl-c415-tealblue-dennis-lingo-original-imafzvvrxzt8tpar.jpeg?q=50",
          "description": "test description",
          "categorytype": "mens",
          "created_at": null,
          "updated_at": null,
          "category": 2
      },
      {
          "id": 7,
          "productname": "test 7",
          "productprice": "10",
          "productimage": "https://rukminim1.flixcart.com/image/495/594/klzhq4w0/shirt/p/t/l/s-sh-chi-12-u-turn-original-imagyzfhgdwznary.jpeg?q=50",
          "description": "test description",
          "categorytype": "mens",
          "created_at": null,
          "updated_at": null,
          "category": 2
      },
      {
          "id": 8,
          "productname": "test 8",
          "productprice": "10",
          "productimage": "https://rukminim1.flixcart.com/image/495/594/klscivk0/shirt/i/9/9/m-maw20csh056a-metronaut-original-imagyu54rh3mcfbz.jpeg?q=50",
          "description": "test description",
          "categorytype": "mens",
          "created_at": null,
          "updated_at": null,
          "category": 2
      },
      {
          "id": 9,
          "productname": "test 9",
          "productprice": "10",
          "productimage": "https://rukminim1.flixcart.com/image/495/594/kmf7ki80/shirt/v/a/o/m-mss21eppsh004b-metronaut-original-imagfbqwvhrwfb9y.jpeg?q=50",
          "description": "test description",
          "categorytype": "mens",
          "created_at": null,
          "updated_at": null,
          "category": 2
      },
      {
          "id": 10,
          "productname": "test 10",
          "productprice": "10",
          "productimage": "https://rukminim1.flixcart.com/image/495/594/kndi4y80/shirt/e/y/x/m-mss21csh372-metronaut-original-imag22juruwey3sf.jpeg?q=50",
          "description": "test description",
          "categorytype": "mens",
          "created_at": null,
          "updated_at": null,
          "category": 2
      }
  ]}
] }
  constructor(private http:HttpClient,private data: DataService ,private route:ActivatedRoute,private router:Router) { 

  }

  ngOnInit() {
   this.getProductList();
  }
  getProductList(){
    
    
   //this.http.get('http://139.59.6.161:3001/users/listProducts').subscribe(response=>{
       //  console.log('ProductResponse',response)
       //  let list=response['data'].map((data,index)=>{
          console.log(this.dlist);
          
          let list = this.dlist['data'].map((data,index)=>{


      if(index==0){
      var data= data.kids.map(data=>{
          data['category']=4;
          return data;
        })
      }
      else if(index==1){
        var data= data.womens.map(data=>{
          data['category']=3;
          return data;
        })
      }
      else if(index==2){
        var data= data.mens.map(data=>{
          data['category']=2;
          return data;
        })
      }
      return data;

         });
     //    console.log(list);
         this.productList=[...list[2],...list[1],...list[0]]
         console.log(this.productList);
  //  },
    // err=>{

    // }
  // )
  }

  categoryFilter(value){
    this.getAfterFilterProductList(()=>{
      if(value>1){
        this.productList= this.productList.filter(data=>{
          return data.category==value;
        });
        console.log('after Filter***',this.productList)
       }
    });
     
  }
  getAfterFilterProductList(callback){
 //   this.http.get('http://139.59.6.161:3001/users/listProducts').subscribe(response=>{
        // console.log('ProductResponse',response)
       //  let list=response['data'].map((data,index)=>{
        let list=this.dlist['data'].map((data,index)=>{
      if(index==0){
      var data= data.kids.map(data=>{
          data['category']=4;
          return data;
        })
      }
      else if(index==1){
        var data= data.womens.map(data=>{
          data['category']=3;
          return data;
        })
      }
      else if(index==2){
        var data= data.mens.map(data=>{
          data['category']=2;
          return data;
        })
      }
      return data;

         });
         console.log(list);
         this.productList=[...list[2],...list[1],...list[0]]
         callback();
         console.log(this.productList);
  //  },
    // err=>{

    // }
    
    //)
  }


  addCart(item){
    if(!this.cartItems.includes(item))
    this.cartItems.push(item);
    console.log(this.cartItems);
    environment
    .swalalert("success", "Added to cart")
    .then((value) => {
      if (value) {
       // this.router.navigate(["teachers"]);
      }
    });
    localStorage.setItem('cartItems',JSON.stringify(this.cartItems)
    )
this.data.changeCount(this.cartItems.length)
    
  }

  

}
