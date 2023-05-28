const ImageGrid = () => {
  return (
    <div className="container mx-auto max-w-7xl ">
      <div className="mx-2 flex flex-row flex-wrap">
        <div className="relative mb-4 h-64 w-full px-2 md:h-auto md:w-1/2">
          <img
            className="block h-full w-full rounded-md object-cover"
            href="#"
            title="Link"
            src="./spain.jpg"
          />
          <div className="absolute left-0 top-0 p-4">
            <span className="rounded-md bg-main bg-opacity-50 p-2 font-header text-xl font-semibold text-white">
              Spain
            </span>
          </div>
        </div>
        <div className="mb-4 w-full px-2 md:w-1/2">
          <div className="-mx-2 flex flex-col sm:flex-row md:flex-col">
            <div className="relative mb-4 h-48 w-full px-2 sm:mb-0 sm:w-1/2 md:mb-4 md:w-full xl:h-64">
              <img
                className="block h-full w-full rounded-md object-cover"
                href="#"
                title="Link"
                src="./norway.jpg"
              />
              <div className="absolute left-0 top-0 p-4">
                <span className="rounded-md bg-main bg-opacity-50 p-2 font-header text-xl font-semibold text-white">
                  Norway
                </span>
              </div>
            </div>
            <div className="relative h-48 w-full px-2 sm:w-1/2 md:w-full xl:h-64">
              <img
                className="block h-full w-full rounded-md object-cover"
                href="#"
                title="Link"
                src="./england.jpg"
              />
              <div className="absolute left-0 top-0 p-4">
                <span className="rounded-md bg-main bg-opacity-50 p-2 font-header text-xl font-semibold text-white">
                  England
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="relative mb-4 h-32 w-full px-2 sm:mb-0 sm:w-1/3 md:h-48">
          <img
            className="block h-full w-full rounded-md object-cover"
            href="#"
            title="Link"
            src="./danmark.jpg"
          />
          <div className="absolute left-0 top-0 p-4">
            <span className="rounded-md bg-main bg-opacity-50 p-2 font-header text-xl font-semibold text-white">
              Danmark
            </span>
          </div>
        </div>
        <div className="relative mb-4 h-32 w-full px-2 sm:mb-0 sm:w-1/3 md:h-48">
          <img
            className="block h-full w-full rounded-md object-cover"
            href="#"
            title="Link"
            src="./iceland.jpg"
          />
          <div className="absolute left-0 top-0 p-4">
            <span className="rounded-md bg-main bg-opacity-50 p-2 font-header text-xl font-semibold text-white">
              Iceland
            </span>
          </div>
        </div>
        <div className="relative h-32 w-full px-2 sm:w-1/3 md:h-48">
          <img
            className="block h-full w-full rounded-md object-cover"
            href="#"
            title="Link"
            src="./italy.jpg"
          />
          <div className="absolute left-0 top-0 p-4">
            <span className="rounded-md bg-main bg-opacity-50 p-2 font-header text-xl font-semibold text-white">
              Italy
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGrid;
