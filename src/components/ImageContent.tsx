import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 235px;
    font-size: 16px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`

export const ImageContent = () => {
    return (
        <Container>
            <Image
                src={``}
            />
        </Container>
    )
}