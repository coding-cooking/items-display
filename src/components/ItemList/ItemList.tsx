import { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems, selectItem } from "../../store/itemSlice";
import { AppDispatch, RootState } from "../../store/store";
import { ItemDetail } from "../ItemDetail/ItemDetail";

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
    const dispatch = useDispatch<AppDispatch>();
    const {
        items,
        selectedItem,
        status,
        error
    } = useSelector((state: RootState) => state.items);

    useEffect(() => {
        dispatch(fetchItems());
    }, [dispatch]);

    const handleItemClick = (item: Item) => {
        dispatch(selectItem(item));
    };

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'failed') {
        return <div>Error: {error}</div>;
    }

    return (
        <Container>
            <TableWrapper>
                <table>
                    <tr>
                        <StyledTh>GUID</StyledTh>
                        <StyledTh>Name</StyledTh>
                        <StyledTh>Path</StyledTh>
                    </tr>
                    {items?.map(item => (
                        <ItemContainer
                            key={item.guid}
                            onClick={() => handleItemClick(item)}
                            selected={selectedItem?.guid === item.guid}
                        >
                            <StyledTd>{item.guid}</StyledTd>
                            <StyledTd>{item.name}</StyledTd>
                            <StyledTd>{item.path.join('/')}</StyledTd>
                        </ItemContainer>
                    ))}

                </table>
            </TableWrapper>
            <ItemDetail />
        </Container>
    )
}