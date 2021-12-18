import { Wrapper, StyledHeader, TitleWrapper, PageTitle, CamerPicture } from "./styled";
import video from "../../assets/video.svg";
import { Search } from "./Search";
import { Navigation } from "./Navigation";

export const Header = () => {
    return (
        <Wrapper>
            <StyledHeader>
                <TitleWrapper>
                    <CamerPicture src={video} alt="camera" />
                    <PageTitle>movies browser</PageTitle>
                    <Navigation />
                </TitleWrapper>
                <Search />
            </StyledHeader>
        </Wrapper>
    );
};