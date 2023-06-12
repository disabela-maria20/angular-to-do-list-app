import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Componentes
import { HeaderComponent } from './components/header/header.component';
import { TodoBottonDeleteAllComponent } from './components/todo-botton-delete-all/todo-botton-delete-all.component';
import { TodoInputAddItensComponent } from './components/todo-input-add-itens/todo-input-add-itens.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';

// Pages
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    HeaderComponent,
    TodoBottonDeleteAllComponent,
    TodoInputAddItensComponent,
    TodoListComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,

  ]
})
export class HomeModule { }
