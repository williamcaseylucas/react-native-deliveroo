import { View, Text, ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
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
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Card 1" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Card 2" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Card 3" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Card 4" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Card 5" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Card 6" />
    </ScrollView>
  );
};

export default Categories;
