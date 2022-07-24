import imageService from "../services/imageService";

export const getImagesFromServer = async () => {
  try {
    let result = await imageService.getImages();
    if (result.status === 200) {
      let images = result.data.splice(0, 10);
      return images;
    }
  } catch (e) {
    console.log("e", e);
    return null;
  }
};
