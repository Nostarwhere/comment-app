import AtomButton from "../atoms/AtomButton.jsx";
import AtomInput from "../atoms/AtomInput.jsx";
import AtomTextarea from "../atoms/AtomTextarea";
import RenderRating from "../atoms/RenderRating.jsx";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function FormComment() {
  const { register, handleSubmit, errors } = useForm();
  const [InputValue, setInputValue] = useState();
  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...InputValue,
      [name]: value,
    });
  };

  return (
    <form>
      <div className="flex items-center">
        <div className="pt-1 my-5 mr-2 text-[13px] md:text-sm">
          {"Chất lượng sản phẩm:"}
        </div>
        <div className="flex text-[15px] md:text-3xl m-0 rounded-md">
          <RenderRating />
        </div>
      </div>

      <div className="pt-5 md:px-6">
        <div className="border p-3 min-h-[300px]">
          <AtomInput
            label="Chất liệu"
            placeholder="Có đúng với mô tả không?"
            className="mb-5"
            classLabel="text-[13px] md:text-sm"
            classInput="block w-full text-[13px] md:text-sm"
          />
          <AtomInput
            label="Màu sắc"
            classLabel="text-[13px] md:text-sm"
            placeholder=""
            className="mb-5"
            classInput="block w-full text-[13px] md:text-sm"
          />
          <AtomTextarea
            label="Đúng với mô tả"
            placeholder="Hãy chia sẻ điều bạn thích về sản phẩm này với người mua khác nhé!"
            classLabel="text-[13px] md:text-sm"
            classInput="block w-full text-[13px] md:text-sm"
          />
        </div>

        <div className="mt-5 flex text-[13px] md:text-sm">
          <AtomInput
            type="file"
            content="Thêm hình ảnh"
            className="relative "
            label="Thêm hình ảnh"
            classLabel="text-[13px] md:text-sm border mr-3 text-green-600 border-green-600 px-3 "
            classInput="block w-full text-[13px] md:text-sm absolute top-0 opacity-0 md:w-[120px] w-[80px] cursor-pointer"
          />
          <AtomInput
            type="file"
            content="Thêm video"
            label="Thêm video"
            className="relative"
            classLabel="text-[13px] md:text-sm border mr-3 text-green-600 border-green-600 px-3 "
            classInput="block w-full text-[13px] md:text-sm absolute top-0 opacity-0 md:w-[120px] w-[80px] cursor-pointer"
          />
        </div>
      </div>

      <div className="service-shipping mt-7">
        <h3 className="font-medium">Về Dịch vụ:</h3>
        <div className="flex items-center ">
          <p className="pt-1 md:my-5 mt-2 mr-2 text-[13px] md:text-sm">
            {"Dịch vụ bán hàng: "}
          </p>
          <p className="flex text-[15px] md:text-3xl rounded-md ">
            <RenderRating />
          </p>
        </div>
        <div className="flex items-center">
          <p className="pt-1 md:my-5 mt-2 mr-2 text-[13px] md:text-sm">
            {"Dịch vụ giao hàng: "}
          </p>
          <p className="flex text-[15px] md:text-3xl rounded-md">
            <RenderRating />
          </p>
        </div>
      </div>

      <div className="submit-button flex justify-end items-center mt-7 text-[13px] md:text-sm cursor-pointer">
        <AtomButton
          content="TRỞ LẠI"
          className="w-[140px] flex justify-center items-center mr-2"
          href="/list-comments"
        />
        <AtomButton
          content="Hoàn thành"
          className="border bg-green-600 text-white h-9 w-auto px-3 rounded-sm flex items-center cursor-pointer"
        />
      </div>
    </form>
  );
}

// export default FormComment;
