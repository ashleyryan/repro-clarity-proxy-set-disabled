import { CdsSelect } from "@cds/react/select";
import { CdsButton } from "@cds/react/button";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
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

test("should find the button", async () => {
  render(<CdsButton>My Button</CdsButton>);

  expect(await screen.findByRole('button')).toBeInTheDocument();
})

test("should find the combobox role", async () => {
  render(
    <CdsSelect>
      <label>Foo</label>
      <select disabled>
        <option value="1">Bar</option>
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

  const select =   await screen.findByRole("combobox", { name: "Foo" });
  expect(select).toBeInTheDocument();

  expect(await screen.findByLabelText("Foo")).toBeInTheDocument();

  expect(select).toBeDisabled();

  userEvent.selectOptions(select, "1");

  expect((screen.getByRole('option', {name: 'Bar'}) as HTMLOptionElement).selected).toBe(true)

});

test("track disabled state", async () => {
  const TestComponent = () => {
    const [disabled, setDisabled] = React.useState(false);

    return (
      <>
        <button onClick={() => {setDisabled((s) => !s)}}>Set disabled</button>
        <CdsSelect>
          <label>Foo</label>
          <select disabled={disabled}>
            <option value="1">Bar</option>
          </select>
        </CdsSelect>
      </>
    )
  };

  render(<TestComponent />);

  expect( await screen.findByRole("combobox")).not.toBeDisabled();

  userEvent.click(await screen.findByRole('button'));

  expect( await screen.findByRole("combobox")).toBeDisabled();
  expect( await screen.findByRole("option")).toBeDisabled();

  screen.debug();
});
