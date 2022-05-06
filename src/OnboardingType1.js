import React from "react";
import styled from "styled-components";
export const OnboardingType1 = ({}) => {
  const Radiobuttonlight1Function = (e, name) => {
    alert(`${name} was clicked`);
  };
  return (
    <OnboardingTypeRoot>
      <FlexColumn>
        <Text1>Coins for College</Text1>
        <Image1 src={"https://file.rendit.io/n/IQxF5Y2kwH5ZSqXHuMnZ.svg"} />
      </FlexColumn>
      <FlexColumn1>
        <Text2>Create Teacher Profile</Text2>
        <Text3>
          Setup{" "}
          <Paragraph>
            your teacher profile now & get access to create and learn
          </Paragraph>
        </Text3>
        <Element1>
          <CadetBlueFlexColumn>
            <FlexRow>
              <Text4>Online Educator</Text4>
              <Radiobuttonlight1
                onClick={(e) =>
                  Radiobuttonlight1Function(e, "Radiobuttonlight1")
                }
              />
            </FlexRow>
            <FlexRow>
              <Text5>School Educator</Text5>
              <Radiobuttonlight1
                onClick={(e) =>
                  Radiobuttonlight1Function(e, "Radiobuttonlight")
                }
              />
            </FlexRow>
          </CadetBlueFlexColumn>
          <Text6>Are you-</Text6>
        </Element1>
        <FlexRow2 gap={"236px"}>
          <Text7 width={"110px"}>First Name</Text7>
          <Text7 width={"109px"}>Last Name</Text7>
        </FlexRow2>
        <FlexRow3 margin={"0px 0px 47px 0px"}>
          <CadetBlueFlexRow>
            <Text9 width={"171px"}>Type your First Name</Text9>
          </CadetBlueFlexRow>
          <CadetBlueFlexRow>
            <Text9 width={"170px"}>Type your Last Name</Text9>
          </CadetBlueFlexRow>
        </FlexRow3>
        <FlexRow2 gap={"291px"}>
          <Text7 width={"55px"}>Email</Text7>
          <Text7 width={"97px"}>Password</Text7>
        </FlexRow2>
        <FlexRow3 margin={"0px 0px 51px 0px"}>
          <CadetBlueFlexRow>
            <Text9 width={"196px"}>Type your Email Address</Text9>
          </CadetBlueFlexRow>
          <CadetBlueFlexRow>
            <Text9 width={"196px"}>Type your Password</Text9>
          </CadetBlueFlexRow>
        </FlexRow3>
        <NavyBlueFlexColumn>
          <Text15>Next</Text15>
        </NavyBlueFlexColumn>
      </FlexColumn1>
    </OnboardingTypeRoot>
  );
};
const OnboardingTypeRoot = styled.div`
  background-color: #ffffff;
  display: flex;
  overflow: hidden;
  flex-direction: row;
  justify-content: flex-start;
  gap: 43px;
  margin: auto;
  min-width: 1440px;
  padding: 60px 0px 54.27px 0px;
`;
const FlexColumn = styled.div`
  width: 616px;
  display: flex;
  flex-direction: column;
  gap: 12.73px;
  justify-content: center;
  flex-grow: 1;
  align-items: center;
`;
const Text1 = styled.div`
  font-size: 28px;
  font-family: Product Sans;
  font-weight: 400;
  text-transform: capitalize;
  color: #15424e;
  align-self: flex-start;
  margin: 0px 0px 0px 64px;
`;
const Image1 = styled.img`
  width: 616px;
  height: 863px;
`;
const FlexColumn1 = styled.div`
  width: 674px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 127px 0px 114.73px 0px;
`;
const Text2 = styled.div`
  font-size: 36px;
  font-family: Product Sans Medium;
  font-weight: 400;
  text-transform: capitalize;
  color: #15424e;
  align-self: flex-start;
  margin: 0px 0px 8px 1px;
`;
const Text3 = styled.div`
  font-size: 18px;
  font-family: Product Sans;
  font-weight: 400;
  text-transform: capitalize;
  color: #aaaaaa;
  align-self: flex-start;
  margin: 0px 0px 64px 1px;
  white-space: pre-wrap;
`;
const Paragraph = styled.div`
  font-size: 18px;
  font-family: Product Sans;
  font-weight: 400;
  text-transform: lowercase;
  color: #aaaaaa;
  display: contents;
`;
const Element1 = styled.div`
  width: 672px;
  height: 158px;
  align-self: center;
  position: relative;
  margin: 0px 0px 48px 0px;
`;
const CadetBlueFlexColumn = styled.div`
  border-width: 1px;
  border-color: rgba(22, 22, 22, 0.1);
  border-style: solid;
  height: 126px;
  background-color: rgba(170, 170, 170, 0.1);
  display: flex;
  position: absolute;
  top: 29px;
  left: -1px;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  padding: 0px 35px 0px 27px;
`;
const Text4 = styled.div`
  text-align: center;
  font-size: 18px;
  font-family: Product Sans Medium;
  font-weight: 400;
  text-transform: capitalize;
  color: #aaaaaa;
`;
const Text5 = styled.div`
  font-size: 18px;
  font-family: Product Sans Medium;
  font-weight: 400;
  text-transform: capitalize;
  color: #aaaaaa;
  align-self: flex-start;
`;
const Text6 = styled.div`
  font-size: 18px;
  font-family: Product Sans;
  font-weight: 400;
  text-transform: capitalize;
  color: #212121;
  position: absolute;
`;
const NavyBlueFlexColumn = styled.div`
  background-color: #14a9ff;
  display: flex;
  align-self: flex-end;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  margin: 0px 1px 0px 0px;
`;
const Text15 = styled.div`
  text-align: center;
  width: 150px;
  height: 54px;
  display: flex;
  font-size: 20px;
  font-family: Product Sans;
  font-weight: 700;
  text-transform: capitalize;
  color: #ffffff;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const FlexRow = styled.div`
  width: 608px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const Radiobuttonlight1 = styled.button`
  width: 24px;
  height: 24px;
  padding: 0px;
  border-width: 0px;
  background: none;
  box-sizing: content-box;
  cursor: pointer;
  background-image: url("https://file.rendit.io/n/RMmDUhF27jUvL45eURP8.svg");
  background-size: cover;
  &: hover {
    opacity: 70%;
  }
`;
const FlexRow2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0px 1px;
  margin: 0px 0px 6px 0px;
  gap: ${(props) => props.gap};
`;
const Text7 = styled.div`
  height: 30px;
  display: flex;
  font-size: 18px;
  font-family: Product Sans;
  font-weight: 400;
  text-transform: capitalize;
  color: rgba(22, 22, 22, 0.8);
  flex-direction: column;
  align-items: start;
  justify-content: center;
  width: ${(props) => props.width};
`;
const FlexRow3 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 18px;
  justify-content: center;
  align-items: center;
  margin: ${(props) => props.margin};
`;
const CadetBlueFlexRow = styled.div`
  border-width: 1px;
  border-color: rgba(22, 22, 22, 0.1);
  border-style: solid;
  width: 294px;
  background-color: rgba(170, 170, 170, 0.1);
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-radius: 8px;
  padding: 12px 15px 10px 15px;
`;
const Text9 = styled.div`
  height: 24px;
  display: flex;
  font-size: 18px;
  font-family: Product Sans;
  font-weight: 400;
  text-transform: capitalize;
  color: #aaaaaa;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  width: ${(props) => props.width};
`;
