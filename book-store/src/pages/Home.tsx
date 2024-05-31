import styled from "styled-components";
import Header from "../components/common/Header";
import { formatNumber } from "../utils/format";

function Home() {
  const COUNT = 10000;
  return (
    <div>
      <Header />
      <div>Book Store!!</div>
      <div>count : {formatNumber(COUNT)}</div>
    </div>
  );
}

const HeaderStyle = styled.header`
  background-color: #333;
  h1 {
    color: white;
  }
`;

export default Home;
