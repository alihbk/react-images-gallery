import React, { useState } from "react";
import Modal from "../modal/modal";
import styles from "./customImageGallery.module.scss";
import { arrowRight, leftArrow } from "../../utility/const";

const CustomImageGallery = ({ images }) => {
  const [imageToShow, setImageToShow] = useState("");
  const [isOpenModal, setIsOpenModal] = useState(false);
  const showImage = (image) => {
    setImageToShow(image);
    setIsOpenModal(true);
  };

  const hideLightBox = () => {
    setIsOpenModal(false);
  };

  const showNext = (e) => {
    e.stopPropagation();
    let currentIndex = images.indexOf(imageToShow);
    if (currentIndex >= images.length - 1) {
      setIsOpenModal(false);
    } else {
      let nextImage = images[currentIndex + 1];
      setImageToShow(nextImage);
    }
  };

  const showPrev = (e) => {
    e.stopPropagation();
    let currentIndex = images.indexOf(imageToShow);
    if (currentIndex <= 0) {
      setIsOpenModal(false);
    } else {
      let nextImage = images[currentIndex - 1];
      setImageToShow(nextImage);
    }
  };

  const renderImageViewer = () => {
    return (
      <div className={styles.lightbox} onClick={hideLightBox}>
        <img
          src={leftArrow}
          onClick={showPrev}
          width={20}
          height={25}
          alt="right"
        />
        <img className={styles.lightboximg} src={imageToShow.url} alt="some" />
        <img
          src={arrowRight}
          onClick={showNext}
          width={20}
          height={25}
          alt="left"
        />
      </div>
    );
  };

  return (
    <div className={styles.main}>
      {images.map((x) => {
        return (
          <img
            name="showModal"
            src={x.url}
            className={styles.imgMain}
            onClick={() => {
              setIsOpenModal(true);
              showImage(x);
            }}
            alt="some"
          />
        );
      })}
      {isOpenModal && (
        <Modal setIsOpen={setIsOpenModal}>{renderImageViewer()}</Modal>
      )}
    </div>
  );
};

export default CustomImageGallery;
