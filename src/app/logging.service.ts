import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class LoggingService {
  LogMessage(message: string) {
    console.log("A server status changed, new status: " + message);
  }
}
