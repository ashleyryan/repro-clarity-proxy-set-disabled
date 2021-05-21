import { CdsSelect } from "@cds/react/select";
import { render, screen } from "@testing-library/react";
import React from "react";

/**
 * Mock to avoid:
 *
 * ```
 * ReferenceError: ResizeObserver is not defined
 *   at elementResize (node_modules/src/internal/utils/responsive.ts:17:20)
 *   at updateComponentLayout (node_modules/src/internal/utils/responsive.ts:33:10)
 *   ...
 * ```
 */
window.ResizeObserver = class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
};

test("should find the combobox role", async () => {
  render(
    <CdsSelect>
      <label>Foo</label>
      <select>
        <option>Bar</option>
      </select>
    </CdsSelect>
  );

  /*
   * This test fails with:
   *
   * ```
   * TypeError: 'set' on proxy: trap returned falsish for property 'disabled'
   *
   *   at node_modules/src/internal/utils/lit-element.ts:42:20
   *       at Array.forEach (<anonymous>)
   *   at syncProps (node_modules/src/internal/utils/lit-element.ts:42:6)
   *   at HTMLElement.updated (node_modules/src/forms/control/control.element.ts:291:5)
   *   at HTMLElement.performUpdate (node_modules/lit-element/src/lib/updating-element.ts:792:12)
   *   at node_modules/lit-element/src/lib/updating-element.ts:725:25
   *   at asyncGeneratorStep (node_modules/lit-element/lib/updating-element.js:8:103)
   *   at _next (node_modules/lit-element/lib/updating-element.js:10:194)
   * ```
   *
   * When commenting out https://github.com/vmware/clarity/blob/next/packages/core/src/forms/control/control.element.ts#L291
   * the test succeeds as expected.
   */
  expect(
    await screen.findByRole("combobox", { name: "Foo" })
  ).toBeInTheDocument();
});
