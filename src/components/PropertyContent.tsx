import styled from "styled-components"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    height: auto;
    font-size: 16px;
`

const RowContainer = styled.div`
    display: flex;
    justify-content: space-around;
    span {
        width: 50%;
        padding: 10px;;
    }
`

export const PropertyContent = () => {
    return (
        <Container>
            <RowContainer>
                <span>test 1</span>
                <span>test 2</span>
            </RowContainer>
        </Container>
    )
}