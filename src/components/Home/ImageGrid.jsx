import React from 'react';

const ImageGrid = () => {
  return (
    <div className="container mx-auto p-8 max-w-7xl ">
      <div className="flex flex-row flex-wrap -mx-2">
        <div className="w-full md:w-1/2 h-64 md:h-auto mb-4 px-2 relative">
          <img
            className="block w-full h-full object-cover rounded-md"
            href="#"
            title="Link"
            src="./herobanner-image.jpg"
          />
          <div className="absolute top-0 left-0 p-4">
            <span className="text-white text-xl font-semibold font-header bg-main bg-opacity-50 p-2 rounded-md">
              Spain
            </span>
          </div>
        </div>
        <div className="w-full md:w-1/2 mb-4 px-2">
          <div className="flex flex-col sm:flex-row md:flex-col -mx-2">
            <div className="w-full sm:w-1/2 md:w-full h-48 xl:h-64 mb-4 sm:mb-0 md:mb-4 px-2 relative">
              <img
                className="block w-full h-full object-cover rounded-md"
                href="#"
                title="Link"
                src="./herobanner-image.jpg"
              />
              <div className="absolute top-0 left-0 p-4">
                <span className="text-white text-xl font-semibold font-header bg-main bg-opacity-50 p-2 rounded-md">
                  Norway
                </span>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-full h-48 xl:h-64 px-2 relative">
              <img
                className="block w-full h-full rounded-md object-cover"
                href="#"
                title="Link"
                src="./herobanner-image.jpg"
              />
              <div className="absolute top-0 left-0 p-4">
                <span className="text-white text-xl font-semibold font-header bg-main bg-opacity-50 p-2 rounded-md">
                  England
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/3 h-32 md:h-48 mb-4 sm:mb-0 px-2 relative">
          <img
            className="block w-full h-full rounded-md object-cover"
            href="#"
            title="Link"
            src="./herobanner-image.jpg"
          />
          <div className="absolute top-0 left-0 p-4">
            <span className="text-white text-xl font-semibold font-header bg-main bg-opacity-50 p-2 rounded-md">
              Danmark
            </span>
          </div>
        </div>
        <div className="w-full sm:w-1/3 h-32 md:h-48 mb-4 sm:mb-0 px-2 relative">
          <img
            className="block w-full h-full rounded-md object-cover"
            href="#"
            title="Link"
            src="./herobanner-image.jpg"
          />
          <div className="absolute top-0 left-0 p-4">
            <span className="text-white text-xl font-semibold font-header bg-main bg-opacity-50 p-2 rounded-md">
              Iceland
            </span>
          </div>
        </div>
        <div className="w-full sm:w-1/3 h-32 md:h-48 px-2 relative">
          <img
            className="block w-full h-full rounded-md object-cover"
            href="#"
            title="Link"
            src="./herobanner-image.jpg"
          />
          <div className="absolute top-0 left-0 p-4">
            <span className="text-white text-xl font-semibold bg-main font-header bg-opacity-50 p-2 rounded-md">
              Italy
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGrid;
