import 'es6-shim';
import 'reflect-metadata';
require('zone.js/dist/zone');

import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent } from './app/app-component/app.component';

// comoponents


if (process.env.ENV === 'production') {
	enableProdMode();
}
bootstrap(AppComponent, []); 