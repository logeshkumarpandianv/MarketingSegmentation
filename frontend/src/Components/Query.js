import { Select } from "baseui/select";
import { SIZE, Input } from "baseui/input";
import { DatePicker } from "baseui/datepicker";
import styled from "styled-components";
import { useContext, useEffect } from "react";
import { DataContext } from "../Contexts/DataContext";
import { BsBookmarkPlusFill } from "react-icons/bs";

const QueryLine = styled.div`
  width: 100%;
  display: flex;
  height: 60px;
  gap: 10px;
  align-items: center;
  justify-content: flex-start;
  flex: 1;
  background-color: ${(props) => props.bgColor};
  // border: 1px solid blue;
  position: ${(props) => props.position};
  bottom: ${(props) => props.bottom};
`;

const LeftQuery = styled.div`
  width: 95%;
  display: flex;
  height: 80px;
  gap: 10px;
  align-items: center;
  justify-content: flex-start;
  flex: 1;
`;

const AddNewContiditon = styled.div`
  width: 5%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SelectField = styled.div`
  width: 20%;
`;
const SelectOperation = styled.div`
  width: 20%;
`;
const SelectOption = styled.div`
  min-width: 20%;
  display: flex;
  gap: 10px;
`;
const Span = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

// prettier-ignore
const Query = ({ fieldCheck, bgColor, position, bottom, field, operation, handleField, handleOperation, option, setOption, singleDate1, setSingleDate1, singleDate2, setSingleDate2, input1, setInput1, input2, setInput2, handleConstraints, setQuery, usedFields }) => {
  
  const { fields, fields1, operations, options } = useContext(DataContext);

  useEffect(() => {
    let query1 = "";
    console.log(field, option)
    if ( field.length > 0 && operation.length > 0 && (option.length > 0 || singleDate1 !== null || singleDate2 !== null || input1 !== undefined || input2 !== undefined))
    {
      if (field[0].setting === "Dropdown") {

        if (operation[0].value === "In") {
          let list = [];

          for (let i = 0; i < option.length; i++) {
            let entry = "'" + option[i].value + "'";
            list.push(entry);
          }

          query1 = field[0].value + " " + operation[0].symbol + " " + "("+ list + ")";

        } else if (operation[0].value !== "In") {
          query1 = field[0].value + " " + operation[0].symbol + " '" + option[0].value + "'";
        }

      } else if (field[0].setting === "Input") {

        if (operation[0].value !== "Between") {
          if(field[0].value === "sum(quantity)" || field[0].value === "sum(amount)" || field[0].value === "sum(total_disc_amount)" ) {
            query1 = " group by customer_code, customer_name, customer_mobile having " + field[0].value + " " + operation[0].symbol + " '" + input1 + "'";
          } else {
          query1 = field[0].value + " " + operation[0].symbol + " '" + input1 + "'";
        }
        }
        else if (operation[0].value === "Between") {
          query1 = field[0].value + " > " + " '" + input1 + "' and " + field[0].value + " < " + "'" + input2 + "'";
        }

      } else if (field[0].setting === "Calender") {
        // console.log(field);
        if (operation[0].value !== "Between") {

          let day = singleDate1.getDate();
          let month = singleDate1.getMonth()+1;
          let year = singleDate1.getFullYear();

          query1 = field[0].value + " " + operation[0].symbol + " '" + year+"-"+month+"-"+day+ "'";

        } else if (operation[0].value === "Between") {

          let day1 = singleDate1.getDate();
          let month1 = singleDate1.getMonth()+1;
          let year1 = singleDate1.getFullYear();


          let day2 = "";
          let month2 = "";
          let year2 = "";

          if(singleDate2 !== null)
          {
            day2 = singleDate2.getDate();
            month2 = singleDate2.getMonth()+1;
            year2 = singleDate2.getFullYear();

            query1 = field[0].value + " >" + " '" + year1+"-"+month1+"-"+day1 + "' and " + field[0].value + " < '" + year2+"-"+month2+"-"+day2 + "'";
          }
        }
      }
    }

    setQuery(query1);

  }, [field, operation, option, input1, input2, singleDate1, singleDate2]);

  // useEffect(() => {
  //   console.log(singleDate1, singleDate2);
  // }, [singleDate1, singleDate2]);

  return (
    <QueryLine bgColor={bgColor} position={position} bottom={bottom}>
      <LeftQuery>

        <SelectField>
          <Select
            size={SIZE.compact}
            // options={fieldCheck === true ? fields : fields.filter(ad => 
            //   usedFields.every(fd => fd !== ad.value))}
            options={fieldCheck === true ? fields1 : fields}
              labelKey="id"
            valueKey="value"
            onChange={({ value }) => handleField(value)}
            value={field}
            placeholder={"Select Field"}
          />

        </SelectField>

        {field.length > 0 && (
          <SelectOperation>
            <Select
              size={SIZE.compact}
              options={operations.filter(
                (operation) => operation.type === field[0].type
              )}
              labelKey="id"
              valueKey="value"
              onChange={({ value }) => handleOperation(value)}
              value={operation}
            />
          </SelectOperation>
        )}

        <SelectOption>

          {operation.length > 0 && operation[0].value === "In" && (
            <>
              <Select
                size={SIZE.compact}
                options={options.filter(
                  (option) => option.type === field[0].value
                )}
                multi
                labelKey="id"
                valueKey="value"
                onChange={({ value }) => setOption(value)}
                value={option}
              />
            </>
          )}

          {operation.length > 0 && operation[0].value !== "In" && field.length > 0 && field[0].setting === "Dropdown" && (
              <>
                <Select
                  size={SIZE.compact}
                  options={options.filter(
                    (option) => option.type === field[0].value
                  )}
                  labelKey="id"
                  valueKey="value"
                  onChange={({ value }) => setOption(value)}
                  value={option}
                />
              </>
            )}

          {operation.length > 0 && operation[0].value !== "In" && field.length > 0 && field[0].setting === "Calender" && (
              <>
                <DatePicker
                  size={SIZE.compact}
                  value={singleDate1}
                  onChange={({ date }) => setSingleDate1(date)}
                />
                {operation[0].value === "Between" && (
                  <>
                    <Span> to </Span>
                    <DatePicker
                      size={SIZE.compact}
                      value={singleDate2}
                      onChange={({ date }) => setSingleDate2(date)}
                    />
                  </>
                )}
              </>
            )}

          {operation.length > 0 && operation[0].value !== "In" && field.length > 0 && field[0].setting === "Input" && (
              <>
                <Input
                  size={SIZE.compact}
                  value={input1}
                  onChange={(event) => setInput1(event.currentTarget.value)}
                  placeholder="Enter Value"
                />

                {operation[0].value === "Between" && (
                  <>
                    <Span> to </Span>
                    <Input
                      size={SIZE.compact}
                      value={input2}
                      onChange={(event) => setInput2(event.currentTarget.value)}
                      placeholder="Enter Value"
                    />
                  </>
                )}
              </>
            )}
        </SelectOption>
      </LeftQuery>

      <AddNewContiditon>
        {/* {console.log(option.length, singleDate1, singleDate2, input1, input2)} */}

        {(option.length > 0 || singleDate1 !== null || singleDate2 !== null || input1 !== undefined || input2 !== undefined) && (

          <BsBookmarkPlusFill
            size={24}
            style={{ cursor: "pointer" }}
            onClick={() => handleConstraints()}
          />
        )}

      </AddNewContiditon>
    </QueryLine>
  );
};

export default Query;
