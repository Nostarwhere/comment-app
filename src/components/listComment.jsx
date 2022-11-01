import AtomButton from "./atoms/AtomButton";
import AtomImageHolder from "./atoms/AtomImageHolder";
import AtomProductsClassify from "./atoms/AtomProductsClassify";
import AtomTime from "./atoms/AtomTime";
import ava from "../assets/photos/ava.png"

// import { useState } from "react";​
const ListComment = () => {
  // const [point, setPoint] = useState(1);​
  return (
    <div className="border p-[25px] md:w-[730px] m-auto">
      <h1 className="font-2xl uppercase">Đánh giá sản phẩm</h1>
      <span className="flex md:hidden  text-green-600">
        <span className="text-xl mr-2">
          &#9733;&#9733;&#9733;&#9733;&#9733;
        </span>
        <span className="flex items-center">
          <p>4.8/5</p>
          <p>(96 đánh giá)</p>
        </span>
      </span>
      <hr className="md:hidden mt-5" />
      <div className="md:flex p-8 border mt-5 bg-green-100 hidden">
        <div className="md:w-1/6 text-green-600">
          <span className="flex items-end">
            <p className="mr-2 text-4xl">4.8</p>
            <p className="">trên 5</p>
          </span>
          <span className="text-2xl">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
        </div>
        <div className="w-full md:w-5/6 md:px-6 ">
          <form action="">
            <AtomButton
              content="Tất cả"
              className="border mx-2 px-3 my-1 bg-white text-sm py-1 cursor-pointer"
            />
            <AtomButton
              content="5 sao"
              className="border mx-2 px-3 my-1 bg-white text-sm py-1 cursor-pointer"
            />
            <AtomButton
              content="4 sa0"
              className="border mx-2 px-3 my-1 bg-white text-sm py-1 cursor-pointer"
            />
            <AtomButton
              content="3 sao"
              className="border mx-2 px-3 my-1 bg-white text-sm py-1 cursor-pointer"
            />
            <AtomButton
              content="2 sao"
              className="border mx-2 px-3 my-1 bg-white text-sm py-1 cursor-pointer"
            />
            <AtomButton
              content="1 sao"
              className="border mx-2 px-3 my-1 bg-white text-sm py-1 cursor-pointer"
            />
            <AtomButton
              content="Có hình ảnh"
              className="border mx-2 px-3 my-1 bg-white text-sm py-1 cursor-pointer"
            />
            <AtomButton
              content="Có bình luận"
              className="border mx-2 px-3 my-1 bg-white text-sm py-1 cursor-pointer"
            />
          </form>
        </div>
      </div>
      <div className="flex mt-5 ">
        <div className="ava-holder w-[80px]">
          <AtomImageHolder
            src={ava}
            alt="avatar"
            className="h-[60px] rounded-full"
          />
        </div>
        <div className="content w-5/6">
          <p>cnl171822</p>
          <span>&#9733;&#9733;&#9733;&#9733;&#9733;</span>
          <span className="text-[13px] mb-2 hidden md:block">
            <AtomTime time="2022-09-05 17:07" /> |
            <AtomProductsClassify
              classify="Phân loại hàng: Airdots - đen"
              className="ml-3"
            />
          </span>
          <p className="text-justify">
            Mua trúng đợt shop ưu đãi giảm giá, vải chất lượng đã vậy còn được
            giảm giá nữa chứ, thích quá thích Mình đã mua ở rất nhiều nơi rồi,
            shop này có thể là điểm đến cuối cùng của mình, bán toàn đồ chất
            lượng Vừa mới mua 2 cái áo cho cha con nhà mình, áo vừa vặn và form
            đẹp lắm mọi người ạ Vải mát gh
          </p>
          <span>
            <img
              src="#"
              alt=""
              width="100"
              height="300"
              className="h-[160px] mt-5"
            />
          </span>
        </div>
      </div>
    </div>
  );
};
export default ListComment;
