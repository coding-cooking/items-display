import styled from "styled-components"
import { PropertyContent } from "./PropertyContent"
import { useState } from "react"
import { ImageContent } from "./ImageContent"

const Container = styled.div`
    border: 1px solid rgba(0,0,0,1);
    border-radius: 6px;
    width: 100%;

    @media screen and (min-width: 768px) {
        flex-direction: row;
        max-width: 300px;
    }
`

const DetailHead = styled.div`
    display: flex;
    :hover {
        background-color: rgba(50, 168, 133, .5);
    }
    :nth-of-type(1) {
        border-right: 1px solid rgba(0,0,0,1);
    }
`

const Tab = styled.div<TabProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 39.5px;
    font-size: 16px;
    font-weight: 700;
    border-bottom: 1px solid rgba(0,0,0,1);
    background-color: ${props => props.isActive ? 'rgba(50, 168, 133, .5)' : 'transparent'};
    cursor: pointer;
`;

type TabProps = {
    isActive: boolean;
}

export const ItemDetail = () => {
    const [activeTab, setActiveTab] = useState<'Properties' | 'Image'>('Properties');

    return (
        <Container>
            <DetailHead>
                <Tab isActive={activeTab === 'Properties'} onClick={() => setActiveTab('Properties')}>Properties</Tab>
                <Tab isActive={activeTab === 'Image'} onClick={() => setActiveTab('Image')}>Image</Tab>
            </DetailHead>
            <div>
                {
                    activeTab === "Properties" ? <PropertyContent /> : <ImageContent />
                }
            </div>
        </Container>
    )

}