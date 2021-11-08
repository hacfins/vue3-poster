import { openBlock, createElementBlock, normalizeClass, withKeys, withModifiers, withDirectives, createElementVNode, vModelRadio, normalizeStyle, renderSlot, createTextVNode, toDisplayString } from 'vue';

const _hoisted_1 = ["aria-checked", "aria-disabled", "tabindex"];
const _hoisted_2 = ["value", "name", "disabled"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("label", {
    class: normalizeClass(["el-radio-button", [
      _ctx.size ? "el-radio-button--" + _ctx.size : "",
      {
        "is-active": _ctx.value === _ctx.label,
        "is-disabled": _ctx.isDisabled,
        "is-focus": _ctx.focus
      }
    ]]),
    role: "radio",
    "aria-checked": _ctx.value === _ctx.label,
    "aria-disabled": _ctx.isDisabled,
    tabindex: _ctx.tabIndex,
    onKeydown: _cache[4] || (_cache[4] = withKeys(withModifiers(($event) => _ctx.value = _ctx.isDisabled ? _ctx.value : _ctx.label, ["stop", "prevent"]), ["space"]))
  }, [
    withDirectives(createElementVNode("input", {
      ref: "radioRef",
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.value = $event),
      class: "el-radio-button__original-radio",
      value: _ctx.label,
      type: "radio",
      name: _ctx.name,
      disabled: _ctx.isDisabled,
      tabindex: "-1",
      onFocus: _cache[1] || (_cache[1] = ($event) => _ctx.focus = true),
      onBlur: _cache[2] || (_cache[2] = ($event) => _ctx.focus = false)
    }, null, 40, _hoisted_2), [
      [vModelRadio, _ctx.value]
    ]),
    createElementVNode("span", {
      class: "el-radio-button__inner",
      style: normalizeStyle(_ctx.value === _ctx.label ? _ctx.activeStyle : null),
      onKeydown: _cache[3] || (_cache[3] = withModifiers(() => {
      }, ["stop"]))
    }, [
      renderSlot(_ctx.$slots, "default", {}, () => [
        createTextVNode(toDisplayString(_ctx.label), 1)
      ])
    ], 36)
  ], 42, _hoisted_1);
}

export { render };
//# sourceMappingURL=radio-button.vue_vue&type=template&id=14e266b0&lang.mjs.map
