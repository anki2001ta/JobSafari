import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { jobData } from '../Redux/AppReducer/Action';
import { useSelector } from 'react-redux';
import { Box, Button, Center, SimpleGrid, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Employee = () => {
  const token=useSelector((store)=>store.AuthReducer.token);
  const data=useSelector((store)=>store.AppReducer.jobData);
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const handleSingle=(id)=>{
    navigate(`/singleEmployee/${id}`);
  }
  useEffect(()=>{
    dispatch(jobData(`${process.env.REACT_APP_URL}/jobs`,token));
  },[])
  return (
    <Box>
      <SimpleGrid columns={[1,2,3,4]}>
      {
        data.length>0&&data.map((elem,i)=>{
          return(
            <Box key={i}>
              <Center>
                <Text>Name : {elem.title}</Text>
              </Center>
              <Center>
                <Text>Timing : {elem.type}</Text>
              </Center>
              <Center>
                <Button onClick={()=>handleSingle(elem._id)}>View More</Button>
              </Center>
              </Box>
          )
        })
      }
      </SimpleGrid>
    </Box>
  )
}

export default Employee