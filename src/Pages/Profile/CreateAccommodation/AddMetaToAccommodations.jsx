import PropTypes from 'prop-types';
const AddMetaToAccommodations = ({ formik }) => {
  return (
    <>
      <div className="my-8">
        <h3 className="mt-16 text-center font-paragraph">
          What kind of facilities does your place have?
        </h3>
        <div className="mt-8 flex justify-center space-x-4">
          {[
            { id: 'wifi', icon: '/WifiHigh.svg', label: 'WiFi' },
            { id: 'parking', icon: '/Car.svg', label: 'Parking' },
            { id: 'pets', icon: '/Cat.svg', label: 'Pets' },
            { id: 'breakfast', icon: '/ForkKnife.svg', label: 'Breakfast' },
          ].map(({ id, icon, label }) => (
            <div key={id} className="flex flex-col items-center space-y-2">
              <label
                htmlFor={id}
                className="flex flex-col items-center justify-center"
              >
                <div className="m-2 rounded-full bg-lightblue p-2">
                  <img src={icon} alt={label} className="h-4 w-4" />
                </div>
                <span className="text-xs">{label}</span>
              </label>
              <input
                type="checkbox"
                id={id}
                name={`meta.${id}`}
                checked={formik.values.meta[id]}
                onChange={(event) =>
                  formik.setFieldValue(`meta.${id}`, event.target.checked)
                }
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

AddMetaToAccommodations.propTypes = {
  formik: PropTypes.shape({
    values: PropTypes.object.isRequired,
    setFieldValue: PropTypes.func.isRequired,
  }).isRequired,
};

export default AddMetaToAccommodations;
