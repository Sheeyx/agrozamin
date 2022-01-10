import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { ru_RU } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import ru from '@angular/common/locales/ru';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { CartComponent } from './cart/cart.component';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { CartsComponent } from './carts/carts.component';
import { CartImgComponent } from './cart-img/cart-img.component';
import { CartItemsComponent } from './cart-items/cart-items.component';
import { CartOrdersComponent } from './cart-orders/cart-orders.component';
import { FarmSchoolComponent } from './farm-school/farm-school.component';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzFormModule} from 'ng-zorro-antd/form';
import { ReactiveFormsModule } from '@angular/forms';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzCardModule } from 'ng-zorro-antd/card';
import { AgrolabComponent } from './agrolab/agrolab.component';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { TexcardsComponent } from './texcards/texcards.component';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { MedialibraryComponent } from './medialibrary/medialibrary.component';
import { ProfileComponent } from './profile/profile.component'



registerLocaleData(ru);

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    CartsComponent,
    CartImgComponent,
    CartItemsComponent,
    CartOrdersComponent,
    FarmSchoolComponent,
    AgrolabComponent,
    TexcardsComponent,
    MedialibraryComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NzBreadCrumbModule,
    NzTableModule,
    NzEmptyModule,
    NzButtonModule,
    NzGridModule,
    NzImageModule,
    NzFormModule,
    ReactiveFormsModule,
    NzDatePickerModule,
    NzCardModule,
    NzSelectModule,
    NzPaginationModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: ru_RU }],
  bootstrap: [AppComponent]
})
export class AppModule { }
