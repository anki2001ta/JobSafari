import { Box, Text } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { appliedJobs } from '../Redux/AppReducer/Action';

const SingleEmployer = () => {
    const token = useSelector((store) => store.AuthReducer.token);
    const applied = useSelector((store) => store.AppReducer.applied);
    const { id } = useParams();
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(appliedJobs(`${process.env.REACT_APP_URL}/jobs/apply/job/${id}`,token))
    },[])
  return (
    <Box>
        {
            applied.length>0&&applied.map((ele)=>{

                return(
                    <Box>
                        <Text>Name : {ele.username}</Text>
                        <Text>email : {ele.email}</Text>
                        </Box>
                )
            })

        }
    </Box>
  )
}

export default SingleEmployer