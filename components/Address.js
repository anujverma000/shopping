
import { Box, FormControl, FormHelperText, FormLabel, HStack, Input, InputGroup, InputLeftAddon, Radio, RadioGroup, Textarea } from "@chakra-ui/react";

const Address = ({userDetails, setUserDetails}) => {
  return (
    <Box my={8} p={12} border={1} rounded="md" boxShadow="2xl">
      <HStack mb={8}>
        <FormControl id="first-name" isRequired>
          <FormLabel>First name</FormLabel>
          <Input value={userDetails.firstName} onChange={e => setUserDetails({...userDetails, firstName: e.target.value})} />
        </FormControl>

        <FormControl id="last-name" isRequired>
          <FormLabel>Last name</FormLabel>
          <Input value={userDetails.lastName} onChange={e => setUserDetails({...userDetails, lastName: e.target.value})} />
        </FormControl>
      </HStack>

      <FormControl id="email" mb={8} isRequired>
        <FormLabel>Email address</FormLabel>
        <Input type="email" value={userDetails.email} onChange={e => setUserDetails({...userDetails, email: e.target.value})} />
        <FormHelperText>We'll never share your email.</FormHelperText>
      </FormControl>

      <FormControl id="phonenumber" mb={8} isRequired>
        <FormLabel>Phone number</FormLabel>
        <InputGroup>
          <InputLeftAddon children="+971" />
          <Input type="tel" value={userDetails.phone} onChange={e => setUserDetails({...userDetails, phone: e.target.value})} />
        </InputGroup>
      </FormControl>

      <FormControl id="address" mb={8} isRequired>
        <FormLabel>Address</FormLabel>
        <Textarea value={userDetails.address} onChange={e => setUserDetails({...userDetails, address: e.target.value})} />
        <FormHelperText>Apartment/Flat Number, Tower Number, Building Name</FormHelperText>
      </FormControl>
    </Box>
  )
}

export default Address;
