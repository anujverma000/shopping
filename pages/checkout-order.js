import {
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import Layout from "../components/Layout";
import StepIndicator from "../components/StepIndicator";
import Invoice from "../components/Invoice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { emptyCart } from "../redux/actions/cart";

const CheckoutOrder = () => {
  const [isMobile] = useMediaQuery("(max-width: 560px)");
  const { isOpen, onOpen, onClose } = useDisclosure();
  useEffect(() => {
    setTimeout(() => {
      onOpen();
    }, 5000);
  }, []);

  const dispatch = useDispatch();
  const router = useRouter();

  const onContinue = () => {
    dispatch(emptyCart());
    router.push("/home");
  };
  return (
    <Layout>
      {!isMobile && <StepIndicator selectedStep={3} />}
      <Flex alignItems="center" direction="column">
        <Invoice />
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Continue Shopping</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontSize="md" my={4}>
              Your payment has been processed successfully.
            </Text>
            <Text fontSize="sm" my={4}>
              Your order is processing right now. You will receive a
              notification when delivery is on the way.
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button mr={3} onClick={onClose}>
              Close
            </Button>
            <Button onClick={onContinue} colorScheme="teal">
              Continue Shopping
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Layout>
  );
};

export default CheckoutOrder;
