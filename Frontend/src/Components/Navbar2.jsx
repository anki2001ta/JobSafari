import { Avatar, Box, Button, Center, Flex, Image, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Text } from '@chakra-ui/react'
import React from 'react'
import job from '../Resources/job.png'
import "./Navbar.css"

const Navbar2 = () => {
  return (
    <Box id="nav" w={"100%"} h={"60px"}  boxSizing={"border-box"} color={"white"} fontSize={"xl"}>
        <Flex justifyContent={"space-between"}>
         
        <Box>
           
            <Image ml={"80px"} mt={"5px"} w={"50px"} src={job}/>
           
        </Box>
        <Flex >
            <Center>
           
            <Text  mr={"80px"} fontSize={"xl"} fontWeight={"bold"} >Get</Text>
            
            </Center>
            <Center>
            <Menu bgColor={"#0005"}>
                <MenuButton 
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}
                  zIndex={2000}>
                  <Text fontSize={"xl"} color={"white"} mr={"190px"}>Profile</Text>
                </MenuButton>
                <MenuList alignItems={'center'}
               zIndex={2000} bgColor={"#0005"} >
                  <br />
                  <Center>
                  
                  </Center>
                  <br />
                  <Center>
                  <Avatar
                      size={'xl'}
                      src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUHK_xd4GHWvzXkA3DygGiU3---JdQdHXbA_uTguFvckcwsMDakFodlYlaQMv4p6fWM5I&usqp=CAU'}
                    />
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem bgColor={"#0005"}>My Account</MenuItem>
                  <MenuItem  bgColor={"#0005"}>My Recipes</MenuItem>
                  <MenuItem bgColor={"#0005"} >Logout</MenuItem>
                </MenuList>
              </Menu>
           
            
            </Center>
        </Flex>
       
        </Flex>
    </Box>
  )
}

export default Navbar2