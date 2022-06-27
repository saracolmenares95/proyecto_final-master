import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitasComponent } from './components/citas/citas.component';
import { ControlComponent } from './components/control/control.component';
import { DatosContactoComponent } from './components/datos-contacto/datos-contacto.component';
import { EmpresasComponent } from './components/empresas/empresas.component';
import { FarmaciaComponent } from './components/farmacia/farmacia.component';
import { HomeComponent } from './components/home/home.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { RegistroComponent } from './components/registro/registro.component';

const routes: Routes = [
    { path: "farmacia", component: FarmaciaComponent },
    { path: "citas", component: CitasComponent },
    { path: "registro", component: RegistroComponent },
    { path: "datos", component: DatosContactoComponent },
    { path: "nosotros", component: NosotrosComponent},
    { path:"control", component: ControlComponent},
    { path: "empresas", component: EmpresasComponent},
    { path: "", component:HomeComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
