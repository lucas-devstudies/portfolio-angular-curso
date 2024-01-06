import { NgModule } from '@angular/core';                
import { RouterModule, Routes } from '@angular/router';  
import { TitleComponent } from './pages/index/title/title.component';
import { CardComponent } from './pages/portfolio/card/card.component';

const routes: Routes = [
  { 
    path:'',                                      //qual o endereço url
    component: TitleComponent,                    //qual componente vai aparecer
    pathMatch:'full'                              //quando full a rota deve ser exatamente igual e quando não, usamos o prefix
  },                                              //é recomendado usar full na url principal
  { 
    //**quando não informo o pathMath usamos prefix**

    path:'portfolio',                             //qual o endereço url
    component: CardComponent,                     //qual componente vai aparecer
    children:[                                    //faz com que rotas filhas existam, podendo renderizar componentes diferentes
      {path:':id', component:CardComponent},
      {path:':id/:token', component:CardComponent}
    ]
  },
  { 
    path:'**',                                    //qual é usado qualquer outro endereço url
    redirectTo: '',                               //qual string de url vai substituir a escrita (pode criar uma rota de not found)
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
