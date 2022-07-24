import { getImagesFromServer } from "./imagesFunctions";

describe("get images", () => {
  it("call getImages from server", async () => {
    let images = await getImagesFromServer();
    expect(images[0]).toHaveProperty("id");
    expect(images[0]).toHaveProperty("avatar_url");
  });
});
