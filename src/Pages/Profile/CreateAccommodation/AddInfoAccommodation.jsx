import PropTypes from 'prop-types';

const AddInfoAccommodation = ({ formik }) => {
  return (
    <>
      <div className="flex flex-col items-center">
        <svg
          width="150"
          height="50"
          viewBox="0 0 122 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.0411 9.008V26H11.7131V19.376H6.64909V26H1.32109V9.008H6.64909V15.128H11.7131V9.008H17.0411ZM27.7183 26.168C26.1183 26.168 24.6463 25.792 23.3023 25.04C21.9743 24.288 20.9183 23.248 20.1343 21.92C19.3503 20.592 18.9583 19.096 18.9583 17.432C18.9583 15.768 19.3503 14.272 20.1343 12.944C20.9183 11.616 21.9743 10.584 23.3023 9.848C24.6463 9.096 26.1183 8.72 27.7183 8.72C29.3183 8.72 30.7823 9.096 32.1103 9.848C33.4383 10.584 34.4863 11.616 35.2543 12.944C36.0383 14.272 36.4303 15.768 36.4303 17.432C36.4303 19.096 36.0383 20.592 35.2543 21.92C34.4863 23.248 33.4303 24.288 32.0863 25.04C30.7583 25.792 29.3023 26.168 27.7183 26.168ZM27.7183 21.2C28.7743 21.2 29.5903 20.864 30.1663 20.192C30.7423 19.504 31.0303 18.584 31.0303 17.432C31.0303 16.264 30.7423 15.344 30.1663 14.672C29.5903 13.984 28.7743 13.64 27.7183 13.64C26.6463 13.64 25.8223 13.984 25.2463 14.672C24.6703 15.344 24.3823 16.264 24.3823 17.432C24.3823 18.584 24.6703 19.504 25.2463 20.192C25.8223 20.864 26.6463 21.2 27.7183 21.2ZM43.6803 21.968H48.8163V26H38.3523V9.008H43.6803V21.968ZM55.821 9.008V26H50.493V9.008H55.821ZM65.3073 9.008C67.0833 9.008 68.6353 9.368 69.9633 10.088C71.3073 10.808 72.3393 11.808 73.0593 13.088C73.7793 14.368 74.1393 15.824 74.1393 17.456C74.1393 19.072 73.7793 20.528 73.0593 21.824C72.3393 23.12 71.3073 24.144 69.9633 24.896C68.6353 25.632 67.0833 26 65.3073 26H58.2273V9.008H65.3073ZM64.8273 21.248C66.0273 21.248 66.9793 20.92 67.6833 20.264C68.3873 19.608 68.7393 18.672 68.7393 17.456C68.7393 16.24 68.3873 15.304 67.6833 14.648C66.9793 13.992 66.0273 13.664 64.8273 13.664H63.5553V21.248H64.8273ZM86.9593 23.432H81.2953L80.4553 26H74.8633L81.0793 9.008H87.2233L93.4153 26H87.7993L86.9593 23.432ZM85.6633 19.424L84.1273 14.696L82.5913 19.424H85.6633ZM100.53 21.752H107.346V26H94.6258V21.992L101.346 13.232H94.6258V9.008H107.346V13.016L100.53 21.752ZM115.071 13.256V15.344H120.351V19.352H115.071V21.752H121.071V26H109.743V9.008H121.071V13.256H115.071Z"
            fill="#265399"
          />
        </svg>
        <h2 className="mt-4 text-2xl font-semibold font-header leading-relaxed tracking-tight text-gray-800">
          List your rental property today and start receiving inquiries!
        </h2>
        <p className="my-4 text-sm leading-7 font-paragraph text-gray-600">
          Let us simplify the process for you with some easy steps!
        </p>
      </div>
      <div className="my-4">
        <label
          htmlFor="name"
          className="block font-paragraph text-sm font-medium leading-6 text-gray-900"
        >
          Accommodation name
        </label>
        <div className="mt-2">
          <input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="What will you call your rental?"
            required
            className="block w-full rounded-md border-0 py-2 px-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="text-red-600 text-sm">{formik.errors.name}</div>
          ) : null}
        </div>
      </div>
      <div className="my-4">
        <label
          htmlFor="description"
          className="block font-paragraph text-sm font-medium leading-6 text-gray-900"
        >
          Description
        </label>
        <div className="mt-2">
          <textarea
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.description}
            placeholder="Enter a description that will make guests want to stay at your accommodation."
            id="description"
            name="description"
            type="text"
            autoComplete="description"
            rows="4"
            required
            className="block w-full rounded-md border-0 py-2 px-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          {formik.touched.description && formik.errors.description ? (
            <div className="text-red-600 text-sm">
              {formik.errors.description}
            </div>
          ) : null}
        </div>
      </div>
      <div className="flex flex-row w-full justify-between my-8">
        <div className="flex flex-col">
          <div className="mr-2">
            <label
              htmlFor="name"
              className="block font-paragraph text-sm font-medium leading-6 text-gray-900"
            >
              Continent
            </label>
            <div className="mt-2 mr-2">
              <input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.continent}
                id="continent"
                name="continent"
                type="text"
                autoComplete="continent"
                placeholder="What continent?"
                required
                className="block w-full rounded-md border-0 py-2 px-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {formik.touched.continent && formik.errors.continent ? (
                <div className="text-red-600 text-sm">
                  {formik.errors.continent}
                </div>
              ) : null}
            </div>
          </div>
          <div className="mr-2 mt-2">
            <label
              htmlFor="name"
              className="block font-paragraph text-sm font-medium leading-6 text-gray-900"
            >
              Address
            </label>
            <div className="mt-2 mr-2">
              <input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.address}
                id="address"
                name="address"
                type="text"
                autoComplete="address"
                placeholder="What is your address?"
                required
                className="block w-full rounded-md border-0 py-2 px-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {formik.touched.address && formik.errors.address ? (
                <div className="text-red-600 text-sm">
                  {formik.errors.address}
                </div>
              ) : null}
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div>
            <div className="ml-2">
              <label
                htmlFor="name"
                className="block font-paragraph text-sm font-medium leading-6 text-gray-900"
              >
                Country
              </label>
              <div className="mt-2">
                <input
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.country}
                  id="country"
                  name="country"
                  type="text"
                  autoComplete="country"
                  placeholder="In what country?"
                  required
                  className="block w-full rounded-md border-0 py-2 px-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {formik.touched.country && formik.errors.country ? (
                  <div className="text-red-600 text-sm">
                    {formik.errors.country}
                  </div>
                ) : null}
              </div>
            </div>
            <div>
              <div className="ml-2 mt-2">
                <label
                  htmlFor="name"
                  className="block font-paragraph text-sm font-medium leading-6 text-gray-900"
                >
                  City
                </label>
                <div className="mt-2">
                  <input
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.city}
                    id="city"
                    name="city"
                    type="text"
                    autoComplete="city"
                    placeholder="In what city?"
                    required
                    className="block w-full rounded-md border-0 py-2 px-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  {formik.touched.city && formik.errors.city ? (
                    <div className="text-red-600 text-sm">
                      {formik.errors.city}
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row my-4">
        <div className=" mr-2">
          <label
            htmlFor="maxGuests"
            className="block font-paragraph text-sm font-medium leading-6 text-gray-900"
          >
            Price
          </label>
          <div className="mt-2 mr-2">
            <input
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.price}
              id="price"
              name="price"
              type="number"
              min="1"
              placeholder="please enter how much Your place coast per night"
              required
              className="block w-full rounded-md border-0 py-2 px-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            {formik.touched.maxGuests && formik.errors.maxGuests ? (
              <div className="text-red-600 text-sm">
                {formik.errors.maxGuests}
              </div>
            ) : null}
          </div>
        </div>
        <div className=" ml-2">
          <label
            htmlFor="maxGuests"
            className="block font-paragraph text-sm font-medium leading-6 text-gray-900"
          >
            Maximum number of guests
          </label>
          <div className="mt-2">
            <input
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.maxGuests}
              id="maxGuests"
              name="maxGuests"
              type="number"
              min="1"
              required
              className="block w-full rounded-md border-0 py-2 px-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            {formik.touched.maxGuests && formik.errors.maxGuests ? (
              <div className="text-red-600 text-sm">
                {formik.errors.maxGuests}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

AddInfoAccommodation.propTypes = {
  formik: PropTypes.object.isRequired,
};

export default AddInfoAccommodation;
