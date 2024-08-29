import React from "react";
import { ThumbsUp, UserCheck, ShoppingCart } from "lucide-react";

const WhyUs = () => {
  const features = [
    {
      title: "Easy Online Resume Builder",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium modi assumenda.",
      icon: <ThumbsUp className="w-8 h-8 text-blue-500" />,
    },
    {
      title: "Step By Step Expert Tips",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit skaj gjska consectetur adipisicing elit.",
      icon: <UserCheck className="w-8 h-8 text-orange-500" />,
    },
    {
      title: "Recruiter Approved Phrases",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium modi.",
      icon: <ShoppingCart className="w-8 h-8 text-green-500" />,
    },
  ];

  return (
    <div className=" container max-w-7xl mx-auto px-4 pt-20 pb-10 mb-10">
      <div className="flex flex-col md:flex-row md:space-x-8">
        <div className="md:w-1/2 space-y-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-md border shadow-sm p-6"
            >
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">{feature.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold text-navy-blue">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mt-1">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="md:w-1/2 mt-10 md:mt-0">
          <div className="flex justify-center md:justify-start space-x-2 mb-5">
            {[
              "bg-blue-500",
              "bg-red-500",
              "bg-yellow-500",
              "bg-green-500",
              "bg-indigo-500",
              "bg-purple-500",
              "bg-pink-500",
            ].map((color, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full ${color}`}
              ></div>
            ))}
          </div>
          <h2 className="text-3xl font-bold text-navy-blue mb-8">
            Why Choose Our Platform?
          </h2>
          <p className="text-gray-600 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
            dictum risus, non suscipit arcu. Quisque aliquam posuere tortor, sit
            amet convallis nunc scelerisque in.
          </p>
          <p className="text-gray-600 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Labore eius
            molestiae facere, natus reprehenderit eaque eum, autem ipsam. Magni,
            error. Tempora odit laborum iure inventore possimus laboriosam qui
            nam. Fugit!
          </p>
          <button
            style={{ backgroundColor: "#3e94e4" }}
            className=" hover:bg-blue-600 text-white text-sm font-bold py-2 px-4 rounded"
          >
            LETS BUILD YOUR CV
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
