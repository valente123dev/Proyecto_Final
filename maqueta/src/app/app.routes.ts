import { Routes } from '@angular/router';
import { InicioComponent } from './components/header/inicio/inicio.component';
import { AboutComponent } from './components/about/about.component';

import { AcercaComponent } from './components/header/acerca/acerca.component';
import { ServiciosComponent } from './components/header/servicios/servicios.component';
import { DispositivosComponent } from './components/header/dispositivos/dispositivos.component';
import { InventarioComponent } from './components/header/inventario/inventario.component';
import { GuardadoComponent } from './components/header/guardado/guardado.component';
import { CotizarComponent } from './components/header/cotizar/cotizar.component';
import { RegistroComponent } from './components/registro/registro.component';
import { LoginComponent } from './components/login/login.component';





export const routes: Routes = [
   {
    path:"inicio", component:InicioComponent
   },
    
    {
        path:"about",
        component:AboutComponent
    },
    {
        path:"acerca",
        component:AcercaComponent
    },
    {
        path:"servicios",
        component:ServiciosComponent
    },
    {
        path:"dispositivos",
        component:DispositivosComponent
    },
    {
        path:"dispositivos/acerca",
        component:AcercaComponent
    },
    {
        path:"dispositivos/servicios",
        component:ServiciosComponent
    },
    {
        path:"dispositivos/inicio",
        component:InicioComponent
    },
    {
    path:"inventario",
    component:InventarioComponent,
    

    
},

{
    path:"editar",
    component:GuardadoComponent
}
,
{
    path:"cotizar",
    component:CotizarComponent
}
,{
    path:"registro",component:RegistroComponent

},
{
    path:"login",component:LoginComponent
}
    
];
