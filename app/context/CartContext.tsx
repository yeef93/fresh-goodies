import React, { createContext, useContext, useReducer, useEffect, ReactNode } from "react";

interface Product {
  name: string;
  weight: number;
  price: number;
  imageUrl: string;
}

interface CartState {
  items: Product[];
}

interface CartAction {
  type: "ADD_TO_CART" | "UPDATE_CART_ITEM" | "REMOVE_FROM_CART" | "SET_CART";
  payload: Product | Product[];
}

const CartContext = createContext<any>(null);

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        items: [...state.items, action.payload as Product],
      };
    case "UPDATE_CART_ITEM":
      return {
        ...state,
        items: state.items.map(item =>
          item.name === (action.payload as Product).name ? (action.payload as Product) : item
        ),
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        items: state.items.filter(item => item.name !== (action.payload as Product).name),
      };
    case "SET_CART":
      return {
        ...state,
        items: action.payload as Product[],
      };
    default:
      return state;
  }
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  // Load cart items from local storage when the component mounts
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      dispatch({ type: "SET_CART", payload: JSON.parse(savedCart) });
    }
  }, []);

  // Save cart items to local storage whenever state.items changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.items));
  }, [state.items]);

  const addToCart = (product: Product) => {
    const existingItem = state.items.find(item => item.name === product.name);
    if (existingItem) {
      dispatch({ type: "UPDATE_CART_ITEM", payload: product });
    } else {
      dispatch({ type: "ADD_TO_CART", payload: product });
    }
  };

  const removeFromCart = (product: Product) => {
    const existingItem = state.items.find(item => item.name === product.name);
    if (existingItem && product.weight > 0) {
      dispatch({ type: "UPDATE_CART_ITEM", payload: product });
    } else {
      dispatch({ type: "REMOVE_FROM_CART", payload: product });
    }
  };

  return (
    <CartContext.Provider value={{ cart: state, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
