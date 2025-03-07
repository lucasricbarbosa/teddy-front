import { test, expect } from "@playwright/test";
import * as dotenv from "dotenv";
dotenv.config();

test.describe("Login", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${process.env.VITE_FRONT_HOST!}/login`);
  });

  test("should login and store user name in localStorage", async ({ page }) => {
    await expect(page.getByText("Olá, seja bem vindo!")).toBeVisible();

    const nomeUsuario = "João Silva";
    await page.getByPlaceholder("Digite seu nome").fill(nomeUsuario);

    await page.getByRole("button", { name: "Entrar" }).click();

    await page.waitForURL(process.env.VITE_FRONT_HOST!);

    const user = await page.evaluate(() => localStorage.getItem("user"));
    expect(user).toBe(nomeUsuario);
  });

  test("should show loading state on button during login", async ({ page }) => {
    await page.getByPlaceholder("Digite seu nome").fill("João Silva");

    await page.getByRole("button", { name: "Entrar" }).click();

    await expect(page.locator('button[data-isloading="true"]')).toBeDisabled();

    await page.waitForURL(process.env.VITE_FRONT_HOST!);
  });

  test("should redirect to home page after login", async ({ page }) => {
    await page.getByPlaceholder("Digite seu nome").fill("João Silva");

    await page.getByRole("button", { name: "Entrar" }).click();

    await page.waitForURL(process.env.VITE_FRONT_HOST!);
  });
});
