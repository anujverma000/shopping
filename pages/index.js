import { useState } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Flex,
  Box,
  Heading,
  Link,
} from "@chakra-ui/react";
import { LOGIN } from "../redux/actions/login";
import Footer from "../components/Footer";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: LOGIN,
      payload: {
        username,
      },
    });

    router.push("/home");
  };

  return (
    <>
      <Flex
        width="full"
        align="center"
        justifyContent="center"
        direction="column"
      >
        <Box
          p={16}
          m={16}
          maxW="full"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          bg="white"
          boxShadow="2xl"
        >
          <Box textAlign="center" mb={16}>
            <Heading color="teal.500">Login to your Shopping Cart</Heading>
          </Box>
          <Box my={4} textAlign="left">
            <form onSubmit={handleSubmit}>
              <FormControl isRequired>
                <FormLabel>Username</FormLabel>
                <Input
                  type="username"
                  placeholder="username"
                  id="username"
                  onChange={(event) => setUsername(event.currentTarget.value)}
                />
              </FormControl>
              <FormControl mt={6} isRequired>
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  placeholder="*******"
                  id="password"
                  onChange={(event) => setPassword(event.currentTarget.value)}
                />
              </FormControl>
              <Button
                type="submit"
                colorScheme="teal"
                width="full"
                mt={4}
                size="lg"
              >
                Sign In
              </Button>
            </form>
          </Box>
          <Flex pt={24} justifyContent="space-between" width="full">
            <Link>Create a new account</Link>
            <Link>Forgot Password?</Link>
          </Flex>
        </Box>
      </Flex>
      <Footer />
    </>
  );
};

export default Login;
