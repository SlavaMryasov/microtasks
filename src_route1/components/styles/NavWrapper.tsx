import styled from "styled-components"

export const NavWrapper = styled.div`
&> a {
    text-decoration: none;
    color: red
}

&> a.active {
    color: #7fb8f1;
}

&> a:hover {
    color: blue
}
`
