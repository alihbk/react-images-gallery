import React, { useEffect, useState } from "react";
import CustomImageGallery from "../components/customImageGallery/customImageGallery";
import { getImagesFromServer } from "../utility/imagesFunctions";
import { useInterval } from "../customHook/useInterval";
import imageService from "../services/imageService";

const ImagesPages = () => {
  const [data, setdata] = useState([]);

  useInterval(() => {
    (async () => {
      let result = await getImagesFromServer();
      if (result) setdata(result);
    })();
  }, 60000);

  return (
    <div>
      <CustomImageGallery images={data} />
    </div>
  );
};

export default ImagesPages;
