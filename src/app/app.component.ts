import { Component, OnInit, OnDestroy } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { Subscription, BehaviorSubject } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit, OnDestroy {
  title = "git-practice";
  sampleTextString;
  translateSubscription: Subscription;

  constructor(private translateService: TranslateService) {}

  ngOnInit() {
    // translateService.setDefaultLang("fr");
    this.translateService.setDefaultLang("en");
    console.log(
      "default lang set to: " + this.translateService.getDefaultLang()
    );
    this.translateService.use(this.translateService.getBrowserLang());
    console.log("current lang set to: " + this.translateService.currentLang);

    this.translateSubscription = this.translateService
      .stream("appText")
      .subscribe(val => {
        this.sampleTextString = val;
      });
  }

  ngOnDestroy() {
    this.translateSubscription.unsubscribe();
  }

  switchLang() {
    if (this.translateService.currentLang == "en") {
      this.translateService.use("fr");
    } else {
      this.translateService.use("en");
    }
    console.log("current lang set to: " + this.translateService.currentLang);
  }
}
