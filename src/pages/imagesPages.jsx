import React, { useEffect, useState } from "react";
import CustomImageGallery from "../components/customImageGallery/customImageGallery";
import { useInterval } from "../customHook/useInterval";
import imageService from "../services/imageService";

const ImagesPages = () => {
  const [data, setdata] = useState([]);

  useInterval(() => {
    (async () => {
      await getImagesFromServer();
    })();
  },60000);

  // useEffect(() => {
  //   (async () => {
  //     await getImages();
  //   })();
  // }, []);

  const getImagesFromServer = async () => {
    try {
      let result = await imageService.getImages();
      console.log("length", result.data.length);
      if (result.status === 200) {
        let images = result.data.splice(0, 10);
        setdata(images);
      }
    } catch (e) {
      console.log("e", e);
    }
  };

  return (
    <div>
      <CustomImageGallery images={data} />
    </div>
  );
};

export default ImagesPages;
