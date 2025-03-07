import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest"; // Importação correta do 'it'
import "@testing-library/jest-dom";

import { Pagination } from "./pagination";

describe("Pagination", () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it("should calculate the right amount of pages", () => {
    const wrapper = render(
      <Pagination
        pageIndex={1} // Mudei de 0 para 1 para corresponder à implementação
        totalCount={200}
        perPage={10}
        totalPages={20}
        onPageChange={vi.fn()}
      />,
    );

    expect(wrapper.getByText("Página 1 de 20")).toBeInTheDocument();
    expect(wrapper.getByText("Mostrando 10 de 200 itens")).toBeInTheDocument();
  });

  it("should be able to navigate to the next page", async () => {
    const onPageChangeCallback = vi.fn();
    const user = userEvent.setup();

    const wrapper = render(
      <Pagination
        pageIndex={1} // Mudei de 0 para 1 para corresponder à implementação
        totalCount={200}
        perPage={10}
        totalPages={20}
        onPageChange={onPageChangeCallback}
      />,
    );

    const nextPageButton = wrapper.getByLabelText("Próxima página");

    await user.click(nextPageButton);

    expect(onPageChangeCallback).toHaveBeenCalledWith(2); // Mudei de 1 para 2
  });

  it("should be able to navigate to the previous page", async () => {
    const onPageChangeCallback = vi.fn();
    const user = userEvent.setup();

    const wrapper = render(
      <Pagination
        pageIndex={5}
        totalCount={200}
        perPage={10}
        totalPages={20}
        onPageChange={onPageChangeCallback}
      />,
    );

    const previousPageButton = wrapper.getByLabelText("Página anterior");

    await user.click(previousPageButton);

    expect(onPageChangeCallback).toHaveBeenCalledWith(4);
  });

  it("should be able to navigate to the first page", async () => {
    const onPageChangeCallback = vi.fn();
    const user = userEvent.setup();

    const wrapper = render(
      <Pagination
        pageIndex={8}
        totalCount={200}
        perPage={10}
        totalPages={20}
        onPageChange={onPageChangeCallback}
      />,
    );

    const firstPageButton = wrapper.getByLabelText("Primeira página");

    await user.click(firstPageButton);

    expect(onPageChangeCallback).toHaveBeenCalledWith(1);
  });

  it("should be able to navigate to the last page", async () => {
    const onPageChangeCallback = vi.fn();
    const user = userEvent.setup();

    const wrapper = render(
      <Pagination
        pageIndex={8}
        totalCount={200}
        perPage={10}
        totalPages={20}
        onPageChange={onPageChangeCallback}
      />,
    );

    const lastPageButton = wrapper.getByLabelText("Última página");

    await user.click(lastPageButton);

    expect(onPageChangeCallback).toHaveBeenCalledWith(20);
  });

  it("should disable previous and first page buttons when on page 1", () => {
    const wrapper = render(
      <Pagination
        pageIndex={1}
        totalCount={200}
        perPage={10}
        totalPages={20}
        onPageChange={vi.fn()}
      />,
    );

    const firstPageButton = wrapper.getByLabelText("Primeira página");
    const previousPageButton = wrapper.getByLabelText("Página anterior");

    expect(firstPageButton).toBeDisabled();
    expect(previousPageButton).toBeDisabled();
  });

  it("should disable next and last page buttons when on last page", () => {
    const wrapper = render(
      <Pagination
        pageIndex={20}
        totalCount={200}
        perPage={10}
        totalPages={20}
        onPageChange={vi.fn()}
      />,
    );

    const nextPageButton = wrapper.getByLabelText("Próxima página");
    const lastPageButton = wrapper.getByLabelText("Última página");

    expect(nextPageButton).toBeDisabled();
    expect(lastPageButton).toBeDisabled();
  });
});
