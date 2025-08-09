// src/data/hospitals.ts
import { partnerRegions } from "./partnerRegions";
import type { Hospital } from "@/types/locations";

export const hospitals: Hospital[] = partnerRegions.flatMap(({ region, items }) =>
  items.map(({ name, url }) => ({
    name,
    region,
    url: url || undefined, // 空字串轉成 undefined，渲染時就不會出現空連結
  }))
);
