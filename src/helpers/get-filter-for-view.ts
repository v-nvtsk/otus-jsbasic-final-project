import { Filter } from "../api/calendar.types";
import { GetPathArgs } from "./generate-pathname";

export function getFilterForView({ newView, year, month, date }: GetPathArgs): Filter {
  switch (newView) {
    case "year": {
      return {
        dateFrom: new Date(year, 0, 1).setHours(0, 0, 0, 0).valueOf(),
        dateTo: new Date(year, 11, 31).setHours(0, 0, 0, 0).valueOf(),
      };
    }
    case "month": {
      return {
        dateFrom: new Date(year, month, 1).setHours(0, 0, 0, 0).valueOf(),
        dateTo: new Date(year, month + 1, 0).setHours(0, 0, 0, 0).valueOf(),
      };
    }
    case "date": {
      return {
        dateFrom: new Date(year, month, date).setHours(0, 0, 0, 0).valueOf(),
        dateTo: new Date(year, month, date + 1).setHours(0, 0, 0, 0).valueOf(),
      };
    }
    case "list": {
      return { dateFrom: new Date().setHours(0, 0, 0, 0).valueOf() };
    }
    default: {
      return {};
    }
  }
}
