import { Routes } from '@angular/router';
import { CardComponent } from './pages/portfolio/card/card.component';
import { TitleComponent } from './pages/index/title/title.component';

export const routes: Routes = [
    {   path:'',                   /*Como o endereço deve estar*/
        component: TitleComponent, /*Qual componente vai ser usado*/ 
        pathMatch: 'full'          /*Qual o final da url? (full) deve ser exatamente como foi escrito*/
    },
    {   path:'meu-portfolio',      /*Como o endereço deve estar*/
        component: CardComponent,  /*Qual componente vai ser usado*/ 
        pathMatch: 'prefix'        /*Quando não uso é automaticamente prefix o pathMatch */
    },
    {   path:'**',                 /*Como o endereço deve estar*/
        redirectTo: '',            /*Quando eu digito algo fora do esperado, eu vou pra qual caminho eu escolho(deve ser string), no caso... '' */ 
    }
];
/*
    Diferença entre prefix e full
      *O Full quando quero a URL exata, não pode haver nem uma variação
      *O Prefix quando quero a URL contenha o que tem no PathMath e pode conter até outras coisas
    */