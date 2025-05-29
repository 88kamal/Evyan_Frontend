import React from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";

const promoters = [
  {
    name: "Mr. Praveen Kumar",
    title: "Director",
    description:
      `We have Mr. Praveen Kumar as one of our Direc
tors, a NRI Business Person with a  business 
presence in Russia, The UAE and The UK, etc. His 
strategic thinking, innovative approaches,  experi
ence and expertise has made him to tap into the 
diverse markets, attract more clients, and create 
huge opportunities for expansion and innovation.`,
  },
  {
    name: "Mr. Pranav Bhardwaj",
    title: "Director",
    description: `Secondly, we have Mr. Pranav Bhardwaj as the 
other director, having diverse manufacturing 
experience in the bustling industry of India. With 
Mr. Bhardwaj leadership and strategic vision at 
the forefront, our operations will run smoothly 
and efficiently, delivering high-quality products to 
our valued customers.
`
  },
];

const PromotersProfile = () => {
  return (
    <section className="py-10 bg-gray-50 px-4 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <Typography variant="h3" className="text-center font-bold mb-8 text-gray-800">
          Promoters Profile
        </Typography>

        <div className="grid md:grid-cols-2 gap-6">
          {promoters.map((promoter, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition duration-300">
              <CardBody>
                <Typography variant="h5" className="mb-2 font-semibold text-blue-700">
                  {promoter.name}
                </Typography>
                <Typography variant="small" className="mb-4 text-gray-600 italic">
                  {promoter.title}
                </Typography>
                <Typography className="text-gray-700 text-justify">
                  {promoter.description}
                </Typography>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromotersProfile;
