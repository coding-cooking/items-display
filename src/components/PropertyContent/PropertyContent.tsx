import styled from "styled-components"
import { useSelector } from "react-redux"
import { RootState } from "../../store/store"

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
    const { selectedItem } = useSelector((state: RootState) => state.items);

    return (
        <Container test-id="data-properties">
            {selectedItem && (Object.entries(selectedItem.properties).map(([key, value]) => (
                <RowContainer key={`${key}-${value}`}>
                    <span>{key}</span>
                    <span>{value}</span>
                </RowContainer>
            )))
            }
        </Container>
    )
}