import { Box, Heading, Flex, Text, HStack, Badge } from "@chakra-ui/react";
import { FaShoppingCart, FaPowerOff } from "react-icons/fa";
import Link from "next/link";
import { useSelector } from "react-redux";

const Header = (props) => {
  const user = useSelector((state) => state.login.username);
  const { products } = useSelector((state) => state.cart);
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1rem"
      bg="teal.500"
      {...props}
    >
      <Link href={`${user ? "/home" : "/"}`}>
        <Box align="center" mr={5} color="white" cursor="pointer">
          <Heading as="h1" size="lg">
            Shopping Cart
          </Heading>
          <Text fontSize="sm">let's shop here</Text>
        </Box>
      </Link>
      <HStack direction="horizontal" color="white" spacing="36px">
        <Link href="/cart">
          <HStack
            direction="horizontal"
            color="white"
            spacing="12px"
            _hover={{ bg: "teal.400" }}
            p={2}
            rounded="md"
            cursor="pointer"
          >
            <FaShoppingCart size={16} px={10} />
            <Text fontSize="sm">Cart <Badge>{products.length? products.length : ''}</Badge></Text>
          </HStack>
        </Link>

        <Link href="/">
          <HStack
            direction="horizontal"
            color="white"
            spacing="12px"
            _hover={{ bg: "teal.400" }}
            p={2}
            rounded="md"
            cursor="pointer"
          >
            <FaPowerOff size={16} px={10} />
            <Text fontSize="sm">Sign out</Text>
          </HStack>
        </Link>
      </HStack>
    </Flex>
  );
};

export default Header;
