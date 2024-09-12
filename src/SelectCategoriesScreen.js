import "./SelectCategoriesScreen.css";

const SelectCategoriesScreen = () => {
    return (
        <div className="categoriesButtonContainer">
            <button className="geographyCategory">Geography</button>
            <button className="sportsCategory">Sports</button>
            <button className="musicCategory">Music</button>
            <button className="scienceCategory">Science</button>
        </div>

    )
}

export default SelectCategoriesScreen;