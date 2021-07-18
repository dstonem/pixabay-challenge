import { useState } from "react";
import fetchImages from "../helpers/fetchImages";

export default function useFetchImages() {
  const [imagePreviewList, setImagePreviewList] = useState([]);

  async function getImages(searchValue) {
    try {
      if (searchValue) {
        let images = await fetchImages(searchValue);
        setImagePreviewList(images);
      } else {
        setImagePreviewList([]);
      }
    } catch (e) {
      return null;
    }
  }

  return [imagePreviewList, getImages];
}
