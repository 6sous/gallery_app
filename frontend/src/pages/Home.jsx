import { useState } from "react";
import CatButton from "../components/CatButton";
import photoGallery from "../data";
import "./Home.scss";
import SearchInput from "../components/SearchInput";
import DescriptionModal from "../components/DescriptionModal";

function Home() {
  //   state permettant de contrôler la valeur des boutons et de la barre de recherche
  const [buttonValue, setButtonValue] = useState("");
  const [searchValue, setSearchValue] = useState("");
  //   state boolean permettant de savoir si le composant DescriptionModal est ouvert
  const [isOpen, setIsOpen] = useState(false);
  //   state permettant de transmettre les informations relatives à une photo au composant DescriptionModal
  const [photoInfo, setPhotoInfo] = useState({});

  //   récupération des catégories. new Set() permet de retirer les doublons du tableau passé en paramètre
  const categories = photoGallery.map((el) => el.category.toLowerCase());
  const uniqueCategories = [...new Set(categories)];

  /**
  |--------------------------------------------------
  | return du composant
  |--------------------------------------------------
  */

  return (
    <div className="home-container">
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
        {/* Affichage des photos en fonction de la valeur de buttonValue et de la valeur de searchValue.
        Si buttonValue est vide, on affiche toutes les photos dont une des valeurs de l'object photo inclue la valeur de searchValue. */}
        {photoGallery
          .filter((photo) => {
            return buttonValue
              ? photo.category.toLowerCase() === buttonValue
              : Object.values(
                  photo
                ) /* Object est un objet natif contenant entre autres la méthode values qui permet de récupérer toutes les VALEURS de l'objet photo */
                  .toString() /* conversion en chaîne de caractères */
                  .toLowerCase() /* transformation d'une strig en minuscules */
                  .includes(searchValue);
          })
          .map((photo) => (
            <button
              type="button"
              onClick={() => {
                setIsOpen(true);
                setPhotoInfo(photo);
              }}
              key={photo.id}
            >
              <img className="photo" src={photo.url} alt={photo.name} />
            </button>
          ))}
      </div>
      {isOpen && (
        <DescriptionModal
          setIsOpen={setIsOpen}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...photoInfo} /* ...destructuration de l'object à l'aide d'une spread opérator */
        />
      )}
    </div>
  );
}

export default Home;
