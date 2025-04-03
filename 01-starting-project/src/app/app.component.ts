import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { StatusComponent } from './status/status.component';
import { TrafficComponent } from './traffic/traffic.component';
import { TicketsComponent } from './tickets/tickets.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, StatusComponent, TrafficComponent, TicketsComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  
  
}
