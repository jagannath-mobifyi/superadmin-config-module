import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreConfigComponent } from './core-config/core-config.component';
import { FeaturesListComponent } from './features-list/features-list.component';
import { HomepageComponent } from './homepage/homepage.component';
import { IconSetComponent } from './icon-set/icon-set.component';
import { ManifestComponent } from './manifest/manifest.component';
import { ThemeComponent } from './theme/theme.component';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: HomepageComponent
  },
  {
    path: "core-config",
    pathMatch: "full",
    component: CoreConfigComponent
  },
  {
    path: "manifest",
    pathMatch: "full",
    component: ManifestComponent
  },
  {
    path: "features-list",
    pathMatch: "full",
    component: FeaturesListComponent
  },
  {
    path: "icon-set",
    pathMatch: "full",
    component: IconSetComponent
  },
  {
    path: "theme",
    pathMatch: "full",
    component: ThemeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
