import styled from 'styled-components';

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Button = styled.a`
  a {
    text-decoration: none;
    text-align: center;
    padding: 10px;
    margin-right: 100px;
    margin-bottom: 50px;
  }
  a.animated-button.thar-two {
	color: #000;
	cursor: pointer;
	display: block;
	position: relative;
	border: 2px solid #F7CA18;
	transition: all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
}
a.animated-button.thar-two:hover {
	color: #000 !important;
	background-color: transparent;
	text-shadow: ntwo;
}
a.animated-button.thar-two:hover:before {
	top: 0%;
	bottom: auto;
	height: 100%;
}
a.animated-button.thar-two:before {
	display: block;
	position: absolute;
	left: 0px;
	bottom: 0px;
	height: 0px;
	width: 100%;
	z-index: -1;
	content: '';
	color: #000 !important;
	background: #F7CA18;
	transition: all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
}
`;