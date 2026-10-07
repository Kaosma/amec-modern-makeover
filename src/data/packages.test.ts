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

describe("homepage service descriptions", () => {
  const openings: Record<string, string> = {
    "/counseling": "En bra budget handlar om mer än siffror – den skapar kontroll, framförhållning och bättre förutsättningar för att nå företagets mål.",
    "/declaration": "Vi hjälper er att hantera företagets skatter och deklarationer korrekt och i rätt tid.",
    "/accounting": "Vi tar hand om företagets löpande bokföring och ser till att affärshändelser registreras korrekt, strukturerat och i rätt tid.",
    "/reporting": "När räkenskapsåret är slut sammanställer och stämmer vi av företagets ekonomi för att upprätta ett korrekt bokslut.",
  };
  for (const [path, opening] of Object.entries(openings)) {
    it(`describes ${path} with the supplied copy`, () => {
      expect(homepageServices.find((entry) => entry.path === path)?.desc.startsWith(opening)).toBe(true);
    });
  }
  it("splits each description over at most three lines of card text", () => {
    for (const entry of homepageServices) expect(entry.desc.length).toBeLessThan(340);
  });
});
