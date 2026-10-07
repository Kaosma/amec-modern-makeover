import { describe, expect, it } from "vitest";
import { packages } from "./packages";
import { homepageServices, services } from "./services";

describe("package requirements", () => {
  const solo = packages.find((entry) => entry.id === "solo");
  it("requires an aktiebolag for every package", () => {
    expect(packages.map((entry) => entry.eligibility.companyType)).toEqual(["aktiebolag", "aktiebolag", "aktiebolag"]);
  });
  it("limits Solo to one employee", () => expect(solo?.eligibility.maxEmployees).toBe(1));
  it("limits Solo to 20 monthly vouchers", () => expect(solo?.eligibility.maxMonthlyVouchers).toBe(20));
  it("limits Solo to 2 Mkr yearly revenue", () => expect(solo?.eligibility.maxAnnualRevenue).toBe(2_000_000));
  it("limits Gastro to restaurant, café or bar businesses", () => {
    expect(packages.find((entry) => entry.id === "gastro")?.eligibility.industries).toEqual(["restaurang", "café", "bar"]);
  });
  it("requires construction activity for Entreprenad", () => {
    expect(packages.find((entry) => entry.id === "entreprenad")?.eligibility.industries).toEqual(["bygg"]);
  });
  it("does not publish any package price", () => {
    for (const entry of packages) expect(entry).not.toHaveProperty("price");
  });
});

describe("service visibility", () => {
  it("includes leadership in the complete service list", () => {
    expect(services.some((entry) => entry.path === "/ledarskap")).toBe(true);
  });
  it("keeps only the four accounting services on the homepage", () => {
    expect(homepageServices.map((entry) => entry.path)).toEqual(["/counseling", "/declaration", "/accounting", "/reporting"]);
  });
});