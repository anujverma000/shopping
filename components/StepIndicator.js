import { Box, Flex, HStack, Text } from "@chakra-ui/react";

const StepIndicator = ({selectedStep = 1}) => {
  const spacerStyles = { content: `""`, height: `4px`, width:`120px`, backgroundColor:`#e2e5f1`, marginLeft:`12px`, borderRadius:`6px` };
  const selectedColor = 'green.300'
  return (
    <Box p={16} borderBottomWidth={1} bg="gray.100">
      <HStack justifyContent="center">

        <HStack _after={spacerStyles}>
          <Flex borderRadius="full" boxSize="32px" bg={selectedStep >= 1 ? selectedColor: 'gray.300'} alignItems="center" justifyContent="center">1</Flex>
          <Text>Address</Text>
        </HStack>

        <HStack _after={spacerStyles}>
          <Flex borderRadius="full" boxSize="32px" bg={selectedStep >= 2 ? selectedColor: 'gray.300'} alignItems="center" justifyContent="center">2</Flex>
          <Text>Payment</Text>
        </HStack>
        
        <HStack>
          <Flex borderRadius="full" boxSize="32px" bg={selectedStep >= 3 ? selectedColor: 'gray.300'} alignItems="center" justifyContent="center">3</Flex>
          <Text>Invoice</Text>
        </HStack>
        
      </HStack>
    </Box>
  )
}

export default StepIndicator;
