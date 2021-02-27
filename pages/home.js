import { Wrap, WrapItem } from "@chakra-ui/react";
import Layout from "../components/Layout";
import ProductCard from "../components/ProductCard";
import productsList from "../data/products";
import { useDispatch, useSelector } from "react-redux";
import { UPDATE_PRODUCTS } from "../redux/actions/cart";

const Home = () => {
  const dispatch = useDispatch();

  const handleProductUpdates = (product, quantity) => {
    product.quantity = quantity;
    dispatch({
      type: UPDATE_PRODUCTS,
      payload: product,
    });
  };
  const { products } = useSelector((state) => state.cart);

  products.forEach((cp) => {
    let index = productsList.findIndex((pl) => pl.id === cp.id);
    if (index >= 0) {
      productsList[index] = cp;
    }
  });

  return (
    <Layout>
      <Wrap m={4} spacing="16px" justify="center">
        {productsList.map((product) => (
          <WrapItem key={`${product.id}${product.quantity}`}>
            <ProductCard product={product} onChange={handleProductUpdates} />
          </WrapItem>
        ))}
      </Wrap>
    </Layout>
  );
};

export default Home;
