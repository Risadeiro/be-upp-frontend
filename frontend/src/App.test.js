// import React from "react";
import {
  render
} from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import UserForm from "./components/UserForm";
import "@testing-library/jest-dom/extend-expect";
import { act } from 'react-dom/test-utils';

test("renders UserForm", () => {
  const {getByText} = render(    <MemoryRouter initialEntries={["/fpc/2"]}>
  <UserForm />
</MemoryRouter>
)
  const linkElement = getByText(/Preencha a seguir o formulário pré-consulta/i)
  expect(linkElement).toBeInTheDocument();
});

test("navigates home when you click the logo", () => {
  // in a real test a renderer like "@testing-library/react"
  // would take care of setting up the DOM elements
  render(<MemoryRouter initialEntries={["/fpc/2"]}>
  <UserForm />
</MemoryRouter>
)


  // Interact with page
  act(() => {
    // PRIMEIRA PAGINA DE PRE CONSULTA
    const goHomeLink = document.querySelector(".MuiButton-root");
    // Click it
    goHomeLink.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });
  // Check correct page content showed up
  expect(document.body.textContent).toContain("Pré Consulta");

  act(() => {
    // SEGUNDA PAGINA DE PRE CONSULTA
    const goHomeLink = document.querySelector(".MuiButton-root");
    // Click it
    goHomeLink.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });
  expect(document.body.textContent).toContain("Permaneça parado por pelo");

  act(() => {
    // nOS CONTE SOBRE VOCE
    const goHomeLink = document.querySelector(".MuiButton-containedPrimary");
    // Click it
    goHomeLink.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });
  expect(document.body.textContent).toContain("Nos conte sobre");
  expect(document.body.textContent).not.toContain("Favor");
  act(() => {
    // nOS CONTE SOBRE VOCE
    const goHomeLink = document.querySelector(".MuiButton-containedPrimary");
    // Click it
    goHomeLink.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });
  expect(document.body.textContent).not.toContain("Favor Preencher");

});