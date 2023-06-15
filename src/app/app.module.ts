import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTreeModule} from '@angular/material/tree';
import {MatNativeDateModule} from '@angular/material/core';
import {FormsModule} from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { MovieComponent } from './movie/movie.component';
import { TicketComponent } from './ticket/ticket.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { CommonModule } from '@angular/common';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatLabel } from '@angular/material/form-field';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MovieTableComponent } from './movie-table/movie-table.component';
import { authInterceptorProviders } from './Guard/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    TicketComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    AdminComponent,
    UserComponent,
    HeaderComponent,
    FooterComponent,
    MovieTableComponent,
    
  ],
  imports: [
    BrowserModule, AppRoutingModule, BrowserAnimationsModule,FormsModule,HttpClientModule,
     MatButtonModule,MatButtonToggleModule,MatCardModule,MatCheckboxModule,MatDatepickerModule,
     MatDialogModule,MatDividerModule,MatExpansionModule,MatFormFieldModule,MatIconModule,MatInputModule,
    MatListModule,MatMenuModule,MatPaginatorModule,MatProgressBarModule,MatSelectModule,MatSidenavModule,
    MatSlideToggleModule,MatSortModule,MatTableModule,MatTreeModule, MatNativeDateModule,ReactiveFormsModule,
    BrowserAnimationsModule,MatButtonModule, MatCheckboxModule, MatDialogModule, CommonModule,MatSnackBarModule,MatIconModule,
    MatFormFieldModule,MatTableModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
