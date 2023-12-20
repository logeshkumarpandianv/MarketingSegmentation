import styled from "styled-components";
import { motion } from "framer-motion";
import Button from "../Components/Subcomponents/Button";
import { BsBookmarkPlusFill } from "react-icons/bs";

import { useContext, useEffect, useState } from "react";
// import { DataContext } from "../Contexts/DataContext";
import Query from "../Components/Query";
import { Input, SIZE } from "baseui/input";
// import { ChevronLeft, ChevronRight, Upload } from "baseui/icon";
import { Radio, RadioGroup } from "baseui/radio";

import { FetchData } from "../Components/Subcomponents/FetchData";
import { DataContext } from "../Contexts/DataContext";

const Container = styled(motion.div)`
  width: 100%;
  min-height: 100%;
  display: flex;
`;

const Inner = styled(motion.div)`
  width: 100%;
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  text-transform: uppercase;
`;

const Left = styled.div`
  width: 15%;
  display: flex;
  padding: 10px;
  align-items: flex-start;
  // justify-content: center;
  height: 100%;
  flex-direction: column;
  // gap: 10px;
  height: 100%;
  overflow: hidden;
`;
const Header = styled.div`
  background-color: #e0e1dd;
  padding: 5px 10px;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  gap: 5px;
  margin: 10px;
`;

const Recents = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
  height: 100%;
`;

const RecentHeader = styled(motion.div)`
  text-transform: capitalize;
  font-weight: 400;
  letter-spacing: 0.3px;
  // text-decoration: underline;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  height: 5%;
`;

const RecentContainer = styled(motion.div)`
  height: 400px;

  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 5px;
    background-color: #abc4ff;
  }
  &::-webkit-scrollbar-track {
    width: 5px;
    background-color: #abc4ff;
  }
  &::-webkit-scrollbar-thumb {
    width: 5px;
    background-color: #7678ed;
  }
`;

const Queries = styled(motion.div)`
  background-color: ${(props) => props.val};
  height: 60px;
  width: 100%;
  display: flex;
  // align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 3px 10px;
  cursor: pointer;
  font-size: 10px;
  gap: 2px;
  text-transform: capitalize;
`;

const QName = styled(motion.div)`
  font-weight: bold;
  letter-spacing: 0.5px;
`;

const QID = styled(motion.div)``;

const QStatus = styled(motion.div)`
  display: flex;
  justify-content: flex-end;
`;

const Center = styled(motion.div)`
  width: 65%;
  height: 100%;
  display: flex;
  align-items: center;
  border: 1px solid lightgray;
  flex-direction: column;
  margin: 5px;
  gap: 10px;
  padding: 10px;
`;

const Center1 = styled(motion.div)`
  width: 65%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid lightgray;
  flex-direction: column;
  margin: 5px;
  gap: 10px;
  padding: 10px;
  font-size: 20px;
`;

const Top = styled.div`
  height: 10%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Name = styled.div``;
const QueryBuilder = styled.div`
  height: 75%;
  width: 100%;
  position: relative;
`;

const BottomContainer = styled.div`
  height: 15%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0px;
`;

const SubmitContainer = styled.div`
  width: max-content;
`;

const SliderContainer = styled.div`
  width: 50%;
  // border: 1px solid green;
`;

const Right = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${(props) => props.bgcolor};
  border-radius: 5px;
  box-shadow: var(--box-shadow);
`;

const RightHeader = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RightHeaderInner = styled.div`
  width: max-content;
  height: max-content;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background-color: #00f5d4;
  padding: 5px 10px;
  border-radius: 3px;
  box-shadow: var(--box-shadow);
`;

const RightBody = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  // font-size: 14px;
  line-height: 30px;
  font-weight: 500;
  // text-transform: capitalize;
  letter-spacing: 0.2px;
  // text-indent: 40px;
`;

