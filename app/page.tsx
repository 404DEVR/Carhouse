

import { Hero, CustomFilter, SearchBar, Carcard } from "@/components";
import { fuels, yearsOfProduction } from "@/constants";
import { HomeProps } from "@/types";
import { fetchcars } from "@/utils";
import Image from "next/image";

export default async function Home({ searchParams }: HomeProps) {
  const allcars = await fetchcars({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
    model: searchParams.model || "",
  });

  const isdataEmpty = !Array.isArray(allcars) || allcars.length < 1 || !allcars;
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the car you might like</p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels} />
            <CustomFilter title="fuel" options={yearsOfProduction} />
          </div>
        </div>
        {!isdataEmpty ? (
          <section className="">
            <div className="home__cars-wrapper">
              {allcars.map((cars, index) => (
                <Carcard car={cars} index={index} />
              ))}
            </div>
          </section>
        ) : (
          <div className="home__error-container">
            <h1 className="text-black">Opps no cars found</h1>
          </div>
        )}
      </div>
    </main>
  );
}
