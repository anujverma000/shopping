import {
  Box,
  FormControl,
  FormLabel,
  HStack,
  Image,
  Input,
  Select,
} from "@chakra-ui/react";

const Payment = ({ paymentDetails, setPaymentDetails, showError=false }) => {
  const year = new Date().getFullYear();
  return (
    <Box
      my={8}
      p={4}
      width="100%"
      maxWidth="500px"
      border={1}
      rounded="md"
      boxShadow="2xl"
    >
      <FormControl id="name_on_card" mb={8} isRequired>
        <FormLabel>Name on card</FormLabel>
        <Input
          type="name_on_card"
          isInvalid={showError && !paymentDetails.name}
          value={paymentDetails.name}
          onChange={(e) =>
            setPaymentDetails({ ...paymentDetails, name: e.target.value })
          }
        />
      </FormControl>
      <FormControl id="card_number" mb={8} isRequired>
        <FormLabel>Card Number</FormLabel>
        <Input
          type="card_number"
          isInvalid={showError && !paymentDetails.cardNumber}
          value={paymentDetails.cardNumber}
          onChange={(e) =>
            setPaymentDetails({ ...paymentDetails, cardNumber: e.target.value })
          }
        />
      </FormControl>
      <Box mb={8}>
        <FormControl id="card_number" mb={8} isRequired>
          <FormLabel>Card Expiry</FormLabel>
          <HStack>
            <Select
              placeholder="Month"
              variant="filled"
              isInvalid={showError && !paymentDetails.expiryMonth}
              defaultValue={paymentDetails.expiryMonth}
              onChange={(e) =>
                setPaymentDetails({
                  ...paymentDetails,
                  expiryMonth: e.target.value,
                })
              }
            >
              {[...Array(12)].map((_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </Select>
            <Select
              placeholder="Year"
              variant="filled"
              isInvalid={showError && !paymentDetails.expiryYear}
              defaultValue={paymentDetails.expiryYear}
              onChange={(e) =>
                setPaymentDetails({
                  ...paymentDetails,
                  expiryYear: e.target.value,
                })
              }
            >
              {[...Array(15)].map((_, i) => (
                <option key={year + i} value={year + i}>
                  {year + i}
                </option>
              ))}
            </Select>
          </HStack>
        </FormControl>
      </Box>
      <Box mb={8}>
        <FormControl id="cvv" mb={8} isRequired>
          <FormLabel>CVV</FormLabel>
          <HStack justifyContent="space-between">
            <Input
              type="cvv"
              isInvalid={showError && !paymentDetails.cvv}
              width="70px"
              value={paymentDetails.cvv}
              onChange={(e) =>
                setPaymentDetails({ ...paymentDetails, cvv: e.target.value })
              }
            />
            <Image src="./credit-card-icons.png" width="150px" />
          </HStack>
        </FormControl>
      </Box>
    </Box>
  );
};

export default Payment;
