import {
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Stack,
  RadioGroup,
  Radio,
  Input,
  Textarea,
  Center,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";
import React from "react";
import { useState, useEffect } from "react";
import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { jobData, postJob } from "./../Redux/AppReducer/Action";

const Employer = () => {
  const dispatch = useDispatch();
  const title = useRef();
  const postDate = useRef();
  const location = useRef();
  const description = useRef();
  const navigate = useNavigate();
  const [type, setType] = useState("");
  const token = useSelector((store) => store.AuthReducer.token);
  const data = useSelector((store) => store.AppReducer.jobData);
  const handleSingle = (id) => {
    navigate(`/singleEmployer/${id}`);
  };
  useEffect(() => {
    dispatch(jobData(`${process.env.REACT_APP_URL}/jobs/employerjobs`, token));
  }, []);
  const handlePost = () => {
    const pload = {
      title: title.current.value,
      posting_date: postDate.current.value,
      location: location.current.value,
      description: description.current.value,
      type,
    };
    dispatch(
      postJob(`${process.env.REACT_APP_URL}/jobs/postjob`, pload, token)
    );
  };
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Job Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input ref={title} mb={"20px"} />
            <Input ref={postDate} mb={"20px"} />
            <Input ref={location} mb={"20px"} />
            <Textarea ref={description} mb={"20px"} />
            <RadioGroup onChange={setType} value={type} mb={"20px"}>
              <Stack direction="row">
                <Radio value="full-time">Full Time</Radio>
                <Radio value="part-time">Part Time</Radio>
              </Stack>
            </RadioGroup>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button onClick={handlePost}>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Button onClick={onOpen}>Post a job</Button>
      <SimpleGrid columns={[1, 2, 3, 4]}>
        {data.length > 0 &&
          data.map((elem, i) => {
            return (
              <Box key={i}>
                <Center>
                  <Text>Name : {elem.title}</Text>
                </Center>
                <Center>
                  <Text>Timing : {elem.type}</Text>
                </Center>
                <Center>
                  <Button onClick={() => handleSingle(elem._id)}>
                    View More
                  </Button>
                </Center>
              </Box>
            );
          })}
      </SimpleGrid>
    </Box>
  );
};

export default Employer;
