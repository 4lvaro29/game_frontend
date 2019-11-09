import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input'; 
import { MatFormField, MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card'; 
import {MatButtonModule} from '@angular/material/button';
import { RoundComponent } from './components/round/round.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    RoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
  ],
  providers: [{ provide: MatFormFieldModule, useValue: {} }, { provide: MatFormField, useValue: [] }, { provide: MatFormFieldControl, useValue: [] }],
  bootstrap: [AppComponent]
})
export class AppModule { }
