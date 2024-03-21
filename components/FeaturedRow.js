import { View, Text, ScrollView } from "react-native";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import sanityClient from "../sanity";

const FeaturedRow = ({ id, title, description }) => {
  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    console.log("id", id);
    sanityClient
      .fetch(
        `
    *[_type == "featured" && _id == "${id}"
] {
  ...,
  restaurants[] -> {
    ...,
    dishes[] ->,
      type->{
        name
      }
  }
}[0]
    `
      )
      .then((data) => {
        setRestaurants((prev) => [...prev, data.restaurants][0]);
      });
  }, []);
  console.log("resteraunts", restaurants);
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between ">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>

      <Text className="text-xs text-gray-500">{description}</Text>

      <ScrollView
        horizontal
        // inner scrollview padding
        // contentContainerStyle={{ paddingHorizontal: 15 }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {/* Resteraunt Cards */}
        {restaurants?.map((resteraunt) => (
          <RestaurantCard
            key={resteraunt._id}
            id={resteraunt._id}
            imgUrl={resteraunt.image}
            title={resteraunt.name}
            rating={resteraunt.rating}
            genre={resteraunt.type.name}
            address={resteraunt.address}
            short_description={resteraunt.short_description}
            dishes={resteraunt.dishes}
            long={resteraunt.long}
            lat={resteraunt.lat}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
