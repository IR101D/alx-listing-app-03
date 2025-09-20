import Layout from "@/components/layout/Layout";
import Filters from "@/components/layout/Filter";
import { PROPERTYLISTINGSAMPLE } from "@/constants";
import Card from "@/components/Common/Card";

export default function Home (){
  return (
    <main>
      <section className="max-w-7xl mx-auto mt-6 px-4">
        <Filters/>
      </section>
      <section className="relative -h-[80vh] w-full">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://source.unsplash.com/1600x900/?hotel,resort')`,
          }}
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Find your favorite place here!
          </h1>
          <p className="text-lg md:text-2xl text-white max-w-2xl">
            The best prices for over 2 million properties worldwide.
          </p>
        </div>
      </section>
       <section className="max-w-7xl mx-auto p-6 mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {PROPERTYLISTINGSAMPLE.map((property, idx) => (
          <Card key={idx} property={property} />
        ))}
      </section>
    </main>
  )
}