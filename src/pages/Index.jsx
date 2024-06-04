import React, { useState } from "react";
import { Container, VStack, Text, Input, Button, Spinner, useToast } from "@chakra-ui/react";
import { FaFilePdf, FaUpload } from "react-icons/fa";

const Index = () => {
  const [pdfFile, setPdfFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const handleFileChange = (event) => {
    setPdfFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!pdfFile) {
      toast({
        title: "No file selected.",
        description: "Please select a PDF file to upload.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    setLoading(true);

    // Simulate AI processing
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "File processed.",
        description: "The AI has filled out your PDF document.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    }, 3000);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">AI PDF Filler</Text>
        <Input type="file" accept="application/pdf" onChange={handleFileChange} />
        <Button leftIcon={<FaUpload />} colorScheme="teal" onClick={handleUpload} isDisabled={loading}>
          {loading ? <Spinner size="sm" /> : "Upload and Process"}
        </Button>
        {pdfFile && <Text>Selected file: {pdfFile.name}</Text>}
      </VStack>
    </Container>
  );
};

export default Index;
