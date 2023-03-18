import { Injectable } from "@nestjs/common";
import axios from "axios";
import cheerio from "cheerio";

@Injectable()
export class AppService {
  async getSearchResult(search) {
    const page = await axios.get(
      `https://search.lycos.com/web/?q=${search}`
    );


    return this.parseResults(page.data);
  }

  parseResults(html) {
    const $ = cheerio.load(html);
    const result = [];
    $(".result-item").each(function() {
      result.push({
        title: $(this).find(".result-title").text(),
        url: $(this).find(".result-url").text(),
        description: $(this).find(".result-description").text()
      });
    });
    return result;
  }
}
