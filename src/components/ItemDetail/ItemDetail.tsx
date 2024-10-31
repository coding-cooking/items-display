import styled from "styled-components";
import { PropertyContent } from "../PropertyContent/PropertyContent";
import { useState } from "react";
import { ImageContent } from "../ImageContent/ImageContent";

const Container = styled.div`
    overflow: hidden;
    border: 1px solid rgba(0,0,0,1);
    border-radius: 6px;
    width: 100%;
    height: 235px;
   

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
    background-color: ${props => props.isactive ? 'rgba(50, 168, 133, .5)' : 'transparent'};
    cursor: pointer;
`;

type TabProps = {
    isactive: boolean;
}

export const ItemDetail = () => {
    const [activeTab, setActiveTab] = useState<'Properties' | 'Image'>('Properties');

    return (
        <Container>
            <DetailHead>
                <Tab data-testid="data-properties" isactive={activeTab === 'Properties'} onClick={() => setActiveTab('Properties')}>Properties</Tab>
                <Tab data-testid="data-image" isactive={activeTab === 'Image'} onClick={() => setActiveTab('Image')}>Image</Tab>
            </DetailHead>
            <div>
                {
                    activeTab === "Properties" ? <PropertyContent /> : <ImageContent />
                }
            </div>
        </Container>
    )
}