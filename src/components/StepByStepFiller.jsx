import React, { useState } from "react";
import { Container, VStack, Text, Input, Button, Spinner, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const StepByStepFiller = ({ pdfFile, onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const toast = useToast();

  const handleNext = () => {
    if (inputValue.trim() === "") {
      toast({
        title: "Input required.",
        description: "Please provide input for the current space.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setCurrentStep(currentStep + 1);
      setInputValue("");

      if (currentStep + 1 === 5) {
        onComplete();
        navigate("/download");
      }
    }, 1000);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Step {currentStep + 1}: Provide input for the space</Text>
        <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <Button colorScheme="teal" onClick={handleNext} isDisabled={loading}>
          {loading ? <Spinner size="sm" /> : "Next"}
        </Button>
      </VStack>
    </Container>
  );
};

export default StepByStepFiller;
