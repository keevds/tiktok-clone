import { Container, Content, LogoContainer, LogoIcon, Logo, Icon, Avatar, OptionsContainer } from './styles';

function Header() {
	return (
		<Container>
			<Content>
				<LogoContainer>
					<LogoIcon src="/images/logoIcon.svg"></LogoIcon>
					<Logo src="/images/logo.svg"></Logo>
				</LogoContainer>
				<OptionsContainer>
					<Icon src="/images/uploadIcon.svg"></Icon>
					<Avatar>
						<img src="https://p77-sign-va.tiktokcdn.com/musically-maliva-obj/6957728449461288965~c5_720x720.jpeg?x-expires=1621299600&x-signature=In4d41ElR%2BtGkPQgXiGiQWdSqio%3D" />
					</Avatar>
				</OptionsContainer>
			</Content>
		</Container>
	);
}

export default Header;
