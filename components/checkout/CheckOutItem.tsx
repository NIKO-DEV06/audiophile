import Image, { StaticImageData } from "next/image";
const CheckOutItem = ({
  name,
  img,
  price,
  quantity,
}: {
  name: string | number;
  img: StaticImageData;
  price: number;
  quantity: number;
}) => {
  return (
    <div className="flex items-center justify-between pt-[1rem]">
      <div className="flex gap-[1.3rem] ">
        <div className="bg-[#F1F1F1] h-[60px] overflow-hidden rounded-lg">
          <Image
            src={img}
            alt=""
            width={70}
            className="rounded-xl scale-[1.5] translate-y-[0.9rem]"
          />
        </div>
        <div className="flex flex-col">
          <p className="font-semibold text-[1rem] tracking-wide items-start">
            {name}
          </p>
          <p className="font-semibold text-[1rem] opacity-50">{`$ ${price.toLocaleString()}`}</p>
        </div>
      </div>
      <p className="font-semibold opacity-50 text-[1.2rem]">{`x${quantity}`}</p>
    </div>
  );
};

export default CheckOutItem;
