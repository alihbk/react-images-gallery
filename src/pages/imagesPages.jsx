import React, { useEffect, useState } from "react";
import CustomImageGallery from "../components/customImageGallery/customImageGallery";
import imageService from "../services/imageService";

const ImagesPages = () => {
  
  const [data, setdata] = useState([]);

  useEffect(() => {
    (async () => {
      await getImages();
    })();
  }, []);

  const getImages = async () => {
    let result = await imageService.getImages();
    if (result.status === 200) {
      let images = result.data.splice(0, 10);
      setdata(images);
    }
  };

  return (
    <div>
      <CustomImageGallery images={data} />
    </div>
  );
};

export default ImagesPages;
