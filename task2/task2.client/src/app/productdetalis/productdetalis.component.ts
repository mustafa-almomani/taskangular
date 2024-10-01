import { Component } from '@angular/core';
import { UrlService } from '../url/url.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productdetalis',
  templateUrl: './productdetalis.component.html',
  styleUrl: './productdetalis.component.css'
})
export class ProductdetalisComponent {

  parameter: any
  ngOnInit()

  {
    this.parameter = this._router.snapshot.paramMap.get('id')
    this.getproductbyid(this.parameter);
  }

  constructor(private _ser: UrlService, private _router: ActivatedRoute) { }

  getproducrtid: any;
  getproductbyid(id: any) {
    this._ser.getproductbyid(id).subscribe((data) => {

      this.getproducrtid = data
      console.log("getproducrtid", this.getproducrtid)
    })
  }



}
