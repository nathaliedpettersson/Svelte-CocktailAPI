import { c as create_ssr_component } from "../../chunks/index.js";
const styles = "";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".app.svelte-1dcrz0p{display:flex;flex-direction:column;min-height:100vh}main.svelte-1dcrz0p{flex:1;display:flex;flex-direction:column;padding:1rem;width:100%;max-width:64rem;margin:0 auto;box-sizing:border-box}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"app svelte-1dcrz0p"}"><main class="${"svelte-1dcrz0p"}">${slots.default ? slots.default({}) : ``}</main>
</div>`;
});
export {
  Layout as default
};
