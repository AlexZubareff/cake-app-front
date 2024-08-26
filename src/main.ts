import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors } from '@angular/common/http';
// import { RestInterceptorsService } from './app/services/rest/interceptors/rest-interceptors.service';

bootstrapApplication(
  AppComponent,
  appConfig,
  )
  .catch((err) => console.error(err));
