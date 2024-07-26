/* import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 */


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AppComponent } from './app.component';
import { TablaPruebaComponent } from './tabla-prueba/tabla-prueba.component';
// Importar los módulos MatSelectModule y MatOptionModule
import { MatSelectModule } from '@angular/material/select';  
import { MatOptionModule } from '@angular/material/core';    


@NgModule({
  declarations: [
    AppComponent,
    TablaPruebaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatSortModule,
    MatPaginatorModule,
    // Agregar los módulos MatSelectModule y MatOptionModule
    MatSelectModule,  
    MatOptionModule   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
