import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import sanityClient, { urlFor } from "../sanity";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    sanityClient.fetch(`*[_type == "category"]`).then((data) => {
      setCategories(data);
    });
  }, []);
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      // paddingHorizontal: 20,
      contentContainerStyle={{
        paddingTop: 10,
      }}
    >
      {/* Category Card */}
      {categories?.map((category) => (
        <CategoryCard
          key={category._id}
          imgUrl={category.image}
          title={category.name}
        />
      ))}
      {/* <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Card 1" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Card 2" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Card 3" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Card 4" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Card 5" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Card 6" /> */}
    </ScrollView>
  );
};

export default Categories;
