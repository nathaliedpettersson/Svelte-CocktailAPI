export const prerender = true;
export async function load({ fetch }) {
    const drink = await (await fetch("./index.json")).json();
    return {
        drinkProp: drink,
    };
}
//# sourceMappingURL=+page.js.map