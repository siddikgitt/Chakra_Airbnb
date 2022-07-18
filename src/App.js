import { Container } from "@chakra-ui/react";
import AirbnbCard from "./Components/AirbndCard";
import ButtonExample from "./Components/Button";
import Form from "./Components/Form";
import Layout from "./Components/Layout";
import BasicUsage from "./Components/Modal";
import StackExample from "./Components/Stacks";
import "./styles.css";

export default function App() {
  return (
    <div>
      <AirbnbCard />
      <br />
      <br />
      <br />
      <ButtonExample />
      {/* <Container maxW="xl"> */}
      {/* <Form />
        <Layout /> */}
      {/* <StackExample /> */}
      {/* </Container> */}
      {/* <BasicUsage /> */}
    </div>
  );
}
