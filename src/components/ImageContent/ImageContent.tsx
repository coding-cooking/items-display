import styled from "styled-components";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";

const Image = styled.img`
    width: 100%;
    object-fit: contain;
`

export const ImageContent = () => {
    const { selectedItem } = useSelector((state: RootState) => state.items);
    return (
        <>
            {selectedItem &&
                <Image
                    role="img"
                    src={`http://localhost:8080/image/${selectedItem.guid}`}
                />
            }
        </>
    )
}