import { apiKey } from "../../constants/apiKey";

export default async function fetchImages(searchValue) {
  try {
    let formattedSearchValue = searchValue.split(" ").join("+");
    let images = await fetch(
      `https://pixabay.com/api/?key=${apiKey}&q=${formattedSearchValue}&image_type=photo`
    )
      .then((r) => r.json())
      .then((data) => data.hits.splice(0, 8));
    return images;
  } catch (e) {
    return null;
  }
}
