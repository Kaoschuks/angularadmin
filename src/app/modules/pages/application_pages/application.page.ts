import { Component, inject } from "@angular/core";
import { GlobalsService } from "src/app/core";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-application",
  templateUrl: "./application.page.html",
  styleUrls: ["./application.page.scss"],
})
export class ApplicationPage {
  globals: GlobalsService = inject(GlobalsService);
  constructor(
  ) {}
}
