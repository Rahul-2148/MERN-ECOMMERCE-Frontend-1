import { FaPlus } from "react-icons/fa";
import { server } from "../redux/store";
import { CartItem } from "../types/types";

type productsprops = {
  productId: string;
  photo: string;
  name: string;
  price: number;
  stock: number;
  handler: (cartItem: CartItem) => string | undefined;
};

const productCard = ({
  productId,
  photo,
  name,
  price,
  stock,
  handler,
}: productsprops) => {
  return (
    // uploads\5617b5fc-126c-4273-a87f-949a48946df6.png
    <div className="product-card">
      <img src={`${server}/${photo}`} alt={name} />
      <p>{name}</p>
      <span>₹{price}</span>

      <div>
        <button onClick={() => handler({ productId, price, name, photo,stock, quantity: 1})}>
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default productCard;
