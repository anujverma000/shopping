import { Button, Flex, useMediaQuery } from "@chakra-ui/react";
import Layout from "../components/Layout";
import { useDispatch, useSelector } from "react-redux";
import Payment from "../components/Payment";
import StepIndicator from "../components/StepIndicator";
import { useRouter } from "next/router";
import { updatePaymentDetails } from "../redux/actions/checkout";
import { emptyCart } from "../redux/actions/cart";

const CheckoutPayment = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const {
    checkout: { userDetails, paymentDetails },
    cart: { products },
  } = useSelector((state) => state);

  const onContinue = async () => {
    dispatch(updatePaymentDetails(paymentDetails));
    let isEmpty = Object.values(paymentDetails).some(
      (value) => value.trim() === ""
    );
    if (!isEmpty) {
      await saveOrderDetails();
      dispatch(emptyCart());
      router.push("/checkout-order");
    }
  };

  const saveOrderDetails = async () => {
    const res = await fetch("https://orderdetails.free.beeceptor.com/", {
      body: JSON.stringify({
        userDetails,
        paymentDetails,
        products,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
  };

  const [isMobile] = useMediaQuery("(max-width: 560px)");

  return (
    <Layout>
      {!isMobile && <StepIndicator selectedStep={2} />}
      <Flex alignItems="center" direction="column">
        <Payment
          paymentDetails={paymentDetails}
          setPaymentDetails={(paymentDetails) =>
            dispatch(updatePaymentDetails(paymentDetails))
          }
        />
        <Button onClick={onContinue} m={12} colorScheme="teal" size="lg">
          Continue
        </Button>
      </Flex>
    </Layout>
  );
};

export default CheckoutPayment;
