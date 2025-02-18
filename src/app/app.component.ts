import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';  // Import HttpClient
import { HttpClientModule } from '@angular/common/http';  // Import HttpClientModule
import { BehaviorSubject } from 'rxjs';
import { CommonModule } from '@angular/common';  // Import CommonModule for *ngIf
import { AppConfiguration } from './app-configuration.model';

@Component({
  selector: 'app-root',
  standalone: true,  // Mark this as a standalone component
  imports: [CommonModule, HttpClientModule], // Add HttpClientModule here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'config-loader-app';
  private $configuration = new BehaviorSubject<AppConfiguration | null>(null);
  public configuration$ = this.$configuration.asObservable();

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadConfiguration();
  }

  // Method to load configuration from config.json
  private loadConfiguration(): void {
    console.log('Making HTTP request to load configuration...');
    this.http.get<AppConfiguration>('assets/config.json').subscribe(
      (data: AppConfiguration) => {
        console.log('Configuration data:', data); // This will print the config data returned from the HTTP request
        this.$configuration.next(data);
      },
      (error: HttpErrorResponse) => {
        console.error('Error loading config:', error); // This will log any error if the request fails
      }
    );
  }
  
  
}
