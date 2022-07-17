import { Box, Flex, Spacer } from "@chakra-ui/react";
import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import axios from "axios";

import { useState, useEffect } from "react";
// import Chat from "./ChatBox";
import "./App.css";

function App() {
  const [cls, setCls] = useState("black");
  const [cls1, setCls1] = useState("black");
  const [cls2, setCls2] = useState("black");

  const [emploi, setemploi] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios.get("http://localhost:3000/texts").then((res) => {
      setemploi(res.data);
    });
  };

  return (
    <div className="App">
      <div className="topnav">
        <Flex
          align="center"
          onClick={() => {
            alert("Avatar was Clicked");
          }}
        >
          <Avatar
            height="48px"
            mt="21px"
            ml="20px"
            name="Dan Abrahmov"
            src="https://bit.ly/dan-abramov"
          />
          <Text fontSize="18px" ml="20px" mt="21px" color="white">
            {" "}
            Diana{" "}
          </Text>
        </Flex>
      </div>
      {/* top Nav */}

      <div
        className="chatbox"
        onClick={() => {
          alert("Chatbox was Clicked");
        }}
      >
        <div className="innerchat">
          {/* ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; */}

          <div id="maindiv">
            <Box mb="15px">
              <Flex>
                <Avatar
                  height="60px"
                  width="60px"
                  mt="21px"
                  ml="20px"
                  name="Dan Abrahmov"
                  src="https://bit.ly/sage-adebayo"
                />
                <Box>
                  <Text
                    fontSize="16px"
                    ml="20px"
                    mt="27px"
                    fontStyle="Poppins"
                    fontWeight="medium"
                  >
                    {" "}
                    Sarah{" "}
                  </Text>
                  <Text
                    fontSize="14px"
                    ml="20px"
                    fontStyle="Poppins"
                    fontWeight="regular"
                  >
                    {" "}
                    Heyyy ! I have Completed the design{" "}
                  </Text>
                </Box>
                <Spacer />
                <Box mr="25px" mt="21px">
                  <Text
                    fontSize="14px"
                    ml="19px"
                    fontStyle="Poppins"
                    fontWeight="regular"
                  >
                    11.30
                  </Text>

                  <Box
                    height="18px"
                    width="18px"
                    background="black"
                    color="white"
                    textAlign="center"
                    borderRadius="18px"
                    ml="60%"
                    fontSize="12px"
                  >
                    1
                  </Box>
                </Box>
              </Flex>
            </Box>
            <hr />
          </div>

          <div id="maindiv">
            <Box mb="15px">
              <Flex>
                <Avatar
                  height="60px"
                  width="60px"
                  mt="21px"
                  ml="20px"
                  name="Dani"
                  src="https://bit.ly/tioluwani-kolawole"
                />
                <Box>
                  <Text
                    fontSize="16px"
                    ml="20px"
                    mt="27px"
                    fontStyle="Poppins"
                    fontWeight="medium"
                  >
                    {" "}
                    Michale{" "}
                  </Text>
                  <Text
                    fontSize="14px"
                    ml="20px"
                    fontStyle="Poppins"
                    fontWeight="regular"
                  >
                    {" "}
                    call me when you are available{" "}
                  </Text>
                </Box>
                <Spacer />
                <Box mr="25px" mt="21px">
                  <Text
                    fontSize="14px"
                    ml="19px"
                    fontStyle="Poppins"
                    fontWeight="regular"
                  >
                    11.15
                  </Text>

                  <Box
                    height="18px"
                    width="18px"
                    background="black"
                    color="white"
                    textAlign="center"
                    borderRadius="18px"
                    ml="60%"
                    fontSize="12px"
                  >
                    3
                  </Box>
                </Box>
              </Flex>
            </Box>
            <hr />
          </div>

          <div id="maindiv">
            <Box mb="15px">
              <Flex>
                <Avatar
                  height="60px"
                  width="60px"
                  mt="21px"
                  ml="20px"
                  name="Abrahmov"
                  src="https://bit.ly/kent-c-dodds"
                />
                <Box>
                  <Text
                    fontSize="16px"
                    ml="20px"
                    mt="27px"
                    fontStyle="Poppins"
                    fontWeight="medium"
                  >
                    {" "}
                    Smith{" "}
                  </Text>
                  <Text
                    fontSize="14px"
                    ml="20px"
                    fontStyle="Poppins"
                    fontWeight="regular"
                  >
                    {" "}
                    When are You available{" "}
                  </Text>
                </Box>
                <Spacer />
                <Box mr="25px" mt="21px">
                  <Text
                    fontSize="14px"
                    ml="19px"
                    fontStyle="Poppins"
                    fontWeight="regular"
                  >
                    11.30
                  </Text>

                  <Box
                    height="18px"
                    width="18px"
                    background="black"
                    color="white"
                    textAlign="center"
                    borderRadius="18px"
                    ml="60%"
                    fontSize="12px"
                  >
                    2
                  </Box>
                </Box>
              </Flex>
            </Box>
            <hr />
          </div>

          <div id="maindiv">
            <Box mb="15px">
              <Flex>
                <Avatar
                  height="60px"
                  width="60px"
                  mt="21px"
                  ml="20px"
                  name="Dan Abrahmov"
                  src="https://bit.ly/sage-adebayo"
                />
                <Box>
                  <Text
                    fontSize="16px"
                    ml="20px"
                    mt="27px"
                    fontStyle="Poppins"
                    fontWeight="medium"
                  >
                    {" "}
                    Smith{" "}
                  </Text>
                  <Text
                    fontSize="14px"
                    ml="20px"
                    fontStyle="Poppins"
                    fontWeight="regular"
                  >
                    {" "}
                    When are You available{" "}
                  </Text>
                </Box>
                <Spacer />
                <Box mr="25px" mt="21px">
                  <Text
                    fontSize="14px"
                    ml="19px"
                    fontStyle="Poppins"
                    fontWeight="regular"
                  >
                    11.30
                  </Text>

                  <Box
                    height="18px"
                    width="18px"
                    background="black"
                    color="white"
                    textAlign="center"
                    borderRadius="18px"
                    ml="60%"
                    fontSize="12px"
                  >
                    2
                  </Box>
                </Box>
              </Flex>
            </Box>
            <hr />
          </div>

          <div id="maindiv">
            <Box mb="15px">
              <Flex>
                <Avatar
                  height="60px"
                  width="60px"
                  mt="21px"
                  ml="20px"
                  name="Dan Abrahmov"
                  src="https://bit.ly/sage-adebayo"
                />
                <Box>
                  <Text
                    fontSize="16px"
                    ml="20px"
                    mt="27px"
                    fontStyle="Poppins"
                    fontWeight="medium"
                  >
                    {" "}
                    Smith{" "}
                  </Text>
                  <Text
                    fontSize="14px"
                    ml="20px"
                    fontStyle="Poppins"
                    fontWeight="regular"
                  >
                    {" "}
                    When are You available{" "}
                  </Text>
                </Box>
                <Spacer />
                <Box mr="25px" mt="21px">
                  <Text
                    fontSize="14px"
                    ml="19px"
                    fontStyle="Poppins"
                    fontWeight="regular"
                  >
                    11.30
                  </Text>

                  <Box
                    height="18px"
                    width="18px"
                    background="black"
                    color="white"
                    textAlign="center"
                    borderRadius="18px"
                    ml="60%"
                    fontSize="12px"
                  >
                    2
                  </Box>
                </Box>
              </Flex>
            </Box>
            <hr />
          </div>

          <div id="maindiv">
            <Box mb="15px">
              <Flex>
                <Avatar
                  height="60px"
                  width="60px"
                  mt="21px"
                  ml="20px"
                  name="Dan Abrahmov"
                  src="https://bit.ly/sage-adebayo"
                />
                <Box>
                  <Text
                    fontSize="16px"
                    ml="20px"
                    mt="27px"
                    fontStyle="Poppins"
                    fontWeight="medium"
                  >
                    {" "}
                    Smith{" "}
                  </Text>
                  <Text
                    fontSize="14px"
                    ml="20px"
                    fontStyle="Poppins"
                    fontWeight="regular"
                  >
                    {" "}
                    When are You available{" "}
                  </Text>
                </Box>
                <Spacer />
                <Box mr="25px" mt="21px">
                  <Text
                    fontSize="14px"
                    ml="19px"
                    fontStyle="Poppins"
                    fontWeight="regular"
                  >
                    11.30
                  </Text>

                  <Box
                    height="18px"
                    width="18px"
                    background="black"
                    color="white"
                    textAlign="center"
                    borderRadius="18px"
                    ml="60%"
                    fontSize="12px"
                  >
                    2
                  </Box>
                </Box>
              </Flex>
            </Box>
            <hr />
          </div>

          <div id="maindiv">
            <Box mb="15px">
              <Flex>
                <Avatar
                  height="60px"
                  width="60px"
                  mt="21px"
                  ml="20px"
                  name="Dan Abrahmov"
                  src="https://bit.ly/sage-adebayo"
                />
                <Box>
                  <Text
                    fontSize="16px"
                    ml="20px"
                    mt="27px"
                    fontStyle="Poppins"
                    fontWeight="medium"
                  >
                    {" "}
                    Smith{" "}
                  </Text>
                  <Text
                    fontSize="14px"
                    ml="20px"
                    fontStyle="Poppins"
                    fontWeight="regular"
                  >
                    {" "}
                    When are You available{" "}
                  </Text>
                </Box>
                <Spacer />
                <Box mr="25px" mt="21px">
                  <Text
                    fontSize="14px"
                    ml="19px"
                    fontStyle="Poppins"
                    fontWeight="regular"
                  >
                    11.30
                  </Text>

                  <Box
                    height="18px"
                    width="18px"
                    background="black"
                    color="white"
                    textAlign="center"
                    borderRadius="18px"
                    ml="60%"
                    fontSize="12px"
                  >
                    2
                  </Box>
                </Box>
              </Flex>
            </Box>
            <hr />
          </div>
          {/* ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; */}
        </div>
      </div>
      <div className="Add"></div>

      {/* Chatbox */}

      <div
        className="bottomnav"
        onClick={() => {
          alert("BottomNav was Clicked");
        }}
      >
        <Flex align="center" justify="center">
          <Box
            mt="20px"
            mr="80px"
            onClick={() =>
              setCls((cls) => (cls === "#E7E049" ? "black" : "#E7E049"))
            }
          >
            <img
              className="bnavimg"
              src="https://pixy.org/src/162/thumbs350/1626684.jpg"
              height="28"
              width="28px"
              alt=""
            />
            <div className="light" style={{ background: cls }}></div>
          </Box>
          <Box
            mt="20px"
            onClick={() =>
              setCls1((cls1) => (cls1 === "#E7E049" ? "black" : "#E7E049"))
            }
          >
            <img
              className="bnavimg"
              src="https://static.vecteezy.com/system/resources/previews/000/576/370/non_2x/adjustment-music-icon-vector-illustration.jpg"
              height="28px"
              width="28px"
              alt=""
            />
            <div className="light" style={{ background: cls1 }}></div>
          </Box>
          <Box
            mt="20px"
            ml="80px"
            onClick={() =>
              setCls2((cls2) => (cls2 === "#E7E049" ? "black" : "#E7E049"))
            }
          >
            <img
              className="bnavimg"
              src="https://i.pinimg.com/564x/d4/e7/75/d4e7756038ed28a49654d7666d9710f4.jpg"
              height="28px"
              width="28px"
              alt=""
            />
            <div className="light" style={{ background: cls2 }}></div>
          </Box>
        </Flex>
      </div>
    </div>
  );
}

//  onClick={() => setCls1((cls1) => (cls1 === "#E7E049" ? "black" : "#E7E049")) }
export default App;
