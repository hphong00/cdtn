import { Badge, Button } from "@material-ui/core";
import {
  Search,
  ShoppingCartOutlined,
  NotificationsNoneTwoTone,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../redux/apiCalls";

const Container = styled.div`
  height: 50px;
  background-color: #fbfbfd;
  color: black;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 0px 100px;
  display: flex;
  align-items: center;
  color: black;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 15px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 0px;
  font-size: 12px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.div`
  font-size: 35px;
  cursor: pointer;
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 13px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;
const Item = styled.div`
  font-size: 15px;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;
const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  console.log(quantity);
  //const {logoutUser} = useContext(AuthContext)

  const logout = () => logoutUser()
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>VN</Language>
          <SearchContainer>
            <Input style={{ fontSize: 18 }} placeholder="Tìm kiếm" />
            <Search style={{ color: "black", fontSize: 20 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>
            <Link to="/" style={{ color: "black", textDecoration: "auto" }}>
              SmartP.com
            </Link>
          </Logo>
        </Center>
        <Right>
          <MenuItem>
            <NotificationsNoneTwoTone
              fontSize="small"
              style={{ marginRight: "0px" }}
            />
          </MenuItem>
          <Item>|</Item>
          <MenuItem>
            <Link
              to="/register"
              style={{ color: "black", textDecoration: "auto" }}
            >
              ĐĂNG KÝ
            </Link>
          </MenuItem>
          <Item>|</Item>
          <MenuItem>
            <Link
              to="/login"
              style={{ color: "black", textDecoration: "auto" }}
            >
              ĐĂNG NHẬP
            </Link>
          </MenuItem>
          <Link to="/cart" style={{ color: "black" }}>
          
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
          <Button onClick={logout} >
              <Link to="/login" style={{ color: "black" }}>OUT</Link>
          </Button>
        </Right>
      </Wrapper>
    </Container>
  );
};
export default Navbar;