import { Button, Flex, Stack, Wrap, WrapItem } from "@chakra-ui/react"
import Link from "next/link"
import { useDispatch, useSelector } from "react-redux"
import CartItem from "../components/CartItem"
import EmptyCart from "../components/EmptyCart"
import Layout from "../components/Layout"
import OrderSummary from "../components/OrderSummary"
import { UPDATE_PRODUCTS } from "../redux/actions/cart"

const Cart = () => {
  const dispatch = useDispatch();
  const handleProductUpdates = (product, quantity) => {
    product.quantity = quantity;
    dispatch({
      type: UPDATE_PRODUCTS,
      payload: product
    });
  }
  const {products} = useSelector(state => state.cart);

  if(products.length === 0){
    return <EmptyCart />
  }

  return (
    <Layout>
      <Flex justifyContent="center" alignItems="center" >
        <Wrap m={8} alignItems="center" justifyContent="center">
          <WrapItem>
            <Stack spacing="16px">
              {products.map(product => <CartItem key={product.id} product={product} onChange={handleProductUpdates}/>)}
            </Stack>
          </WrapItem>
          <WrapItem>
            <Stack borderWidth={1} p={2} rounded="sm">
            <OrderSummary />
              <Link href="/checkout-details">
                <Button width="full" py={4} my={4} colorScheme="teal" size="lg">Checkout</Button>
              </Link>
            </Stack>
          </WrapItem>
        </Wrap>
      </Flex>
    </Layout>
  )
}

export default Cart