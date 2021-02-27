import { Box, Button, HStack, Image, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import OrderSummary from "./OrderSummary";

const Invoice = () => {
  const router = useRouter();
  const handleContinueShopping = () => {
    router.push("/home");
  };
  const orderNumber = Math.floor(Math.random() * 1000000000);
  const { userDetails } = useSelector((state) => state.checkout);
  return (
    <Box
      my={8}
      p={4}
      width="100%"
      align="center"
      maxWidth="500px"
      border={1}
      rounded="md"
      boxShadow="2xl"
    >
      <Image src="/payment_successful.png" width="240px" />
      <Text fontSize="2xl" fontWeight="semibold">
        Payment Successful!
      </Text>
      <Text fontSize="sm" py="4">
        You have completed your payment.
      </Text>
      <HStack
        justifyContent="space-between"
        fontWeight="bold"
        p={2}
        bg="teal"
        color="gray.100"
      >
        <Text>Order No:</Text>
        <Text>{orderNumber}</Text>
      </HStack>
      <OrderSummary />
      <Box align="left">
        <Text bg="gray.300" p="4" fontWeight="bold">
          Shipped To
        </Text>
        <Box bg="gray.100" p="4">
          <Text fontWeight="semibold">
            {" "}
            {userDetails.firstName} {userDetails.lastName}{" "}
          </Text>
          <Text fontSize="sm"> +971-{userDetails.phone} </Text>
          <Text fontSize="sm"> {userDetails.email} </Text>
          <Text fontSize="sm"> {userDetails.address} </Text>
        </Box>
      </Box>
      <Button
        onClick={handleContinueShopping}
        py="4"
        my="8"
        colorScheme="teal"
        size="lg"
      >
        Continue Shopping
      </Button>

      <Text fontSize="sm" py="4" color="gray.400">
        Email has been sent to your resigtered email address with invoide and
        order details.
      </Text>
    </Box>
  );
};

export default Invoice;
