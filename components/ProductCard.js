import { Badge, Box, Button, HStack, Image, Link } from "@chakra-ui/react";
import { useRouter } from "next/router";
import QuantityCounter from "./QuantityCounter";

const ProductCard = ({ product, onChange }) => {
  const router = useRouter();

  const handleQuantityChange = (quantity) => {
    onChange(product, quantity);
  };

  const gotoShoppingCart = (quantity) => {
    handleQuantityChange(quantity);
    router.push("/cart");
  };

  return (
    <Box
      bg="white"
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      cursor="pointer"
      _hover={{ boxShadow: "2xl", bg: "white" }}
    >
      <Image
        src={product.imageUrl}
        fallbackSrc="https://dummyimage.com/400x280/ffffff/ffffff"
        __css={{ margin: "0 auto", height: "280px" }}
      />
      <Box p={4} borderTopWidth="1px">
        <Link>
          <Badge>{product.brand}</Badge>
        </Link>
        <Box fontSize="lg" fontWeight="bold" color="teal">
          {product.currency} {product.price.toLocaleString("en")}
        </Box>
        <Box fontSize="sm" mt="1" as="h4" color="gray.500" lineHeight="tight">
          {product.title}
        </Box>
      </Box>
      <HStack justifyContent="space-between" m={4}>
        <QuantityCounter
          minQuantity={0}
          maxQuantity={product.maxQuantity}
          initQuantity={product.quantity}
          onChange={handleQuantityChange}
        />
        <Button
          cursor="pointer"
          onClick={() => gotoShoppingCart(product.quantity || 1)}
          colorScheme="teal"
          size="md"
        >
          Add to cart
        </Button>
      </HStack>
    </Box>
  );
};

export default ProductCard;
