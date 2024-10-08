import { AppBar, Toolbar, styled } from "@mui/material"

const Container = styled(AppBar)`
    background: #060606;
    position: static;
    border-bottom: 1px solid #2f2f2f;
    height: 9vh;
`;

const Header = () => {
    const logo = 'https://tse3.mm.bing.net/th?id=OIP.YOn5jYPTAEp92O3e0MpO-AHaHa&pid=Api&P=0';
    return (
        <Container>
            <Toolbar>
            <img src={logo} alt="logo" style={{ width: '40px', marginTop: '-11px' }} />
            <h1 style={{ fontSize: '1.5em', margin: '0 0 10px 12px' }}>Code Editor</h1>
            </Toolbar>
        </Container>
    )
}
export default Header;