import { useParams } from "react-router-dom";

import { AppDispatch } from "@redux/store";

import SliderDesc from "./SliderDesc";
import RatingStars from "@components/ratingStars/RatingStars";

import Loading from "@components/loading/Loading";
import Error from "@components/error/Error";

import formatter from "@utils/formatPrice";

import { useDispatch } from "react-redux";
import { addProductToCart } from "@redux/cart/actions";

import GetProductPerId from "@api/GetProductPerId";
import { ProductType } from "@/model/@types/TypeProduct";

import CardComment from "@/ui/components/cardComment/CardComment";
import ProductRelated from "./ProductRelated";

const ProductDetails: React.FC = () => {
  const { productId } = useParams();
  const dispatch: AppDispatch = useDispatch();

  const {data: detailsProduct, error, isLoading,} = GetProductPerId(productId || "");

  if (isLoading) return <Loading />;
  if (error) return <Error />;

  const discount: number =
    ((detailsProduct?.discountPercentage as number) / 100) *
    (detailsProduct?.price as number);

  function handleProductClick(product: ProductType) {
    dispatch(addProductToCart(product));
  }

  return (
    <main className="min-h-screen p-2 md:p-6 flex flex-col text-lg space-y-6">
      {detailsProduct && (
        <section className="flex flex-col lg:flex-row items-center w-full min-h-[31rem] bg-white p-2 rounded-lg shadow-xl">
          <SliderDesc
            images={detailsProduct.images}
            thumbnail={detailsProduct.thumbnail}
          />

          <div className="p-6">
            <h2 className="text-xl md:text-2xl">{detailsProduct.title}</h2>

            <div className="my-6 flex gap-x-2 items-center">
              <div>
                {detailsProduct?.discountPercentage && (
                  <span className="text-red-700 line-through text-sm md:text-base">
                    {formatter.format(detailsProduct?.price)}
                  </span>
                )}
                <p className="text-2xl md:text-4xl xl:text-5xl">
                  {formatter.format(detailsProduct.price - discount)}
                </p>
              </div>

              <RatingStars
                rating={detailsProduct.rating}
                classNames="md:text-xl"
              />
            </div>

            <button
              onClick={() => handleProductClick(detailsProduct)}
              className="flex justify-between py-2 px-6 rounded-md bg-green-700 hover:bg-green-600"
            >
              Add to Cart
            </button>

            <div className="flex flex-col gap-y-4 md:gap-0 md:flex-row mt-4">

              <div className="md:w-1/2">
                <h2 className="mb-4 text-lg text-gray-800">Product Information</h2>

                <ul className="list-disc ps-5 space-y-2 break-words">
                  <li>{detailsProduct.availabilityStatus}.</li>
                  <li>{detailsProduct.shippingInformation}.</li>
                  <li>{detailsProduct.warrantyInformation}.</li>
                  <li>Stock: {detailsProduct.stock}.</li>
                  {detailsProduct.price && (
                    <li>Value economized: {formatter.format(discount)}.</li>
                  )}
                </ul>
              </div>

              <div className="md:w-1/2">
                <h2 className="mb-4 text-lg text-gray-800">Product Information</h2>
                <p>{detailsProduct.description}</p>
              </div>

            </div>
          </div>
        </section>
      )}

      {detailsProduct && (
        <section className="bg-white rounded-lg">
      
          <hr className="my-6 w-1/2 mx-auto" />

          <ProductRelated categoryName={detailsProduct.category}/>

          <hr className="my-6 w-1/2 mx-auto" />

          <h2 className="text-2xl p-4">Comments</h2>

          <div className="space-y-4">
            {detailsProduct &&
              detailsProduct.reviews.map((review, i) => (
                <CardComment key={review.reviewerName + i} review={review} />
              ))}
          </div>

        </section>
      )}
    </main>
  );
};
export default ProductDetails;
