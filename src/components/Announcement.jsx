import styled from "styled-components"

const Container = styled.div`
    height: 30px;
    background-color: white;
    color: black;
    display:flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    font-weight:500;
`;

const Announcement = () => {
  return (
    <Container>
        SHOPPING
    </Container>
  )
}

export default Announcement