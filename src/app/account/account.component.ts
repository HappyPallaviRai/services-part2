import { Component, EventEmitter, Input, Output } from "@angular/core";
import { LoggingService } from "../logging.service";
import { AccountService } from "../account.service";

@Component({
  selector: "app-account",
  templateUrl: "./account.component.html",
  styleUrls: ["./account.component.css"]
})
export class AccountComponent {
  @Input() account: { name: string; status: string };
  @Input() id: number;

  constructor(private accountService: AccountService) {}

  onSetTo(status: string) {
    //this.statusChanged.emit({ id: this.id, newStatus: status });
    this.accountService.onStatusChanged(this.id, status);
    this.accountService.statusUpdated.emit(status);
    // console.log('A server status changed, new status: ' + status);
    //this.loggingService.LogMessage(status);
  }
}
