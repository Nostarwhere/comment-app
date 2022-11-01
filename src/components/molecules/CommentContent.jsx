import AtomImageHolder from "../atoms/AtomImageHolder";
import AtomProductsClassify from "../atoms/AtomProductsClassify";
import AtomTime from "../atoms/AtomTime";

const CommentContent = () => {
  return (
    <div className="flex mt-5">
      <div className="ava-holder">
        <AtomImageHolder
          src="https://cdn.sstatic.net/Img/teams/teams-illo-free-sidebar-promo.svg?v=47faa659a05e"
          alt="avatar"
          className="h-[60px] mr-5 rounded-full"
        />
      </div>
      <div className="content">
        <p>cnl171822</p>
        <span>&#9733;&#9733;&#9733;&#9733;&#9733;</span>
        <span className="text-[13px] mb-2 hidden md:block">
          <AtomTime time="2022-09-05 17:07" /> |
          <AtomProductsClassify
            classify="Phân loại hàng: Airdots - đen"
            className="ml-3"
          />
        </span>
        <p>
          Đã nhận được hàng của shop <br />
          Giáo hàng đúng hẹn
          <br />
          Đóng gói cẩn thận
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
  );
};

export default CommentContent;
