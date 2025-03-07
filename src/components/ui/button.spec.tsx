import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import "@testing-library/jest-dom";

import { Button } from "./button";

describe("Button", () => {
  it("should render correctly with default props", () => {
    render(<Button>Click me</Button>);

    const button = screen.getByRole("button", { name: "Click me" });
    expect(button).toBeInTheDocument();
    expect(button).not.toBeDisabled();
    expect(button).not.toHaveAttribute("data-isloading", "true");
  });

  it("should render with different variants", () => {
    const { rerender } = render(<Button variant="default">Default</Button>);
    expect(screen.getByRole("button")).toHaveClass("bg-primary");

    rerender(<Button variant="destructive">Destructive</Button>);
    expect(screen.getByRole("button")).toHaveClass("bg-destructive");

    rerender(<Button variant="outline">Outline</Button>);
    expect(screen.getByRole("button")).toHaveClass("border-border");

    rerender(<Button variant="secondary">Secondary</Button>);
    expect(screen.getByRole("button")).toHaveClass("bg-secondary");

    rerender(<Button variant="ghost">Ghost</Button>);
    expect(screen.getByRole("button")).toHaveClass("hover:bg-accent");

    rerender(<Button variant="link">Link</Button>);
    expect(screen.getByRole("button")).toHaveClass("text-primary");
  });

  it("should render with different sizes", () => {
    const { rerender } = render(<Button size="default">Default Size</Button>);
    expect(screen.getByRole("button")).toHaveClass("h-9 px-4 py-2");

    rerender(<Button size="icon">Icon Size</Button>);
    expect(screen.getByRole("button")).toHaveClass("h-9 w-9");
  });

  it("should display loading state when isloading is true", () => {
    render(<Button isloading>Submit</Button>);

    const button = screen.getByRole("button");
    const loadingText = screen.getByText("Carregando...");
    const loadingIcon = button.querySelector(".animate-spin");

    expect(button).toBeDisabled();
    expect(button).toHaveAttribute("data-isloading", "true");
    expect(loadingText).toBeInTheDocument();
    expect(loadingIcon).toBeInTheDocument();
    expect(screen.queryByText("Submit")).not.toBeInTheDocument();
  });

  it("should not trigger onClick when in loading state", async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();

    render(
      <Button isloading onClick={handleClick}>
        Submit
      </Button>,
    );

    const button = screen.getByRole("button");
    await user.click(button);

    expect(handleClick).not.toHaveBeenCalled();
  });
});
