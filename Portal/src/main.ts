import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { C4Module } from './c4/c4.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

//platformBrowserDynamic().bootstrapModule(AppModule)
platformBrowserDynamic().bootstrapModule(C4Module)
  .catch(err => console.log(err));
