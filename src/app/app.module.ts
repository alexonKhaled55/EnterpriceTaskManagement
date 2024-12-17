import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './component/header/header.component';
import { UserComponent } from './component/user/user.component';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './component/shared/shared.module';
import { TasksModule } from './component/tasks/tasks.module';

@NgModule({
  /*
    1) takes a configuration object like where we configure this module ;
    2) here we declare , register all the possible components , directives , we are gonna use by this module ,
       but if these components is standalone you have to add to the imports .
   */
  declarations: [AppComponent, HeaderComponent, UserComponent],
  bootstrap: [AppComponent],
  imports: [BrowserModule, SharedModule, TasksModule],
})
export class AppModule {}
