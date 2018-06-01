import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

//IMPORTAR COMPONENTES
import { EmpleadoComponent } from "./empleado/empleado.component";
import { FrutaComponent } from "./fruta/fruta.component";
import { PlantillasComponent } from "./plantillas/plantillas.component";

const appRoutes: Routes = [
    { path: '',                         component: EmpleadoComponent },
    { path: 'empleado',                 component: EmpleadoComponent },
    { path: 'empleado/:id',             component: EmpleadoComponent },
    { path: 'empleado/nuevo',           component: EmpleadoComponent },
    { path: 'fruta',                    component: FrutaComponent },
    { path: 'plantillas',               component: PlantillasComponent },
    { path: '**',                       component: EmpleadoComponent }
];

export const appRoutingProvider: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
