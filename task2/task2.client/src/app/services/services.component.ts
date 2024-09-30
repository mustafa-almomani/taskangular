import { Component } from '@angular/core';
import { UrlService } from '../url/url.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

  ngOnInit() {
    this.getServices();
  };

 
  constructor(private _ser: UrlService) {

  }
  servicearray: any;
  getServices() { 
   this._ser.getServices().subscribe((data) => {
     this.servicearray = data
     console.log(this.servicearray,"this.servicearray")
   })
  }

}
