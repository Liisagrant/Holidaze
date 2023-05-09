// import { useState } from 'react';

// const AddMediaToAccommodation = ({ formik }) => {
//   const [mediaArray, setMediaArray] = useState([]);

//   const { values, handleChange, handleBlur } = formik;

//   function pushToMediaArray() {
//     const mediaUrl = values.media.trim();
//     if (mediaUrl !== '') {
//       setMediaArray([...mediaArray, mediaUrl]);
//       formik.setFieldValue('media', '');
//     }
//   }

//   const deleteMedia = (mediaUrl) => {
//     const updatedMediaArray = mediaArray.filter((media) => media !== mediaUrl);
//     setMediaArray(updatedMediaArray);
//   };

//   return (
//     <div className="flex flex-col items-start">
//       <label
//         htmlFor="name"
//         className="block font-paragraph text-sm font-medium leading-6 text-gray-900"
//       >
//         Images
//       </label>
//       {mediaArray && (
//         <div className="flex gap-4 flex-wrap mt-4">
//           {mediaArray.map((media) => (
//             <div key={media} className="w-24 h-24 rounded-md relative">
//               <img
//                 src={media}
//                 alt="Images of the Accommodation"
//                 className="block leading-6 rounded-md w-full h-full"
//               />
//               <button
//                 type="button"
//                 onClick={() => deleteMedia(media)}
//                 className="absolute bottom-0 right-0 z-10 bg-red-700 rounded-md p-1 text-white text-xs"
//               >
//                 Remove
//               </button>
//             </div>
//           ))}
//         </div>
//       )}

//       <div className="mt-2 w-full">
//         <input
//           type="text"
//           name="media"
//           id="media"
//           onChange={handleChange}
//           onBlur={handleBlur}
//           value={values.media}
//           placeholder="Add valid Image url here"
//           className="block w-full rounded-md border-0 py-2 px-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
//         />
//         <div className="flex justify-end">
//           <button
//             type="button"
//             onClick={pushToMediaArray}
//             className="px-4 py-2 rounded bg-main hover:bg-hovercolor text-white mt-4 font-semibold place-self-end"
//           >
//             Add
//           </button>
//         </div>
//       </div>
//       {formik.touched.media && formik.errors.media ? (
//         <div className="text-red-600">{formik.errors.media}</div>
//       ) : null}
//     </div>
//   );
// };

// export default AddMediaToAccommodation;
