import { Component } from '@angular/core';
import { UrlService } from '../url/url.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sup-services',
  templateUrl: './sup-services.component.html',
  styleUrl: './sup-services.component.css'
})
export class SupServicesComponent {

  parameter:any
  ngOnInit()
  {
    this.parameter = this._router.snapshot.paramMap.get('id')
    this.getsubservices(this.parameter);
  }


  constructor(private _ser: UrlService, private _router: ActivatedRoute) { }

  subservicesdata: any;
  getsubservices(id:any)
  {
    this._ser.getsubservicesbyservicid(id).subscribe((data) => {

      this.subservicesdata = data
      console.log("subservicesdata",this.subservicesdata)
    })
  }


}
