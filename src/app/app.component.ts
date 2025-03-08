import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { injectSpeedInsights } from '@vercel/speed-insights';
import { HeaderComponent } from './header/header.component';
@Component({
	selector: 'app-root',
	imports: [RouterOutlet, HeaderComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.css',
})
export class AppComponent {
	title = 'first-project';
	ngOnInit() {
		injectSpeedInsights();
	}
}
