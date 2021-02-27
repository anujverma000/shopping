import { Button, Flex, useMediaQuery } from "@chakra-ui/react";
import Layout from "../components/Layout";
import { useDispatch, useSelector } from "react-redux";
import Address from "../components/Address";
import StepIndicator from "../components/StepIndicator";
import { useState } from "react";
import { useRouter } from "next/router";
import { updateUserDetails } from "../redux/actions/checkout";

const CheckoutDetails = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { userDetails } = useSelector((state) => state.checkout);
  const [showError, setShowError] = useState(false);
  const onContinue = () => {
    dispatch(updateUserDetails(userDetails));
    let isEmpty = Object.values(userDetails).some(
      (value) => value.trim() === ""
    );
    if (!isEmpty) {
      router.push("/checkout-payment");
    }
    setShowError(true);
  };
  const [isMobile] = useMediaQuery("(max-width: 560px)");
  return (
    <Layout>
      {!isMobile && <StepIndicator selectedStep={1} />}
      <Flex alignItems="center" direction="column">
        <Address
          userDetails={userDetails}
          showError={showError}
          setUserDetails={(userDetails) =>
            dispatch(updateUserDetails(userDetails))
          }
        />
        <Button onClick={onContinue} m={12} colorScheme="teal" size="lg">
          Continue
        </Button>
      </Flex>
    </Layout>
  );
};

export default CheckoutDetails;
