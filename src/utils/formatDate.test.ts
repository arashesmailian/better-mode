import { formatDate } from "./formatDate";

describe("formatDate", () => {
  it("should format the date correctly", () => {
    const dateString = "2023-10-01T00:00:00Z";
    const formattedDate = formatDate(dateString);
    expect(formattedDate).toBe("01 October 23");
  });

  it("should handle different date formats", () => {
    const dateString = "2023-01-15T00:00:00Z";
    const formattedDate = formatDate(dateString);
    expect(formattedDate).toBe("15 January 23");
  });

  it("should handle invalid date strings gracefully", () => {
    const dateString = "invalid-date";
    const formattedDate = formatDate(dateString);
    expect(formattedDate).toBe("Invalid Date");
  });
});
