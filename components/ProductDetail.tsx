export type productProps = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

export default function ProductDetail({
  title,
  price,
  description,
  category,
  image,
}: productProps) {
  const shortDesc = (description: string, maxWords = 20) => {
    const words = description.split(" ");

    // Check if the number of words is less than or equal to maxWords
    if (words.length <= maxWords) {
      return description;
    }

    // Join the first maxWords words into a string
    return words.slice(0, maxWords).join(" ") + "...";
  };
  const Desc = shortDesc(description, 20);
  console.log(Desc);

  console.log(description?.slice(0, 10));

  return (
    <div className="m-4 mx-auto max-w-screen-lg rounded-md border border-gray-100 text-gray-600 shadow-md">
      <div className="relative flex sm:h-full h-[80%] flex-col text-gray-600 md:flex-row">
        <div className="mx-auto flex items-center  px-5 pt-1 md:p-8 ">
          <img
            className="block md:h-auto h-[130px] pt-2 max-w-full  rounded-md shadow-lg"
            src={image}
            alt="Shop image"
          />
        </div>
        <div className="relative p-8 md:w-4/6">
          <div className="flex flex-col md:flex-row">
            <h2 className="mb-2 text-2xl font-black">
              {title.split(" ")[0] + " " + title.split(" ")[1]}
            </h2>
            <span className="ml-2 text-xs uppercase">
              {title.split(" ")[2] + " " + title.split(" ")[3]}
            </span>
          </div>
          <p className="mt-3 font-sans text-base tracking-normal">{Desc}.</p>
          <div className="flex flex-col md:flex-row md:items-end">
            <p className="mt-6 text-4xl font-black">
              ${price}
              <sup className="align-super text-sm">00</sup>
            </p>
            <span className="ml-2 text-xs uppercase">{category}</span>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row">
            <button className="mr-2 mb-4 flex cursor-pointer items-center justify-center rounded-md bg-emerald-400 py-2 sm:px-8 px-2 text-center text-white transition duration-150 ease-in-out hover:translate-y-1 hover:bg-emerald-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              Buy now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
