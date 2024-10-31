import styled from "styled-components";
import { ItemDetail } from "./ItemDetail";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    @media screen and (min-width: 768px) {
        flex-direction: row;
    }
`;

const TableWrapper = styled.div`
    border: 1px solid #000;
    border-radius: 6px;
    table {
        width: 100%;
        border-collapse: collapse;
        border-spacing: 0;
    }

    tr th {
        border-bottom: 1px solid #000;
    }

    tr td {
         border: none;
    }
`;

const ItemContainer = styled.tr<{ selected: boolean }>`
    background-color: ${props => props.selected ? 'rgba(50, 168, 133, .5)' : 'transparent'};
    padding: 10px;
    cursor: pointer;
    &:hover{
            background-color: rgba(50, 168, 133, .5)
        }
`;

const StyledTh = styled.th`
    text-align: left;
    padding: 10px;
`;

const StyledTd = styled.td`
    padding: 10px;
`;

export type Item = {
    guid: string;
    name: string;
    path: string[];
    properties: {
        [key: string]: any;
    },
    imageId: string;
}

export const ItemList = () => {
    return (
        <Container>
            <TableWrapper>
                <table>
                    <tr>
                        <StyledTh>GUID</StyledTh>
                        <StyledTh>Name</StyledTh>
                        <StyledTh>Path</StyledTh>
                    </tr>
                    <ItemContainer
                        selected={true}
                    >
                        <StyledTd>1</StyledTd>
                        <StyledTd>2</StyledTd>
                        <StyledTd>3</StyledTd>
                    </ItemContainer>

                </table>
            </TableWrapper>
            <ItemDetail />
        </Container>
    )

}