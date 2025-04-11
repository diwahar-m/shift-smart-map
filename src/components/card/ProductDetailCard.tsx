import ProductCard from "./ProductCard";

const productDetail = {
  stock: "In inventory",
  price: "$0.00",
};

export default function ProductDetailCard() {
  return (
    <ProductCard
      detail={productDetail}
      sx={{ backgroundColor: "#fff", width: "100%" }}
    />
  );
}
