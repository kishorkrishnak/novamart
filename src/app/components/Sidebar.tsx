"use client";

import { setSelectedCategory, togglePriceRange } from "@/redux/novaSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { getCategories, getPriceRange } from "@/utils/getBannerData";
import { uid } from "react-uid";

const Sidebar = () => {
  const categories = getCategories();
  const priceRanges = getPriceRange();
  const selectedCategory = useAppSelector(
    (state) => state.nova.selectedCategory
  );
  const dispatch = useAppDispatch();

  return (
    <div className="py-6 px-5 border border-gray-200 w-[280px] h-fit sticky top-[78px] hidden lg:block">
      <h1 className="font-bold mb-3">CATEGORIES</h1>

      {categories.map((category) => (
        <div key={uid(category)} className="form-control">
          <label className="cursor-pointer label justify-start gap-3">
            <input
              checked={selectedCategory === category}
              onChange={() => {
                dispatch(setSelectedCategory(category));
              }}
              type="radio"
              className="radio radio-sm"
            />
            <span className="label-text">{category}</span>
          </label>
        </div>
      ))}

      <h1 className="font-bold mb-3 mt-3">Price</h1>

      {priceRanges.map((priceRange) => (
        <div key={uid(priceRange)} className="form-control">
          <label className="cursor-pointer label justify-start gap-3">
            <input
              onChange={() => {
                dispatch(togglePriceRange(priceRange));
              }}
              type="checkbox"
              className="checkbox checkbox-sm"
            />
            <span className="label-text">{priceRange}</span>
          </label>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
