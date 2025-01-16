import { useState } from "react";

const servicesList = [
  {
    _id: "1",
    title: "dental formula",
    price: "Tzs 200/=",
    category: "dental",
    image:
      "https://cdn.pixabay.com/photo/2024/02/19/12/43/ai-generated-8583345_640.jpg",
  },
  {
    _id: "2",
    title: "Toot ache",
    price: "Tzs 400/=",
    category: "dental",
    image:
      "https://images.unsplash.com/photo-1667133295352-ef4c83620e8e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D",
  },
  {
    _id: "3",
    title: "Child Birth",
    price: "Tzs 300/=",
    category: "maternal",
    image:
      "https://images.unsplash.com/photo-1610401162132-95ea3e85d41c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW90aGVyJTIwYW5kJTIwYmFieXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    _id: "4",
    title: "Clinical services",
    price: "Tzs 200/=",
    category: "maternal",
    image:
      "https://cdn.pixabay.com/photo/2024/07/01/11/39/ai-generated-8865046_640.jpg",
  },
];

const ServiceSelectionPage = () => {
  const [isActive, setIsActive] = useState(false);
  const [isSelected, setIsSelected] = useState("1");

  const handleSelection = (id) => {
    if (id) {
      setIsSelected(id);
      setIsActive(!isActive);

      // console.log("Selected", isSelected);
    }
  };

  return (
    <div className="Dynamic_Page">
      {/* Widget_Page-1-(Services) */}
      <div className="centered-row justify-between">
        <h3 className="text-xl font-semibold tracking-tight text-blue-800">
          Select Service
        </h3>
        <div className="search bg-blue-50 centered-row px-2 rounded">
          <button
            type="submit"
            className="bg-transparent hover:bg-transparent hover:-translate-y-1 transition-all duration-200 ease-in"
          >
            <img src="/search_icon.svg" alt="icon" className="search w-7" />
          </button>
          <input
            type="text"
            placeholder="Search..."
            className="max-w-[120px] md:max-w-[300px] outline-none border-none bg-transparent  placeholder:text-zinc-500 text-zinc-800 p-2 placeholder:text-sm"
          />
        </div>
      </div>

      <hr className="mt-4" />

      {/* Dynamic Display Elements */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {/* Services */}
        {servicesList.map(({ _id, title, price, image }) => (
          <div
            key={_id}
            onClick={() => handleSelection(_id)}
            className={`w-full cursor-pointer border-[3px] ${
              isSelected === _id && "border-blue-300"
            } h-[280px]  lg:h-[220px] bg-white flex flex-col justify-center items-center gap-5 rounded-xl hover:shadow-2xl  hover:shadow-blue-200 transition-all duration-300 overflow-clip`}
          >
            <div className="img center-item w-full h-full bg-zinc-600  overflow-hidden">
              {/* <img src="/demo-img.png" alt="image" /> */}
              <img src={image} alt="image" />
            </div>
            <div className="text flex items-center flex-col">
              <div className="name font-semibold tracking-tight text-zinc-500/80 uppercase">
                {title}
              </div>
              <div className="price font-bold pb-2 text-blue-500">{price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceSelectionPage;
