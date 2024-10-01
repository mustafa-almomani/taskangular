import { Component } from '@angular/core';
import { UrlService } from '../url/url.service';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrl: './subscription.component.css'
})
export class SubscriptionComponent {

  ngOnInit() {
    this.getmustafa();
  }


  constructor(private _ser: UrlService) { }

  subsecriptionarray: any

  getmustafa() {
    this._ser.getsubscription().subscribe((data) => {
      this.subsecriptionarray = data
      console.log(this.subsecriptionarray, "this.servicearray")
    })
  }
  data={
  "userId": 1,
    "subscriptionId": 0,
      "subServiceId": 1
}
  addusersubscription(id: any) {
    this.data.subscriptionId = id;

    this._ser.addusersubscription(this.data).subscribe(() => {
  alert("lknlkdnlkadnfalknl")
    })
  }
}
