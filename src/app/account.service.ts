import { Injectable, EventEmitter } from "@angular/core";
import { LoggingService } from "./logging.service";

@Injectable({ providedIn: "root" })
export class AccountService {
  constructor(private loggingservice: LoggingService) {}
  accounts = [
    {
      name: "Master Account",
      status: "active"
    },
    {
      name: "Testaccount",
      status: "inactive"
    },
    {
      name: "Hidden Account",
      status: "unknown"
    }
  ];

  statusUpdated = new EventEmitter<string>();
  onAccountAdded(name: string, status: string) {
    this.accounts.push({ name, status });
    this.loggingservice.LogMessage(status);
  }

  onStatusChanged(id: number, newStatus: string) {
    this.accounts[id].status = newStatus;
    this.loggingservice.LogMessage(newStatus);
  }
}
