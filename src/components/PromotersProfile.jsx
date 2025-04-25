import React from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";

const promoters = [
  {
    name: "Mr. Praveen Kumar",
    title: "Director",
    description:
      "Mr. Praveen Kumar is a visionary entrepreneur and NRI business leader with a strong presence across Russia, the UAE, the UK, and other global markets. His international expertise and strategic foresight have fueled our global growth, innovation, and market expansion.",
  },
  {
    name: "Mr. Pranav Bhardwaj",
    title: "Director",
    description:
      "Mr. Pranav Bhardwaj brings rich experience from India’s manufacturing sector. With his sharp operational skills and leadership, we maintain high product quality, seamless execution, and continual process improvement across all business verticals.",
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
