import { c as create_ssr_component, e as escape, d as add_attribute, f as each } from "../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".wrapper.svelte-1fgm7gt{display:flex;flex-direction:column;align-items:center;font-family:Arial, Helvetica, sans-serif}.button.svelte-1fgm7gt{padding:0.5rem 1rem;border:none;background-color:black;color:white;border-radius:4px;cursor:pointer}.drink-name.svelte-1fgm7gt{color:coral}.drink-thumb.svelte-1fgm7gt{width:300px;border-radius:1rem}p.svelte-1fgm7gt{max-width:500px;text-align:center}.ingredient.svelte-1fgm7gt{margin:2px 0}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let drinkState = data.drinkProp;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div class="${"wrapper svelte-1fgm7gt"}"><h1>Cocktail API</h1>
  <button class="${"button svelte-1fgm7gt"}">Get new drink</button>
  <h1 class="${"drink-name svelte-1fgm7gt"}">${escape(drinkState.name)}</h1>
  <img class="${"drink-thumb svelte-1fgm7gt"}"${add_attribute("src", drinkState.thumbUrl, 0)} alt="${"drink-thumb"}">
  <p class="${"svelte-1fgm7gt"}">${escape(drinkState.instructions)}</p>

  ${each(drinkState.ingredients, (ingredient) => {
    return `<p class="${"ingredient svelte-1fgm7gt"}">${escape(ingredient.amount)} ${escape(ingredient.name)}</p>`;
  })}
</div>`;
});
export {
  Page as default
};
