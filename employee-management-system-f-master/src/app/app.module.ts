import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';
import {MainlayoutModule} from './layouts/mainlayout.module';
import {ContentModule} from './content/content.module';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {NgxWebstorageModule} from 'ngx-webstorage';


//import {TokenInterceptorService} from './services/token-interceptor.service';


@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
      

    ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MainlayoutModule,
    ContentModule,
    HttpClientModule,
    RouterModule,
    MatFormFieldModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ToastrModule.forRoot(),
    NgxWebstorageModule.forRoot(),
  ],
  /*   providers: [{
     provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
    ], */
    exports: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
