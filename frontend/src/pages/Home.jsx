import { useState } from "react";
import CatButton from "../components/CatButton";
import photoGallery from "../data";
import "./Home.scss";
import SearchInput from "../components/SearchInput";

function Home() {
  const [buttonValue, setButtonValue] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const categories = photoGallery.map((el) => el.category.toLowerCase());
  const uniqueCategories = [...new Set(categories)];

  return (
    <>
      <SearchInput
        setButtonValue={setButtonValue}
        setSearchValue={setSearchValue}
      />
      <div className="buttons">
        {uniqueCategories.map((cat) => {
          return (
            <CatButton key={cat} setButtonValue={setButtonValue} cat={cat} />
          );
        })}
      </div>
      <div className="gallery">
        {photoGallery
          .filter((photo) => {
            return buttonValue
              ? photo.category.toLowerCase() === buttonValue
              : Object.values(photo)
                  .toString()
                  .toLowerCase()
                  .includes(searchValue);
          })
          .map((photo) => (
            <div key={photo.id}>
              <img className="photo" src={photo.url} alt={photo.name} />
            </div>
          ))}
      </div>
    </>
  );
}

export default Home;
