/*

    Programado por Luis Cabrera Benito 
  ____          _____               _ _           _       
 |  _ \        |  __ \             (_) |         | |      
 | |_) |_   _  | |__) |_ _ _ __ _____| |__  _   _| |_ ___ 
 |  _ <| | | | |  ___/ _` | '__|_  / | '_ \| | | | __/ _ \
 | |_) | |_| | | |  | (_| | |   / /| | |_) | |_| | ||  __/
 |____/ \__, | |_|   \__,_|_|  /___|_|_.__/ \__, |\__\___|
         __/ |                               __/ |        
        |___/                               |___/         
    
    
    Blog:       https://parzibyte.me/blog
    Ayuda:      https://parzibyte.me/blog/contrataciones-ayuda/
    Contacto:   https://parzibyte.me/blog/contacto/
*/
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MatLegacySliderModule as MatSliderModule} from '@angular/material/legacy-slider';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatLegacyListModule as MatListModule} from '@angular/material/legacy-list';
import {MatIconModule} from '@angular/material/icon';
import {MatLegacyButtonModule as MatButtonModule} from '@angular/material/legacy-button';
import {MatLegacyFormFieldModule as MatFormFieldModule} from '@angular/material/legacy-form-field';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatLegacyTableModule as MatTableModule} from '@angular/material/legacy-table';
import {MatLegacyDialogModule as MatDialogModule} from '@angular/material/legacy-dialog';
import {MatLegacySnackBarModule as MatSnackBarModule} from '@angular/material/legacy-snack-bar';
import {ProductosComponent} from './productos/productos.component';
import {ClientesComponent} from './clientes/clientes.component';
import {VentasComponent} from './ventas/ventas.component';
import {TiendaComponent} from './tienda/tienda.component';
import {AgregarProductoComponent} from './agregar-producto/agregar-producto.component';
import {MatLegacyInputModule as MatInputModule} from "@angular/material/legacy-input";
import {MatLegacyProgressSpinnerModule as MatProgressSpinnerModule} from "@angular/material/legacy-progress-spinner";
import {FormsModule} from "@angular/forms";
import {LoadingButtonComponent} from './loading-button/loading-button.component';
import {TarjetaProductoComponent} from './tarjeta-producto/tarjeta-producto.component';
import {MatLegacyCardMdImage as MatCardMdImage, MatLegacyCardModule as MatCardModule} from "@angular/material/legacy-card";
import {MatGridListModule} from "@angular/material/grid-list";
import {DetalleDeProductoComponent} from './detalle-de-producto/detalle-de-producto.component';
import {MatLegacyChipsModule as MatChipsModule} from "@angular/material/legacy-chips";
import {MatBadgeModule} from "@angular/material/badge";
import {MatLegacyMenuModule as MatMenuModule} from "@angular/material/legacy-menu";
import { TerminarCompraComponent } from './terminar-compra/terminar-compra.component';
import {MatStepperModule} from "@angular/material/stepper";
import { DetalleDeVentaComponent } from './detalle-de-venta/detalle-de-venta.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    ClientesComponent,
    VentasComponent,
    TiendaComponent,
    AgregarProductoComponent,
    LoadingButtonComponent,
    TarjetaProductoComponent,
    DetalleDeProductoComponent,
    TerminarCompraComponent,
    DetalleDeVentaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatTableModule,
    MatDialogModule,
    MatSnackBarModule,
    MatInputModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatGridListModule,
    MatChipsModule,
    MatBadgeModule,
    MatMenuModule,
    MatStepperModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
