import "../App.css";

// import RenderRating from "./atoms/RenderRating";
import FormComment from "./molecules/FormComment";
import ProductInfo from "./molecules/ProductInfo";
// import AtomButton from "./atoms/AtomButton";

const Comment = () => {
  return (
    <div className="p-3 md:p-[25px] md:w-[730px] m-auto ">
      <h1 className="text-xl">Đánh giá sản phẩm</h1>

      <ProductInfo />

      <FormComment />
    </div>
  );
};

export default Comment;
