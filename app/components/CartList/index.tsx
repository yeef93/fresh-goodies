import Image from "next/image";
import shipping from "@/public/assets/shipping.png";

function CartList() {
  return (
    <div className=" flex flex-row p-5 rounded-md border-2">
      <div className=" flex flex-row">
      <div className="" >
        <Image
          src={shipping}
          alt="shipping"
          className="object-cover mix-blend-multiply bg-transparent w-full"
          width={200}
          height={200}
          layout="fixed"
        />
        <div>Before free shipping</div>
      </div>
      <div className=" flex">
        <div className=" flex flex-row">
          <div>
            <Image
              src={shipping}
              alt="shipping"
              className="object-cover mix-blend-multiply bg-transparent w-full"
              width={200}
              height={200}
              layout="fixed"
            />
          </div>
          <div>
            <div>Name</div>
            <div>price</div>
            <div> plus minus button</div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default CartList;
