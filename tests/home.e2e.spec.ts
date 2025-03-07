import { test, expect } from "@playwright/test";
import * as dotenv from "dotenv";
dotenv.config();

test.describe("Home page", () => {
  test("should have correct metadata and elements", async ({ page }) => {
    await page.goto(process.env.FRONT_HOST!);

    await expect(page).toHaveTitle("Teddy Open Finance");
  });
});
