import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { applyJob, handleData } from "../Redux/AppReducer/Action";
import { useSelector } from "react-redux";
import { Box, Button, Center, Text } from "@chakra-ui/react";

const SingleEmployee = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const token = useSelector((store) => store.AuthReducer.token);
  const user = useSelector((store) => store.AuthReducer.userinfo);
  const data = useSelector((store) => store.AppReducer.singleData);
  const handleApply=()=>{
    const pload={
      jobID:id,
      username:user.name,
      email:user.email
    }
    dispatch(applyJob(`${process.env.REACT_APP_URL}/jobs/applyjob`,pload, token));
  }
  useEffect(() => {
    dispatch(
      handleData(`${process.env.REACT_APP_URL}/jobs/singlejob/${id}`, token)
    );
  }, []);
  return (
    <Box>
      <Center>
        <Text>Name : {data.title}</Text>
      </Center>
      <Center>
        <Text>About job : {data.description}</Text>
      </Center>
      <Center>
        <Text>Location : {data.location}</Text>
      </Center>
      <Center>
        <Text>Posting Date : {data.posting_date}</Text>
      </Center>
      <Center>
        <Text>Timing : {data.type}</Text>
      </Center>
      <Center>
        <Button onClick={handleApply}>Apply</Button>
      </Center>
    </Box>
  );
};

export default SingleEmployee;
