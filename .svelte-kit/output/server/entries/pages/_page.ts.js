const prerender = true;
async function load({ fetch }) {
  const drink = await (await fetch("./index.json")).json();
  return {
    drinkProp: drink
  };
}
export {
  load,
  prerender
};
