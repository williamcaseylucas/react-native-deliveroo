import { Text, Image, Pressable } from "react-native";
import React from "react";
import { urlFor } from "../sanity";

const CategoryCard = ({ imgUrl, title }) => (
  <Pressable className="relative mr-2">
    <Image
      source={{
        // uri: imgUrl,
        uri: urlFor(imgUrl).url(),
      }}
      className="h-20 w-20 rounded"
    />
    <Text className="absolute bottom-1 left-1 text-white font-bold">
      {title}
    </Text>
  </Pressable>
);

export default CategoryCard;
