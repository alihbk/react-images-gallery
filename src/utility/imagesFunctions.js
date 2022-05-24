import imageService from "../services/imageService";

export const getImagesFromServer = async () => {
  try {
    let result = await imageService.getImages();
    console.log("length", result.data.length);
    if (result.status === 200) {
      let images = result.data.splice(0, 10);
      return images;
    }
  } catch (e) {
    return null;
   }
};
