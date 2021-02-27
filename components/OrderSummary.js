import { Box, Flex, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";

const OrderSummary = () => {
  const { products } = useSelector((state) => state.cart);
  const productLength = products.length;
  let subTotal = 0;
  products.forEach((p) => {
    subTotal = subTotal + p.quantity * p.price;
  });
  const currency = products[0]?.currency || "AED";
  const tax = 0;

  return (
    <Box p={4} rounded="sm" minW="320px">
      <Text fontSize="lg" fontWeight="bold" pb={4}>
        Order Summary
      </Text>
      <Box borderBottomWidth={1} pb={3}>
        <Flex justifyContent="space-between">
          <Text fontSize="md" color="gray.500">
            SubTotal({productLength} products)
          </Text>
          <Text>
            {currency} {subTotal.toLocaleString("en")}
          </Text>
        </Flex>
        <Flex justifyContent="space-between">
          <Text fontSize="md" color="gray.500">
            Tax
          </Text>
          <Text>
            {currency} {tax}
          </Text>
        </Flex>
      </Box>
      <Flex
        justifyContent="space-between"
        py={3}
        fontSize="lg"
        fontWeight="bold"
      >
        <Text>Total</Text>
        <Text>
          {currency} {(tax + subTotal).toLocaleString("en")}
        </Text>
      </Flex>
    </Box>
  );
};

export default OrderSummary;
