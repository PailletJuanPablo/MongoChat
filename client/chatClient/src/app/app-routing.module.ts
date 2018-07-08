import { ChatComponent } from './chat/chat.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoomsComponent } from './rooms/rooms.component';

const routes: Routes = [
  {path: 'rooms', component: RoomsComponent},
  { path: 'chat/:id',      component: ChatComponent },
  { path: '',
    redirectTo: '/rooms',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
