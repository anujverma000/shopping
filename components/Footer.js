import { Box, Flex, Text, Stack, Link } from "@chakra-ui/react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <Box color="gray.400" fontSize="xs" mt={12}>
      <Flex
        as="footer"
        fontSize="sm"
        justify="center"
        textAlign="center"
        borderTopColor="gray.200"
        borderTopWidth="1px"
        width="100%"
        py={2}
        mt={4}
      >
        <Stack>
          <Text py={2}>
            Proudly made by{" "}
            <Link
              href="mailto:anujverma000@gmail.com"
              color="gray.500"
              fontSize="sm"
              fontWeight="semibold"
            >
            Anuj Verma
            </Link>
          </Text>
          <Text fontSize="xs">
            Released under the MIT License.
          </Text>
          <Text fontSize="xs">
            &copy; {year}, Shopping Cart. All Rights Reserved.
          </Text>
        </Stack>
      </Flex>
    </Box>
  );
};

export default Footer;
