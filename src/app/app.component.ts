import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BodyComponentComponent } from './body-component/body-component.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponentComponent, BodyComponentComponent, FooterComponentComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'hundirLaFlota-app';
}
