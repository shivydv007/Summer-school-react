import React from "react";
import styled, { createGlobalStyle } from "styled-components";

// Import fonts (adjust URLs as needed)
const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'League Gothic';
    src: url('/fonts/LeagueGothic-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Sansation';
    src: url('/fonts/Sansation-Light.ttf') format('truetype');
    font-weight: 300;
    font-style: normal;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: 'Sansation', Arial, sans-serif;
  }
`;

const WorkshopContainer = styled.div`
  min-height: 100vh;
  padding: 0;
  background: linear-gradient(135deg, #16161D 0%, #636383 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Heading = styled.h1`
  font-family: 'League Gothic', Impact, sans-serif;
  font-size: 56px;
  letter-spacing: 2px;
  background: linear-gradient(90deg, #FFFFFF 0%, #999999 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-top: 36px;
  margin-bottom: 14px;
`;

const LeadText = styled.div`
  font-family: 'Sansation', Arial, sans-serif;
  font-size: 18px;
  color: #fff;
  margin-bottom: 24px;
  text-align: center;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 32px 0;
  width: 90%;
  max-width: 440px;
`;

const Feature = styled.li`
  background: #000;
  border-radius: 12px;
  margin-bottom: 18px;
  padding: 18px 20px;
  font-family: 'Sansation', Arial, sans-serif;
  font-size: 15px;
  color: #fff;
  box-shadow: 0 2px 8px #0006;
`;

const FeatureLabel = styled.span`
  color: #809CB8;
  font-weight: bold;
`;

const NoEventCard = styled.div`
  background: #000;
  border-radius: 10px;
  padding: 20px 30px;
  width: 90%;
  max-width: 420px;
  margin: 16px 0;
  color: #908888;
  font-family: 'Sansation', Arial, sans-serif;
  font-size: 15px;
  text-align: center;
`;

const RegisterBox = styled.div`
  margin: 28px 0 20px 0;
`;

const RegisterHeading = styled.div`
  font-family: 'League Gothic', Impact, sans-serif;
  font-size: 24px;
  background: linear-gradient(90deg, #809CB8 0%, #D2D6E6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: 1px;
  margin-bottom: 6px;
`;

const RegisterSubText = styled.div`
  font-family: 'Sansation', Arial, sans-serif;
  font-size: 14px;
  color: #fff;
`;

const LoginBox = styled.div`
  width: 320px;
  height: 80px;
  margin: 30px 0;
  border-radius: 15px;
  background: 
    linear-gradient(120deg, #0099FF 0%, #22FF66 100%),
    linear-gradient(240deg, #FF3333 0%, #FFFF66 100%);
  background-blend-mode: multiply;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-family: 'Sansation', Arial, sans-serif;
  font-size: 18px;
  font-weight: 300;
`;

const DashboardSection = styled.div`
  width: 100%;
  max-width: 440px;
  margin: 34px 0 20px 0;
  background: linear-gradient(90deg, #809CB8 0%, #D2D6E6 100%);
  border-radius: 16px;
  padding: 24px 0 30px 0;
  box-sizing: border-box;
`;

const DashboardTitle = styled.div`
  font-family: 'League Gothic', Impact, sans-serif;
  font-size: 24px;
  color: #333;
  text-align: center;
  margin-bottom: 12px;
  letter-spacing: 1px;
`;

const ProgressBox = styled.div`
  width: 312px;
  height: 129px;
  background: #fff;
  border-radius: 16px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ProgressHeading = styled.div`
  font-family: 'Sansation', Arial, sans-serif;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 6px;
  color: #16161D;
`;

const ProgressText = styled.div`
  font-family: 'Sansation', Arial, sans-serif;
  font-size: 15px;
  color: #636383;
`;

export default function WorkshopScreen() {
  return (
    <>
      <GlobalStyle />
      <WorkshopContainer>
        <Heading>WORKSHOP</Heading>
        <LeadText>
          Join our lead speakers and learn, grow your skill!
        </LeadText>
        <FeatureList>
          <Feature>
            <FeatureLabel>Speaker:</FeatureLabel> Dr. John Doe
          </Feature>
          <Feature>
            <FeatureLabel>Features:</FeatureLabel> Live Q&amp;A, Project Demos, Certificate
          </Feature>
          <Feature>
            <FeatureLabel>Access Link:</FeatureLabel> <span style={{color: "#809CB8"}}>Will be sent at your email</span>
          </Feature>
        </FeatureList>
        <NoEventCard>
          Check back soon .... !!
        </NoEventCard>
        <RegisterBox>
          <RegisterHeading>Register for upcoming ...</RegisterHeading>
          <RegisterSubText>
            Learn, grow your skill!
          </RegisterSubText>
        </RegisterBox>
        <LoginBox>
          <span>Login &nbsp;|&nbsp; Student Access</span>
        </LoginBox>
        <DashboardSection>
          <DashboardTitle>Student Dashboard</DashboardTitle>
          <ProgressBox>
            <ProgressHeading>Your Progress</ProgressHeading>
            <ProgressText>
              3/10 Workshops Attended
            </ProgressText>
          </ProgressBox>
        </DashboardSection>
      </WorkshopContainer>
    </>
  );
}
