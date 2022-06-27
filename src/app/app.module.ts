import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroComponent } from './components/registro/registro.component';
import { DatosContactoComponent } from './components/datos-contacto/datos-contacto.component';
import { EmpresasComponent } from './components/empresas/empresas.component';
import { CitasComponent } from './components/citas/citas.component';
import { HttpClientModule } from '@angular/common/http';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarfijaComponent } from './components/navbarfija/navbarfija.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ControlComponent } from './components/control/control.component';
import { FarmaciaComponent } from './components/farmacia/farmacia.component';


@NgModule({
    declarations: [
        AppComponent,
        RegistroComponent,
        DatosContactoComponent,
        EmpresasComponent,
        CitasComponent,
        NosotrosComponent,
        FooterComponent,
        NavbarfijaComponent,
        NavbarComponent,
        ControlComponent,
        FarmaciaComponent,

    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
