import { useState } from "react";
import { Button, Input, HStack } from "@chakra-ui/react";

const QuantityCounter = ({
  minQuantity = 0,
  maxQuantity,
  initQuantity = 0,
  editable = true,
  onChange = () => {},
}) => {
  const [quantity, setQuantity] = useState(initQuantity);

  const increment = () => {
    if (quantity < maxQuantity) {
      setQuantity(quantity + 1);
      onChange(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > minQuantity) {
      setQuantity(quantity - 1);
      onChange(quantity - 1);
    }
  };

  const updateQuantity = (value) => {
    if (value === "") {
      setQuantity(minQuantity);
      onChange(minQuantity);
    } else if (!isNaN(value)) {
      let val = parseInt(value, 10);
      if (val < maxQuantity) {
        setQuantity(val);
        onChange(val);
      }
    }
  };

  return (
    <HStack spacing={3}>
      <Button
        color="blue"
        rounded="100%"
        size="sm"
        fontWeight="bold"
        onClick={decrement}
      >
        -
      </Button>
      <Input
        size="sm"
        rounded="md"
        width="42px"
        textAlign="center"
        disabled={!editable}
        value={quantity}
        fontSize="sm"
        onChange={(e) => updateQuantity(e.target.value)}
      />
      <Button
        color="blue"
        rounded="100%"
        size="sm"
        fontWeight="bold"
        onClick={increment}
      >
        +
      </Button>
    </HStack>
  );
};

export default QuantityCounter;
