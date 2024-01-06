import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  constructor(private parametrizador: ActivatedRoute,
    private navegador: Router){
    
    //https://localhost:4200/portfolio/{1}
    this.parametrizador.params.subscribe( //pega o parâmetro da url, recuperando parâmetro das rotas
      res => console.log(res)
    )

    this.parametrizador.firstChild?.params.subscribe( //olha para primeira rota e primeiro filho      
      res => console.log(res)
    )

    //https://localhost:4200/portfolio/1?{namefelipe&token=123}
    this.parametrizador.queryParams.subscribe( //pega todos os dados passados na url, recuperando QueryParams
      res => console.log(res)
    )
  }

  //Redirecionamento de componente
  
  // ngOnInit(): void {
  //   setInterval(()=> {                    //força o componente ao iniciar faz com que num intervalo de 5s mude pra página principal
  //       this.navegador.navigate(['/'])
  //   },5000)
  // }
}
