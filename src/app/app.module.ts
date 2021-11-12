import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreConfigComponent } from './core-config/core-config.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FeaturesListComponent } from './features-list/features-list.component';
import { ManifestComponent } from './manifest/manifest.component';
import { IconSetComponent } from './icon-set/icon-set.component';
import { ThemeComponent } from './theme/theme.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppService } from './app.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CoreConfigComponent,
    HomepageComponent,
    FeaturesListComponent,
    ManifestComponent,
    IconSetComponent,
    ThemeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
