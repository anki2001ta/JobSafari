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
    Center
  } from "@chakra-ui/react";
  import { useToast } from '@chakra-ui/react'
  import { MdOutlinePets} from "react-icons/md";
  import {useState } from "react";
  import { Link,useNavigate } from "react-router-dom";
  import axios from "axios";
  import { FcGoogle } from "react-icons/fc";
  import { BsFacebook } from "react-icons/bs";
  
  import {useDispatch} from "react-redux"
  import { PostUserSuccess } from "../Redux/AppReducer/Action";
  
  export default function Login() {
   
    return (
      <Box
      h={{md:"100vh",lg:"100vh",base:"100vh"}}
      bgImage="url(https://media.istockphoto.com/id/1398859925/photo/blue-gradient-background-with-darker-borders.jpg?b=1&s=170667a&w=0&k=20&c=_pxq2uhgyvbG-QdhDN_GahMDyR_T5V4OS9uUHPxz4j4=)"
      bgPos="center"
      bgRepeat="no-repeat"
      bgSize="100%"
      Size="100%"
      
      >
       
       <Center>
       
        <Box mt={"6%"} alignItems={"center"}  justifyContent={"center"}  w={{md:"100%",lg:"50%",base:"100%"}} borderRadius="10px">
           
          <Box bg="white" p={39} rounded="md" textAlign={"center"} backgroundColor={"transparent"} backdropFilter={"blur(5px)"}>
            <Heading variant={"solid"} color="black"> SIGN IN </Heading>
            <form >
              <VStack spacing={4} align="flex-start">
                
                <FormControl>
                  <FormLabel htmlFor="email" variant={"smooth"} fontSize={"17px"}>
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
                  <FormLabel htmlFor="password" variant={"smooth"} fontSize={"17px"}>
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
                LOG IN
                </Button>
                <Box alignSelf="center">
                  <Text fontSize="17px">
                   <b> Dont have Account? <Link to="/signup">Click Here</Link></b>
                  </Text>
                </Box>
                <Box alignSelf="center">
                  <Text variant={"outline"} fontSize={"17px"}>
                   <b> Thanks for SignIn for JobSafari. Welcome to our Family</b>
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
  