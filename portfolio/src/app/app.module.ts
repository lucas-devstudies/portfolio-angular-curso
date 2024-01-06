import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import{ IndexModule } from './pages/index/index.module'                       //importação dos módulos
import{ PortfolioModule } from './pages/portfolio/portfolio.module';
import { MenuComponent } from './shared/menu/menu.component'                  //importação dos módulos

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    IndexModule,
    PortfolioModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
