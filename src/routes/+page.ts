export const prerender = true;
import type { DrinkType } from "../types";

export async function load({ fetch }: { fetch: any }) {
  const drink: DrinkType = await (await fetch("./index.json")).json();

  return {
    drinkProp: drink,
  };
}
