import Image from "next/image";
import shipping from "@/public/assets/shipping.png";

function CartList() {
  return (
    <div className=" flex flex-row p-5 rounded-md border-2">
      <div className=" flex flex-col">
        <div>
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
        <div>
          <div className=" flex">
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
              <div className=" mt-5 px- flex items-center justify-center gap-4 rounded-full border-2">
                <button>-</button>
                <input
                  type="number"
                  className="border px-2 py-1 border-none "
                  min={1}
                />
                <button>+</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartList;
