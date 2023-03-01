import React from "react";

import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  VStack,
  Text,
  useToast,
  Center,
  Divider,
} from "@chakra-ui/react";
import { MdOutlinePets } from "react-icons/md";
import { useContext, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";


export default function Signup() {
  return (
    <Box
      h={{ md: "100vh", lg: "100vh", base: "100vh" }}
      bgImage="url(https://media.istockphoto.com/id/1398859925/photo/blue-gradient-background-with-darker-borders.jpg?b=1&s=170667a&w=0&k=20&c=_pxq2uhgyvbG-QdhDN_GahMDyR_T5V4OS9uUHPxz4j4=)"
      bgPos="center"
      bgRepeat="no-repeat"
      bgSize={{ md: "100%", lg: "100%", base: "100%" }}
      size="100%"
    >
     
      <Center>
        <Box
          mt={{ md: "0%", lg: "3%", base: "0%" }}
          alignItems={"center"}
          justifyContent={"center"}
          w={{ md: "100%", lg: "50%", base: "100%" }}
          borderRadius="10px"

        >
          <Box
            bg="white"
            p={39}
            rounded="md"
            textAlign={"center"}
            backgroundColor={"transparent"}
            backdropFilter={"blur(5px)"}
          >
            <Heading variant={"solid"} color="black">
              
              CREATE ACCOUNT{" "}
            </Heading>
            <form >
              <VStack spacing={4} align="flex-start">
                <FormControl>
                  <FormLabel
                    htmlFor="name"
                    variant={"smooth"}
                    fontSize={"17px"}
                  >
                    <b style={{color:"white"}}> Username</b>
                  </FormLabel>
                  <Input
                    isInvalid
                    errorBorderColor="white"
                    id="name"
                    name="name"
                    type="name"
                    required={true}
                    placeholder="Enter a name"
                   
                  />
                </FormControl>
                <FormControl>
                  <FormLabel
                    htmlFor="email"
                    variant={"smooth"}
                    fontSize={"17px"}
                  >
                    <b style={{color:"white"}}> Email</b>
                  </FormLabel>
                  <Input
                    isInvalid
                    errorBorderColor="white"
                    id="email"
                    name="email"
                    type="email"
                    required={true}
                    placeholder="Enter your email"
                    
                  />
                </FormControl>
                <FormControl>
                  <FormLabel
                    htmlFor="password"
                    variant={"smooth"}
                    fontSize={"17px"}
                  >
                    <b style={{color:"white"}}> Password</b>
                  </FormLabel>
                  <Input
                    isInvalid
                    errorBorderColor="white"
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Password"
                    color="white"
                    required={true}
                    
                  />
                </FormControl>
                <Button type="submit" bg="black" color="white" width="full">
                  CREATE ACCOUNT
                </Button>
                <Box alignSelf="center">
                  <Text fontSize="17px">
                    <b>
                      {" "}
                      Already a member? <Link to="/login">Sign in</Link>
                    </b>
                  </Text>
                </Box>
                <Box alignSelf="center">
                  <Text  variant={"outline"} fontSize={{ md: "15px", lg: "17px", base: "12px" }}>
                    <b>
                      {" "}
                      By signing up, you agree to the JobSafari Terms of Use and
                      Privacy Policy. We respect and protect your information
                      and privacy.
                    </b>
                  </Text>
                </Box>
              </VStack>
            </form>
           
          </Box>
        </Box>
      </Center>
    </Box>
  );
}
