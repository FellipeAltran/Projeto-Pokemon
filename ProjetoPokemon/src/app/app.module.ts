import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonComponent } from './components/pokemons/pokemon/pokemon.component';
import { BodyComponent } from './components/template/body/body.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { MatIconModule } from '@angular/material/icon';
import { FeaturesComponent } from './components/pokemons/features/features.component';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [
    FormsModule,
    MatListModule,
    MatChipsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    MatProgressBarModule,
    MatDividerModule,
    HttpClientModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatIconModule,
    MatInputModule
     
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    PokemonComponent,
    FooterComponent,
    FeaturesComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
