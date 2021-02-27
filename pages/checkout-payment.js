import { Button, Flex, useMediaQuery } from "@chakra-ui/react"
import Layout from "../components/Layout"
import { useDispatch, useSelector } from 'react-redux'
import Payment from "../components/Payment"
import StepIndicator from "../components/StepIndicator"
import { useRouter } from "next/router"
import { updatePaymentDetails } from "../redux/actions/checkout"


const Home = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const {paymentDetails} = useSelector(state => state.checkout);

  const onContinue = () => {
    dispatch(updatePaymentDetails(paymentDetails))
    let isEmpty = Object.values(paymentDetails).some(value =>  value.trim() === '');
    if(!isEmpty){
      router.push('/checkout-order');
    }
  }

  const [isMobile] = useMediaQuery("(max-width: 560px)");
  
  return (
    <Layout>
      {!isMobile && <StepIndicator selectedStep={2}/> }
      <Flex alignItems="center" direction="column">
        <Payment paymentDetails={paymentDetails} setPaymentDetails={paymentDetails => dispatch(updatePaymentDetails(paymentDetails))}/>
        <Button onClick={onContinue} m={12} colorScheme="teal" size="lg">Continue</Button>
      </Flex>
    </Layout>
  )
}

export default Home