import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";

import { AppComponent } from "./app.component";

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      defaultLanguage: "en"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
