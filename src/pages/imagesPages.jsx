import React, { useEffect, useState } from "react";
import CustomImageGallery from "../components/customImageGallery/customImageGallery";
import { getImagesFromServer } from "../utility/imagesFunctions";
import { useInterval } from "../customHook/useInterval";
import imageService from "../services/imageService";

const ImagesPages = () => {
  const [data, setdata] = useState([]);

  useInterval(() => {
    (async () => {
      await getImagesFromServer();
    })();
  }, 60000);

  return (
    <div>
      <CustomImageGallery images={data} />
    </div>
  );
};

export default ImagesPages;