const RightFooter = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Homepage = () => {
  const { url, data, msg, options } = useContext(DataContext);

  useEffect(() => {
    const reloadCount = sessionStorage.getItem("reloadCount");
    if (reloadCount < 1) {
      sessionStorage.setItem("reloadCount", String(reloadCount + 1));
      window.location.reload();
    } else {
      sessionStorage.removeItem("reloadCount");
    }
  }, []);

  // useEffect(() => {
  //   console.log(data);
  // });

  const [constraints, setConstraints] = useState("1");

  const [radio, setRadio] = useState("1");
  const [radioBtn, setRadioBtn] = useState("");

  useEffect(() => {
    if (radio === "2") {
      setRadioBtn("In");
    } else if (radio === "3") {
      setRadioBtn("Not In");
    }
  }, [radio]);

  const handleConstraints = () => {
    setConstraints(constraints + 1);
  };

  const [name, setName] = useState("");
  const [create, setCreate] = useState(false);

  ////////////////// Used Fields ///////////////////////////////

  // const handleUsedFields = () => {};

  ////////////////// Constraint 1 //////////////////////////////
  const [field1, setField1] = useState([]);
  const [operation1, setOperation1] = useState([]);
  const [option1, setOption1] = useState([]);

  const [input11, setInput11] = useState();
  const [input21, setInput21] = useState();

  const [singleDate11, setSingleDate11] = useState(null);
  const [singleDate21, setSingleDate21] = useState(null);

  const [query1, setQuery1] = useState("");

  const handleField1 = (value) => {
    setField1(value);
    setOperation1([]);
    setOption1([]);
    setField2([]);
    setField3([]);
    setField4([]);
    setField5([]);
    setConstraints(1);
  };

  const handleOperation1 = (value) => {
    setOperation1(value);
    setOption1([]);
    setInput11();
    setInput21();
    setSingleDate11(null);
    setSingleDate21(null);
  };

  ////////////////// Constraint 2 //////////////////////////////
  const [field2, setField2] = useState([]);
  const [operation2, setOperation2] = useState([]);
  const [option2, setOption2] = useState([]);

  const [input12, setInput12] = useState();
  const [input22, setInput22] = useState();

  const [singleDate12, setSingleDate12] = useState(null);
  const [singleDate22, setSingleDate22] = useState(null);

  const [query2, setQuery2] = useState("");

  const handleField2 = (value) => {
    setField2(value);
    setOperation2([]);
    setOption2([]);

    setField3([]);
    setField4([]);
    setField5([]);
    setConstraints(2);
  };

  const handleOperation2 = (value) => {
    setOperation2(value);
    setOption2([]);
    setInput12();
    setInput22();
    setSingleDate12(null);
    setSingleDate22(null);
  };

  ////////////////// Constraint 3 //////////////////////////////
  const [field3, setField3] = useState([]);
  const [operation3, setOperation3] = useState([]);
  const [option3, setOption3] = useState([]);

  const [input13, setInput13] = useState();
  const [input23, setInput23] = useState();

  const [singleDate13, setSingleDate13] = useState(null);
  const [singleDate23, setSingleDate23] = useState(null);

  const [query3, setQuery3] = useState("");

  const handleField3 = (value) => {
    setField3(value);
    setOperation3([]);
    setOption3([]);

    setField4([]);
    setField5([]);
    setConstraints(3);
  };

  const handleOperation3 = (value) => {
    setOperation3(value);
    setOption3([]);
    setInput13();
    setInput23();
    setSingleDate13(null);
    setSingleDate23(null);
  };

  ////////////////// Constraint 4 //////////////////////////////
  const [field4, setField4] = useState([]);
  const [operation4, setOperation4] = useState([]);
  const [option4, setOption4] = useState([]);

  const [input14, setInput14] = useState();
  const [input24, setInput24] = useState();

  const [singleDate14, setSingleDate14] = useState(null);
  const [singleDate24, setSingleDate24] = useState(null);

  const [query4, setQuery4] = useState("");

  const handleField4 = (value) => {
    setField4(value);
    setOperation4([]);
    setOption4([]);

    setField5([]);
    setConstraints(4);
  };

  const handleOperation4 = (value) => {
    setOperation4(value);
    setOption4([]);
    setInput14();
    setInput24();
    setSingleDate14(null);
    setSingleDate24(null);
  };

  ////////////////// Constraint 5 //////////////////////////////
  const [field5, setField5] = useState([]);
  const [operation5, setOperation5] = useState([]);
  const [option5, setOption5] = useState([]);

  const [input15, setInput15] = useState();
  const [input25, setInput25] = useState();

  const [singleDate15, setSingleDate15] = useState(null);
  const [singleDate25, setSingleDate25] = useState(null);

  const [query5, setQuery5] = useState("");

  const handleField5 = (value) => {
    setField5(value);
    setOperation5([]);
    setOption5([]);
  };

  const handleOperation5 = (value) => {
    setOperation5(value);
    setOption5([]);
    setInput15();
    setInput25();
    setSingleDate15(null);
    setSingleDate25(null);
  };

  ////////////////// Constraint 6 //////////////////////////////
  const [field6, setField6] = useState([]);
  const [operation6, setOperation6] = useState([]);
  const [option6, setOption6] = useState([]);

  const [input16, setInput16] = useState();
  const [input26, setInput26] = useState();

  const [singleDate16, setSingleDate16] = useState(null);
  const [singleDate26, setSingleDate26] = useState(null);

  const [query6, setQuery6] = useState("");

  const handleField6 = (value) => {
    setField6(value);
    setOperation5([]);
    setOption5([]);
  };

  const handleOperation6 = (value) => {
    setOperation6(value);
    setOption6([]);
    setInput16();
    setInput26();
    setSingleDate16(null);
    setSingleDate26(null);
  };

  useEffect(() => {
    if (radio === "1") {
      setField6([]);
      setOperation6([]);
      setOption6([]);
      setInput16();
      setInput26();
      setSingleDate16(null);
      setSingleDate26(null);
      setQuery6("");
    }
  }, [radio]);

  ///////////////////////// Used Fields /////////////////////

  const [usedFields, setUsedFields] = useState([]);

  useEffect(() => {
    let a = "";
    let b = "";
    let c = "";
    let d = "";
    let e = "";

    if (field1.length > 0) {
      a = field1[0].value;
    }

    if (field2.length > 0) {
      b = field2[0].value;
    }

    if (field3.length > 0) {
      c = field3[0].value;
    }

    if (field4.length > 0) {
      d = field4[0].value;
    }

    if (field5.length > 0) {
      e = field5[0].value;
    }

    let finalList = [a, b, c, d, e];
    setUsedFields(finalList);
    // console.log(finalList);
  }, [field1, field2, field3, field4, field5]);

  ///////////////////////////// Final Query ///////////////////////////////

  const [finalQuery, setFinalQuery] = useState("");

  const [load, setLoad] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(
    () => {
      if (field5.length > 0) {

        if (field6.length > 0 ) {
          setFinalQuery("SELECT DISTINCT customer_code from ws_sales_data_v2 where " + query1 + " and " + query2 + " and " + query3 + " and " + query4 + " and " + query5
                        +" AND customer_code " + radioBtn + " (SELECT DISTINCT customer_code from ws_sales_data_v2 where " + query6 + ")");
        } else {
          // prettier-ignore
          setFinalQuery("SELECT DISTINCT customer_code from ws_sales_data_v2 where " + query1 + " and " + query2 + " and " + query3 + " and " + query4 + " and " + query5);
        }
    } else if (field4.length > 0) {

      if (field6.length > 0) {
          setFinalQuery("SELECT DISTINCT customer_code from ws_sales_data_v2 where " + query1 + " and " + query2 + " and " + query3 + " and " + query4
          +" AND customer_code " + radioBtn + " (SELECT DISTINCT customer_code from ws_sales_data_v2 where " + query6 + ")");
     
      } else {
        // prettier-ignore
        setFinalQuery("SELECT DISTINCT customer_code from ws_sales_data_v2 where " + query1 + " and " + query2 + " and " + query3 + " and " + query4);
      }
    } else if (field3.length > 0) {

      if (field6.length > 0) {
          setFinalQuery("SELECT DISTINCT customer_code from ws_sales_data_v2 where " + query1 + " and " + query2 + " and " + query3
          +" AND customer_code " + radioBtn + " (SELECT DISTINCT customer_code from ws_sales_data_v2 where " + query6 + ")");
     
      } else {
        setFinalQuery("SELECT DISTINCT customer_code from ws_sales_data_v2 where " + query1 + " and " + query2 + " and " + query3);
      }
    } else if (field2.length > 0) {

      if (field6.length > 0) {
          setFinalQuery("SELECT DISTINCT customer_code from ws_sales_data_v2 where " + query1 + " and " + query2
          +" AND customer_code " + radioBtn + " (SELECT DISTINCT customer_code from ws_sales_data_v2 where " + query6 + ")");
      
      } else {
        setFinalQuery("SELECT DISTINCT customer_code from ws_sales_data_v2 where " + query1 + " and " + query2);
      }
    } else if (field1.length > 0) {

      if (field6.length > 0) {
          setFinalQuery("SELECT DISTINCT customer_code from ws_sales_data_v2 where " + query1
          +" AND customer_code " + radioBtn + " (SELECT DISTINCT customer_code from ws_sales_data_v2 where " + query6 + ")");
    
      } else {
        setFinalQuery("SELECT DISTINCT customer_code from ws_sales_data_v2 where " + query1);
      }}
      // prettier-ignore
    },
    // prettier-ignore
    [field1, field2, field3, field4, field5, field6, query1, query2, query3, query4, query5, query6, radio, radioBtn]
  );

  // prettier-ignore

  // const list = ["Query 1", "Query 2","Query 1", "Query 2","Query 1", "Query 2"];
  // const navigate = useNavigate()

  //////////////////////////// Post Query ////////////////////////////

  const handleSubmit = async () => {
    if (finalQuery.length > 0) {
      setLoad(true);
      setMessage("");
      const response = await FetchData({
        endpoint: url + "create/check",
        data: {
          query: finalQuery,
          name: name,
        },
      });

      if (response.error === "no error") {
        setLoad(false);
        setMessage(response.message);
        setFinalQuery("");
      } else {
        setLoad(false);
        setMessage(response.message);
      }
    }
  };

  const handleClose = () => {
    window.location.reload();
  };

  return (
    <>
      {msg === "loading" ? (
        <Container>
          <Inner>Loading...</Inner>
        </Container>
      ) : (
        <Container
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            duration: 0.5,
            delay: 0.5,
          }}
        >
          {options.length > 0 ? (
            <>
              <Left>
                <Header onClick={() => setCreate(!create)}>
                  <BsBookmarkPlusFill size={20} />
                  <span> Create New </span>
                </Header>

                <Recents>
                  <RecentHeader>More Recents</RecentHeader>
                  <RecentContainer>
                    {data.length > 0 &&
                      data.map((value, i) => {
                        return (
                          <Queries key={i} val={i % 2 === 0 ? "#e9ecef" : ""}>
                            {/* {value.query_name.length > 20 ? (
                          <QName>{value.query_name}</QName>
                        ) : (
                          <QName>{value.query_name}</QName>
                        )} */}
                            <QName>{value.query_name}</QName>
                            <QID> {value.id}</QID>
                            <QStatus>{value.status}</QStatus>
                          </Queries>
                        );
                      })}
                  </RecentContainer>
                </Recents>
              </Left>

              {create ? (
                <Center
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    duration: 0.2,
                    delay: 0.2,
                  }}
                >
                  <Top>
                    <Header>Query Builder</Header>
                    <Name>
                      <Input
                        size={SIZE.compact}
                        value={name}
                        onChange={(event) => setName(event.currentTarget.value)}
                        placeholder="Enter Name"
                      />
                    </Name>
                  </Top>
                  <QueryBuilder>
                    {constraints >= 1 && (
                      <Query
                        field={field1}
                        handleField={handleField1}
                        operation={operation1}
                        handleOperation={handleOperation1}
                        option={option1}
                        setOption={setOption1}
                        singleDate1={singleDate11}
                        setSingleDate1={setSingleDate11}
                        singleDate2={singleDate21}
                        setSingleDate2={setSingleDate21}
                        input1={input11}
                        setInput1={setInput11}
                        input2={input21}
                        setInput2={setInput21}
                        handleConstraints={handleConstraints}
                        setQuery={setQuery1}
                        usedFields={usedFields}
                      />
                    )}

                    {constraints >= 2 &&
                      (option1.length > 0 ||
                        singleDate11 !== null ||
                        singleDate21 !== null ||
                        input11 !== undefined ||
                        input21 !== undefined) && (
                        <Query
                          field={field2}
                          handleField={handleField2}
                          operation={operation2}
                          handleOperation={handleOperation2}
                          option={option2}
                          setOption={setOption2}
                          singleDate1={singleDate12}
                          setSingleDate1={setSingleDate12}
                          singleDate2={singleDate22}
                          setSingleDate2={setSingleDate22}
                          input1={input12}
                          setInput1={setInput12}
                          input2={input22}
                          setInput2={setInput22}
                          handleConstraints={handleConstraints}
                          setQuery={setQuery2}
                          usedFields={usedFields}
                        />
                      )}

                    {constraints >= 3 &&
                      (option2.length > 0 ||
                        singleDate12 !== null ||
                        singleDate22 !== null ||
                        input12 !== undefined ||
                        input22 !== undefined) && (
                        <Query
                          field={field3}
                          handleField={handleField3}
                          operation={operation3}
                          handleOperation={handleOperation3}
                          option={option3}
                          setOption={setOption3}
                          singleDate1={singleDate13}
                          setSingleDate1={setSingleDate13}
                          singleDate2={singleDate23}
                          setSingleDate2={setSingleDate23}
                          input1={input13}
                          setInput1={setInput13}
                          input2={input23}
                          setInput2={setInput23}
                          handleConstraints={handleConstraints}
                          setQuery={setQuery3}
                          usedFields={usedFields}
                        />
                      )}

                    {constraints >= 4 &&
                      (option3.length > 0 ||
                        singleDate13 !== null ||
                        singleDate23 !== null ||
                        input13 !== undefined ||
                        input23 !== undefined) && (
                        <Query
                          field={field4}
                          handleField={handleField4}
                          operation={operation4}
                          handleOperation={handleOperation4}
                          option={option4}
                          setOption={setOption4}
                          singleDate1={singleDate14}
                          setSingleDate1={setSingleDate14}
                          singleDate2={singleDate24}
                          setSingleDate2={setSingleDate24}
                          input1={input14}
                          setInput1={setInput14}
                          input2={input24}
                          setInput2={setInput24}
                          handleConstraints={handleConstraints}
                          setQuery={setQuery4}
                          usedFields={usedFields}
                        />
                      )}

                    {constraints >= 5 &&
                      (option4.length > 0 ||
                        singleDate14 !== null ||
                        singleDate24 !== null ||
                        input14 !== undefined ||
                        input24 !== undefined) && (
                        <Query
                          field={field5}
                          handleField={handleField5}
                          operation={operation5}
                          handleOperation={handleOperation5}
                          option={option5}
                          setOption={setOption5}
                          singleDate1={singleDate15}
                          setSingleDate1={setSingleDate15}
                          singleDate2={singleDate25}
                          setSingleDate2={setSingleDate25}
                          input1={input15}
                          setInput1={setInput15}
                          input2={input25}
                          setInput2={setInput25}
                          handleConstraints={handleConstraints}
                          setQuery={setQuery5}
                          usedFields={usedFields}
                        />
                      )}

                    {(radio === "2" || radio === "3") && (
                      <Query
                        bgColor={"#ffcdb2"}
                        position={"absolute"}
                        bottom={"0px"}
                        field={field6}
                        handleField={handleField6}
                        operation={operation6}
                        handleOperation={handleOperation6}
                        option={option6}
                        setOption={setOption6}
                        singleDate1={singleDate16}
                        setSingleDate1={setSingleDate16}
                        singleDate2={singleDate26}
                        setSingleDate2={setSingleDate26}
                        input1={input16}
                        setInput1={setInput16}
                        input2={input26}
                        setInput2={setInput26}
                        handleConstraints={handleConstraints}
                        setQuery={setQuery6}
                        usedFields={usedFields}
                        fieldCheck={true}
                      />
                    )}
                  </QueryBuilder>

                  {name.length > 0 &&
                    (query1 !== "" ||
                      query2 !== "" ||
                      query3 !== "" ||
                      query4 !== "" ||
                      query5 !== "") && (
                      <BottomContainer>
                        <SliderContainer>
                          <RadioGroup
                            align="horizontal"
                            name="horizontal"
                            onChange={(e) => setRadio(e.target.value)}
                            value={radio}
                          >
                            <Radio value="1">None</Radio>
                            <Radio value="2">Include Range</Radio>
                            <Radio value="3">Exclude Range</Radio>
                          </RadioGroup>
                        </SliderContainer>
                        {load ? (
                          <SubmitContainer>
                            <Button
                              bgcolor={"lightgrey"}
                              color={"black"}
                              name={"Loading..."}
                            />
                          </SubmitContainer>
                        ) : (
                          <>
                            {finalQuery.length > 0 ? (
                              <SubmitContainer>
                                <Button
                                  bgcolor={"black"}
                                  color={"white"}
                                  name={"submit"}
                                  onClick={handleSubmit}
                                />
                              </SubmitContainer>
                            ) : (
                              <SubmitContainer>
                                <Button
                                  bgcolor={"black"}
                                  color={"white"}
                                  name={"close"}
                                  onClick={handleClose}
                                />
                              </SubmitContainer>
                            )}
                          </>
                        )}
                      </BottomContainer>
                    )}
                </Center>
              ) : (
                <Center1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    duration: 0.2,
                    delay: 0.2,
                  }}
                >
                  Build your queries here
                </Center1>
              )}

              <Right bgcolor={message.length > 0 ? "#ffd6ff" : "#d7e3fc"}>
                <RightHeader>
                  <RightHeaderInner>Final Query</RightHeaderInner>
                </RightHeader>
                {message.length > 0 ? (
                  <RightBody>{message}</RightBody>
                ) : (
                  <RightBody>{finalQuery}</RightBody>
                )}
                <RightFooter></RightFooter>
              </Right>
            </>
          ) : (
            <Container>
              <Inner>Loading...</Inner>
            </Container>
          )}
        </Container>
      )}
    </>
  );
};

export default Homepage;
