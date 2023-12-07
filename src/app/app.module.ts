import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './shared/home/home.component';
import { FooterComponent } from './shared/footer/footer.component';
import {EquipmentAddEditComponent} from "./features/equipment/pages/equipment-add-edit/equipment-add-edit.component";
import { AddLocationComponent } from './features/location/add-location/add-location.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, HomeComponent, FooterComponent, EquipmentAddEditComponent, AddLocationComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
