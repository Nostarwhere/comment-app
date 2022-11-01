import AtomImageHolder from "../atoms/AtomImageHolder";

const ProductInfo = () => {
  return (
    <div className="product-info mt-5 ">
      <div className="image-holder">
        <AtomImageHolder
          src={require("../../assets/photos/ava-1.png")}
          alt="product-image"
          className="h-[60px] md:h-[100px] mr-5 rounded-sm"
        />
      </div>
      <div className="text-holder">
        <h3 className="font-medium text-sm md:text-xl">
          Bộ chăn gối công sở đa chức năng hình thúc
        </h3>
        <p className="text-[13px] md:text-sm">Phân loại hàng: Nâu mở</p>
      </div>
    </div>
  );
};

export default ProductInfo;
