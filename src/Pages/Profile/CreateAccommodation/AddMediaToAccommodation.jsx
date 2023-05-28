import PropTypes from 'prop-types';

const AddMediaToAccommodation = ({ formik, mediaArray, setMediaArray }) => {
  function pushToMediaArray() {
    const mediaValue = document.getElementById('media').value;
    const urlRegex = /(ftp|http|https):\/\/[^ "]+$/;
    if (urlRegex.test(mediaValue)) {
      const newMediaArray = [...mediaArray, mediaValue];
      setMediaArray(newMediaArray);
      document.getElementById('media').value = '';
    } else {
      return null;
    }
  }

  function deleteMedia(media) {
    const newMediaArray = mediaArray.filter((item) => item !== media);
    setMediaArray(newMediaArray);
  }

  return (
    <div className="my-8 flex flex-col items-start">
      <label
        htmlFor="Images"
        className="block font-paragraph text-sm font-medium leading-6 text-gray-900"
      >
        Images
      </label>
      {mediaArray && (
        <div className="mt-4 flex flex-wrap gap-4">
          {mediaArray.map((media) => (
            <div key={media} className="relative h-24 w-24 rounded-md">
              <img
                src={media}
                alt="Images of the Accommodation"
                className="block h-full w-full rounded-md leading-6"
              />
              <button
                type="button"
                onClick={() => deleteMedia(media)}
                className="absolute bottom-0 right-0 z-10 rounded-md bg-red-700 p-1 text-xs text-white"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="mt-2 w-full">
        <input
          type="text"
          name="media"
          id="media"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Add valid Image url here"
          className="block w-full rounded-md border-0 px-2 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
        />
        <div className="flex justify-end">
          <button
            type="button"
            onClick={pushToMediaArray}
            className="mt-4 place-self-end rounded bg-main px-4 py-2 font-semibold text-white hover:bg-hovercolor"
          >
            Add
          </button>
        </div>
      </div>
      {formik.touched.media && formik.errors.media ? (
        <div className="text-red-600">{formik.errors.media}</div>
      ) : null}
    </div>
  );
};

AddMediaToAccommodation.propTypes = {
  formik: PropTypes.object.isRequired,
  mediaArray: PropTypes.array.isRequired,
  setMediaArray: PropTypes.func.isRequired,
};

export default AddMediaToAccommodation;
