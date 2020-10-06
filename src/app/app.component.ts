import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'fuel-tracker';
  track: any = [];
  constructor(private http: HttpClient) {}

  async ngOnInit() {
    const url = 'http://localhost:3000/track';
    this.http.get(url).subscribe((res) => {
      this.track = res;
    });
  }
  ng
}
