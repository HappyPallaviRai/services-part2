import { Component, EventEmitter, Output } from "@angular/core";
import { AccountService } from "../account.service";

@Component({
  selector: "app-new-account",
  templateUrl: "./new-account.component.html",
  styleUrls: ["./new-account.component.css"]
})
export class NewAccountComponent {
  constructor(private accountService: AccountService) {
    this.accountService.statusUpdated.subscribe((status: string) =>
      alert("Stats" + status)
    );
  }
  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.onAccountAdded(accountName, accountStatus);

    //this.loggingService.LogMessage(accountStatus);
    //console.log('A server status changed, new status: ' + accountStatus);
  }
}
