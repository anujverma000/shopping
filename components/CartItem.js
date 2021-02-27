import { Badge, Box, Flex, HStack, Image, Link, Stack, Text, Wrap, WrapItem } from "@chakra-ui/react";
import QuantityCounter from "./QuantityCounter";
import { FaTrash } from 'react-icons/fa'

const CartItem = ({product, onChange}) => {

  const handleQuantityChange = (quantity) => {
    onChange(product, quantity)
  }

  return (
    <Wrap borderWidth="1px" borderRadius="sm" p={2} justifyContent="space-between">
      <WrapItem>
        <Image src={product.imageUrl} fallbackSrc="https://dummyimage.com/400x280/ffffff/ffffff"  __css={{height: '150px'}} />
      </WrapItem>
      <WrapItem maxWidth="300px">
        <Box p="6" width="100%">
          <Link><Badge>{product.brand}</Badge></Link>
          <Box fontSize="sm" mt="1" as="h4" color="gray.500" lineHeight="tight">
            {product.title}
          </Box>
          <HStack my={4} color="gray.400" _hover={{color: "gray.500"}} cursor="pointer" onClick={() => handleQuantityChange(0)}>
            <FaTrash size="12px"/> <Text fontSize="xs">Remove from cart</Text>
          </HStack>
        </Box>
      </WrapItem>
      <WrapItem>
        <Stack justifyContent="center" alignItems="center">
          <Box fontSize="xs" fontWeight="semibold">
            Price: {product.currency} {product.price.toLocaleString('en')}
          </Box>
          <QuantityCounter minQuantity={1} maxQuantity={product.maxQuantity} initQuantity={product.quantity} editable={false} onChange={handleQuantityChange}/>
          <Box fontSize="sm" fontWeight="semibold">
            Total: {product.currency} {(product.price * product.quantity).toLocaleString('en')}
          </Box>
        </Stack>
      </WrapItem>
    </Wrap>
  )
}

export default CartItem;
