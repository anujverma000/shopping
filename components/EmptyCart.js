import { Box, Button, Image, Text } from "@chakra-ui/react";
import Layout from "../components/Layout";
import { useRouter } from "next/router";

const EmptyCart = () => {
  const router = useRouter();
  const handleContinueShopping = () => {
    router.push("/home");
  };
  return (
    <Layout>
      <Box align="center" py={16}>
        <Image src="/empty_cart.png" />

        <Text fontSize="2xl" fontWeight="semibold">
          Your cart is empty
        </Text>
        <Text fontSize="sm" py="4">
          We have some great deals to choose from. Don't miss these offers.
        </Text>

        <Button
          onClick={handleContinueShopping}
          py="4"
          my="8"
          colorScheme="teal"
          size="lg"
        >
          Continue Shopping
        </Button>
      </Box>
    </Layout>
  );
};

export default EmptyCart;
