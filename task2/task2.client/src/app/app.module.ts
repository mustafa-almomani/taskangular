import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, NgForm } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ServicesComponent } from './services/services.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { SupServicesComponent } from './sup-services/sup-services.component';
import { LuctrueComponent } from './luctrue/luctrue.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { ProductdetalisComponent } from './productdetalis/productdetalis.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ServicesComponent,
    SupServicesComponent,
    LuctrueComponent,
    SubscriptionComponent,
    ProductdetalisComponent
  ],
  imports: [
    FormsModule,
    BrowserModule, HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: "", component: HomeComponent, pathMatch: "full" },
      { path: "services", component: ServicesComponent },
      { path: "subservicesbyservicid/:id", component: SupServicesComponent },
      { path: "lucture", component: LuctrueComponent },
      { path: "subscription", component: SubscriptionComponent },
      { path: "productdetalis/:id", component: ProductdetalisComponent }

    
    ])


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
