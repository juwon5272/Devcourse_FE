import { useEffect, useState } from "react";
import { Category } from "../models/category.model";
import { fetchCategory } from "../api/category.api";
import { useLocation } from "react-router-dom";

export const useCategory = () => {
  const location = useLocation();
  const [category, setCategory] = useState<Category[]>([]);

  const setActive = () => {
    const params = new URLSearchParams(location.search);

    const paramsNum = params.get("category_id");

    if (paramsNum) {
      setCategory((prev) => {
        return prev.map((item) => {
          return { ...item, isActive: item.id === Number(paramsNum) };
        });
      });
    } else {
      setCategory((prev) => {
        return prev.map((item) => {
          return { ...item, isActive: false };
        });
      });
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const categories = await fetchCategory();
        if (!categories) return;

        const categoryWithAll = [{ id: null, name: "전체" }, ...categories];

        setCategory(categoryWithAll);
        setActive();
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    setActive();
  }, [location.search]);

  return { category };
};
