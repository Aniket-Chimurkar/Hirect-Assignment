import axios from "axios"
import { useState,useEffect } from "react";
import { Box, Flex ,Text ,Spacer} from "@chakra-ui/react";
import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react";
import "./App.css"
const Chat=()=>{
   
    const [emploi, setemploi] = useState([]);


    useEffect(() => {
        getData();
      }, []);
    
      const getData = () => {
        axios.get("http://localhost:3000/texts").then((res) => {
          setemploi(res.data);
        });
      };
    
      


    return<>
    <div >
    {emploi.map((g) => (
          
          <div id="maindiv"  key={g.id}>
    
   <Box mb="15px">
    <Flex>
    <Avatar
            height="60px"
            width="60px"
            mt="21px"
            ml="20px"
            name="Dan Abrahmov"
            src={g.img}
          />
        <Box>
        <Text fontSize="16px" ml="20px" mt="27px" fontStyle="Poppins" fontWeight="medium" >
            {" "}{g.title}{" "}
          </Text>
          <Text fontSize="14px" ml="20px"  fontStyle="Poppins" fontWeight="regular">
          {" "}{g.Descript}{" "}
          </Text>
        </Box>
        <Spacer />
        <Box mr="25px" mt="21px">
           <Text  fontSize="14px" ml="20px" fontStyle="Poppins" fontWeight="regular">
            {g.Time}
           </Text>
           
           <Box height="18px" width="18px" background="black" color ="white" textAlign="center"  borderRadius="18px" ml="60%" fontSize="12px" >{g.Not}</Box>
        </Box>
    </Flex>
   </Box>



        <hr />
      </div>
          ))}
    {/* <div id="maindiv">
    
   <Box>
    <Flex>
    <Avatar
            height="60px"
            width="60px"
            mt="21px"
            ml="20px"
            name="Dan Abrahmov"
            src="https://bit.ly/dan-abramov"
          />
        <Box>
        <Text fontSize="16px" ml="20px" mt="27px" fontStyle="Poppins" fontWeight="medium" >
            {" "}Aniket{" "}
          </Text>
          <Text fontSize="14px" ml="20px"  fontStyle="Poppins" fontWeight="regular">
          {" "}Descreption{" "}
          </Text>
        </Box>
        <Spacer />
        <Box mr="25px" mt="21px">
           <Text  fontSize="14px" ml="20px" fontStyle="Poppins" fontWeight="regular">
            Time
           </Text>
           
           <Box height="18px" width="18px" background="black" color ="white" textAlign="center"  borderRadius="18px" ml="60%" >2</Box>
        </Box>
    </Flex>
   </Box>



        
      </div> */}
    </div>
    </>
}
export default Chat