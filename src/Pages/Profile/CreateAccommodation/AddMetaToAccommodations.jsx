const AddMetaToAccommodations = ({ formik }) => {
  return (
    <>
      <h3 className="font-paragraph text-center">
        What kind of facilities does your place have?
      </h3>
      <div className="flex justify-center space-x-4">
        {[
          { id: 'wifi', icon: '/WifiHigh.svg', label: 'WiFi' },
          { id: 'parking', icon: '/Car.svg', label: 'Parking' },
          { id: 'pets', icon: '/Cat.svg', label: 'Pets' },
          { id: 'breakfast', icon: '/ForkKnife.svg', label: 'Breakfast' },
        ].map(({ id, icon, label }) => (
          <div key={id} className="flex flex-col items-center space-y-2">
            <label htmlFor={id}>
              <div className="bg-lightblue rounded-full p-2 m-2">
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
    </>
  );
};

export default AddMetaToAccommodations;
