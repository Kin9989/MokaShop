import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { createReviewAction } from "../../../redux/slices/reviews/reviewsSlice";
import ErrorMsg from "../../ErrorMsg/ErrorMsg";
import LoadingComponent from "../../LoadingComp/LoadingComponent";
import SuccessMsg from "../../SuccessMsg/SuccessMsg";

export default function AddReview() {
  //Dispatch
  const dispatch = useDispatch();
  //get params
  const { id } = useParams();
  //---form data---
  const [formData, setFormData] = useState({
    rating: "",
    message: "",
  });

  //onChange
  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //onSubmit
  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(
      createReviewAction({
        id,
        message: formData.message,
        rating: formData.rating,
      })
    );
  };

  //get data from store
  const { loading, error, isAdded } = useSelector((state) => state?.reviews);

  return (
    <>
      {error && <ErrorMsg message={error?.message} />}
      {isAdded && <SuccessMsg message="Thanks for the review" />}
      <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Add Your Review
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            <p className="font-medium text-indigo-600 hover:text-indigo-500">
              You are reviewing:{" "}
              <span className="text-gray-900">Product Name</span>
            </p>
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={handleOnSubmit}>
              <div>
                <label
                  htmlFor="location"
                  className="block text-sm font-medium text-gray-700">
                  Rating
                </label>
                <select
                  value={formData.rating}
                  onChange={handleOnChange}
                  name="rating"
                  className={`mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base border-2 focus:outline-none focus:ring-indigo-500 sm:text-sm ${!formData.rating ? "text-gray-500" : "text-black"
                    }`}
                  defaultValue=""
                >
                  {/* Placeholder option */}
                  <option value="" disabled hidden>
                    Please select a rating
                  </option>

                  {/* Rating options */}
                  <option value="1" style={{ color: 'black' }}>1</option>
                  <option value="2" style={{ color: 'black' }}>2</option>
                  <option value="3" style={{ color: 'black' }}>3</option>
                  <option value="4" style={{ color: 'black' }}>4</option>
                  <option value="5" style={{ color: 'black' }}>5</option>
                </select>

              </div>
              {/* description */}
              <div>
                <label
                  htmlFor="comment"
                  className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <div className="mt-1">
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleOnChange}
                    className="block w-full rounded-md p-2 border-gray-300 border shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                {loading ? (
                  <LoadingComponent />
                ) : (
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                    Add New Review
                  </button>
                )}
              </div>


            </form>
          </div>
        </div>
      </div>
    </>
  );
}