import Banner from "./banner";
import Categories from "./category/Categories";
import Main from "./Main";
import Top from "./top";

const Header = ({ onCategoryChange, onSearchChange }) => {
  return (
    <div className="w-full">
      <div className="flex flex-col w-full">
        <Banner />
        <div className="m-[0px_20px] md:m-[0px_170px]">
          <Top />
          <Main
            onCategoryChange={onCategoryChange}
            onSearchChange={onSearchChange}
          />
        </div>
        <Categories onCategoryChange={onCategoryChange} />
      </div>
    </div>
  );
};

export default Header;
