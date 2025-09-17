import React, { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

// Normalize backend menu objects for frontend consistency
const normalize = (p) => {
  const id = p?._id || p?.id;
  const title = p?.menuName ?? p?.menuname ?? p?.title ?? "";
  const image = p?.menuPicture ?? p?.menupicture ?? p?.image ?? "";
  const price = Number(p?.menuPrice ?? p?.menuprice ?? p?.price ?? 0);

  return {
    id,
    title,
    image,
    price,
    quantity: 1,
    // Keep both versions for compatibility
    menuname: title,
    menupicture: image,
    menuprice: price,
  };
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem("cart");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    const p = normalize(product);
    if (!p.id) return;

    setCart((prev) => {
      const existing = prev.find((i) => i.id === p.id);
      if (existing) {
        return prev.map((i) =>
          i.id === p.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, p];
    });
  };

  const increaseQuantity = (id) => {
    setCart((prev) =>
      prev.map((i) => (i.id === id ? { ...i, quantity: i.quantity + 1 } : i))
    );
  };

  const decreaseQuantity = (id) => {
    setCart((prev) =>
      prev
        .map((i) => (i.id === id ? { ...i, quantity: i.quantity - 1 } : i))
        .filter((i) => i.quantity > 0)
    );
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((i) => i.id !== id));
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
