import { Controller, Get, Query } from "@nestjs/common";
import { AppService } from "./app.service";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
  }

  @Get()
  getHello(): string {
    return "http://localhost:3000/search?q=moldova";
  }

  @Get("/search")
  getDataset(@Query("q") search) {
    return this.appService.getSearchResult(search);
  }
}
