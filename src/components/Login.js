import styled from 'styled-components'

const Login = (props) => {
    return(
        <Container>
            <Content>
                <CTA>
                    <CTALogoOne src="/images/Disney+BrandLogo.svg" alt="Disney Logo" />
                    <Title>Tout ce que vous imaginez et encore +</Title>
                    <Subscription>
                        <SubscriptionMonth>
                            <h2 className="priceTitle">8,99 € <Span>par mois</Span></h2>
                            <p className="gray">Sans engagement*. Voir conditions d'abonnement.</p>
                            <RegisterBtn>s'inscrire</RegisterBtn>
                        </SubscriptionMonth>
                        <SeparatingBorder/>
                        <SubscriptionYear>
                            <h2 className="priceTitle">89,90 € <Span>pour un an</Span></h2>
                            <p className="gray">Économisez plus de 15%**. Voir conditions d’abonnement.</p>
                            <RegisterBtn>économiser sur 12 mois</RegisterBtn>
                        </SubscriptionYear>
                    </Subscription>
                    <SmallText>* Résiliation effective à la fin de la période de facturation en cours. ** Comparatif entre 12 mois d'abonnement mensuel et l'abonnement annuel.</SmallText>
                </CTA>
                <BgImage />
            </Content>
            <SecondContent>
                <OfferContainer>
                    <Title>Regardez où et quand vous le voulez</Title>
                    <Ul>
                        <Li>Organisez des soirées virtuelles entre amis avec GroupWatch. Interrompez la vidéo, revenez sur vos scènes préférées et réagissez avec six amis maximum. Pour envoyer et recevoir des invitations GroupWatch, un abonnement est requis</Li>
                        <Li>Téléchargez des films et des séries et regardez-les hors ligne</Li>
                        <Li>Sécurisez l'accès aux contenus avec le contrôle parental</Li>
                        <Li>Profitez de films et séries en 4K et son Dolby Atmos sur les appareils compatibles</Li>
                        <Li>Regardez en streaming sur quatre appareils en simultané</Li>
                    </Ul>
                </OfferContainer>
                <ImgContainer>
                    <picture>
                        <source media="(max-width: 768px)" srcSet="/images/scrubs_712x582.png" alt="image of scrubs"/>
                        <source media="(min-width: 769px)" srcSet="/images/scrubs_1200x960.png" alt="image of scrubs"/>
                        <img src="/images/scrubs_1200x960.png" alt="Scrubs"/>
                    </picture>
                </ImgContainer>
            </SecondContent>
            <ThirdContent>
                <TitleTwo>De nouveaux Disney+ Originals exclusifs tous les mois</TitleTwo>
                <SubHeading>Regardez des films, des séries et des documentaires créés par les artistes des studios de chaque univers,sans oublier les Disney+ Originals, disponibles en exclusivité sur le service</SubHeading>
                <VignetteContainer>
                    <VignetteArticle>
                        <ImageArticle src="/images/Mandalorian_S2.png" alt="Star Wars Mandalorian"/>
                    </VignetteArticle>
                    <VignetteArticle>
                        <ImageArticle src="/images/Loki-1.png" alt="Loki"/>
                    </VignetteArticle>
                    <VignetteArticle>
                        <ImageArticle src="/images/FAWS@1x.png" alt="Falcon et le soldat de l'hiver"/>
                    </VignetteArticle>
                    <VignetteArticle>
                        <ImageArticle src="/images/BlackPanther@1x.png" alt="Black Panther"/>
                    </VignetteArticle>
                    <VignetteArticle>
                        <ImageArticle src="/images/HSMTMTS-S2_630x378@1,5x.png" alt="High School Musical"/>
                    </VignetteArticle>
                    <VignetteArticle>
                        <ImageArticle src="/images/Luca_630x378@1,5x-2.png" alt="Luca"/>
                    </VignetteArticle>
                    <VignetteArticle>
                        <ImageArticle src="/images/Mulan@1x.png" alt="Mulan"/>
                    </VignetteArticle>
                    <VignetteArticle>
                        <ImageArticle src="/images/EtoffedesHeros@1x.png" alt="L'étoffe des heros"/>
                    </VignetteArticle>
                    <VignetteArticle>
                        <ImageArticle src="/images/The-Batch-Batch_630x378@1x.png" alt="Bad Batch"/>
                    </VignetteArticle>
                </VignetteContainer>
                <ButtonContainer>
                    <RegisterBtn>inscrivez-vous</RegisterBtn>
                </ButtonContainer>
            </ThirdContent>
            <FourthContent>
                <TitleTwo>Plus de rires, de drames et d'Originals sur Star</TitleTwo>
                <SubHeading>Découvrez un nouvel univers de divertissement avec Star sur Disney+</SubHeading>
                <VignetteContainer>
                    <VignetteArticle>
                        <ImageArticle src="/images/Solar_Opposites-1.png" alt="Solar Opposites"/>
                    </VignetteArticle>
                    <VignetteArticle>
                        <ImageArticle src="/images/Futurama-1.png" alt="Futurama"/>
                    </VignetteArticle>
                    <VignetteArticle>
                        <ImageArticle src="/images/GA@1,5x.png" alt="Grey's anatomy"/>
                    </VignetteArticle>
                    <VignetteArticle>
                        <ImageArticle src="/images/BigSky@1,5x.png" alt="Big Sky"/>
                    </VignetteArticle>
                    <VignetteArticle>
                        <ImageArticle src="/images/American-Dad_630x378@1x.png" alt="American Dad"/>
                    </VignetteArticle>
                    <VignetteArticle>
                        <ImageArticle src="/images/DesperateHou@1,5x.png" alt="Desperate Housewives"/>
                    </VignetteArticle>
                    <VignetteArticle>
                        <ImageArticle src="/images/Scrubs@1,5x.png" alt="Scrubs"/>
                    </VignetteArticle>
                    <VignetteArticle>
                        <ImageArticle src="/images/LoveVictor@1,5x.png" alt="Love Victor"/>
                    </VignetteArticle>
                    <VignetteArticle>
                        <ImageArticle src="/images/MFDA_630x378@1x.png" alt="Ma famille d'abord"/>
                    </VignetteArticle>
                </VignetteContainer>
            </FourthContent>
            <Accessibility>
                <TitleTwo>Accessible sur vos appareils préférés</TitleTwo>
                <DeviceContainer>
                    <Device>
                        <ImgDevice src="/images/device-group-tv.png" alt="Télévisions" />
                        <TitleThree>Télévisions</TitleThree>
                        <SecondUl>
                            <Li>Amazon Fire TV</Li>
                            <Li>Appareils Android TV</Li>
                            <Li>AppleTV</Li>
                            <Li>Chromecast</Li>
                            <Li>TV LG</Li>
                            <Li>Roku</Li>
                            <Li>Samsung</Li>
                        </SecondUl>
                    </Device>
                    <Device>
                        <ImgDevice src="/images/device-group-computer.png" alt="Ordinateurs" />
                        <TitleThree>Ordinateurs</TitleThree>
                        <SecondUl>
                            <Li>Chrome OS</Li>
                            <Li>MacOS</Li>
                            <Li>PC Windows</Li>
                        </SecondUl>
                    </Device>
                    <Device>
                        <ImgDevice src="/images/device-group-mobile-tablet.png" alt="Mobiles & tablettes" />
                        <TitleThree>Mobiles et tablettes</TitleThree>
                        <SecondUl>
                            <Li>Tablettes Amazon Fire</Li>
                            <Li>Mobiles et tablettes Android</Li>
                            <Li>iPhone & iPad</Li>
                        </SecondUl>
                    </Device>
                    <Device>
                        <ImgDevice src="/images/device-group-game-consoles.png" alt="Consoles de jeux" />
                        <TitleThree>Consoles de jeux</TitleThree>
                        <SecondUl>
                            <Li>PS4</Li>
                            <Li>PS5</Li>
                            <Li>Xbox One</Li>
                            <Li>Xbox Series X</Li>
                            <Li>Xbox Series S</Li>
                        </SecondUl>
                    </Device>
                </DeviceContainer>
            </Accessibility>
            <Footer>
                <FooterLogoContainer>
                    <FooterLogo src="/images/Disney+BrandLogo.svg" alt="Disney Logo"/>
                </FooterLogoContainer>
                <FooterSocial>
                <i className="fas fa-globe"></i>
                <Select>
                        <option>Français</option>
                        <option>English</option>
                    </Select>
                    <Link href="#">Conditions générales d'abonnement</Link>
                    <Link href="#">Règles de Respect de la Vie Privée</Link>
                    <Link href="#">Droits Données dans l'UE et au R-U</Link>
                    <Link href="#">Modalités relatives aux cookies</Link>
                    <Link href="#">Publicités ciblées par centres d'intérêt</Link>
                    <Link href="#">Appareils compatibles</Link>
                    <Link href="#">Aide</Link>
                    <Link href="#"> Offrez Disney+</Link>
                    <Link href="#">Gérer vos préférences</Link>
                    <Link href="#">À propos de Disney+</Link>     
                </FooterSocial>
                <FooterCopyright>
                    <SmallText>© 2021 Ce site est un clone de Disney+</SmallText>
                </FooterCopyright>
            </Footer>
        </Container>  
    )
}

const Container = styled.section`
    overflow: hidden;
    display:flex;
    flex-direction: column;
    text-align: center;
`
const Content = styled.div`
    margin-bottom: 15vw;
    width: 100%;
    min-height: 100vh;
    position: relative;
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    padding: 80px 40px;
    height: 100%;
`
const BgImage = styled.div`
    height: 100%;
    background-image: url("/images/login-background.jpg");
    background-size:cover;
    background-repeat: no-repeat;
    background-position: top;
    position: absolute;
    top:0;
    right: 0;
    left:0;
    z-index:-1; 
`
const CTA = styled.div`
    max-width: 680px;
    margin-bottom: 2vw;
    display:flex;
    flex-direction: column;
    flex-wrap:wrap;
    justify-content:center;
    margin-top: 0;
    text-align: left;
    margin-right: auto;
    margin-left: 0;
    transition-timing-function: ease-out;
    transition: opacity .2s;
    @media screen and (max-width:768px){
        text-align:center;
        margin-top: 10vh;
    }
`
const CTALogoOne = styled.img`
    margin-bottom: 12px;
    max-width: 600px;
    min-height: 1px;
    display:block;
    width:50%;
    @media screen and (max-width:768px){
        margin: 0 auto;
    }
`
const Title = styled.h1`
    font-size: 44px;
    text-align:left;
    @media screen and (max-width:768px){
        text-align:center;
        font-size: 20px;
    }
`
const Span = styled.span`
    color: #999;
    font-size: 15px;
`
const Subscription = styled.div`
    display:flex;
    @media screen and (max-width:768px){
        flex-direction: column;
    }
`
const SubscriptionMonth = styled.div`
    display:flex;
    flex-direction: column;
    margin-right: 5%;
`
const SubscriptionYear = styled.div`
    display:flex;
    flex-direction: column;
`
const SmallText = styled.p`
    color: #999;
    font-size: 10px;
`
const RegisterBtn = styled.button`
    width: 100%;
    height: 60px;
    font-size: 18px;
    font-weight: 400;
    color: #f9f9f9;
    background-color: #0063e5;
    border: 1px solid transparent;
    text-transform: uppercase;
    cursor: pointer;
    border-radius: 4px;    
    text-align: center;
    letter-spacing: 1px;
    transition: all .2s ease 0s;
    :hover { 
        background-color: #3282EA;
    }
    @media screen and (max-width:768px){
        font-size: 15px;
    }
`
const SeparatingBorder = styled.hr`
    width: 100%;
    margin-top: 3vh;
    margin-bottom: 3vh;
    height: 2px solid gray;
    display:none;
    @media screen and (max-width:768px){
        display:block;
    }
   
`
const SecondContent = styled.div`
    width: 90%;
    min-height: 60vh;
    display:flex;
    justify-content:center;
    align-items: flex-start;
    margin: 0 auto;
    padding-bottom: 10vh;
    @media screen and (max-width:768px){
        flex-direction:column
    }
`
const OfferContainer = styled.div`
    display:flex;
    flex-direction: column;
    width: 50%;
    padding: 0 4% 0 0;
    @media screen and (max-width:768px){
        width: 100%;
    }
`
const ImgContainer = styled.div`
    display:flex;
    width: 50%;
    min-height: 80vh;
    align-items: center;
    transition: ease-in-out .5s;  
    &:hover{
        opacity:0.5;
    }
    @media screen and (max-width:768px){
        width: 100%;
        min-height:0;
    }
`
const Ul = styled.ul`
    text-align:left;
`
const Li = styled.li`
    font-size: 20px;
    color: hsla(0,0%,75.3%,.8);
    margin: 0 0 15px;
    @media screen and (max-width:768px){
        font-size: 16px;
    }
`
const ThirdContent = styled.div`
    width: 90%;
    min-height: 100vh;
    display:flex;
    flex-direction: column;
    justify-content:center;
    margin: 0 auto;
`
const TitleTwo = styled.h2`
    font-size: 44px;
    text-align:center;
    @media screen and (max-width:768px){
        font-size: 26px;
    }
`
const SubHeading = styled.p`
    font-size: 20px;
    color: hsla(0,0%,75.3%,.8);
`
const VignetteContainer = styled.section`
    display:flex;
    flex-wrap: wrap
`
const VignetteArticle = styled.article`
    width: 33%;
    padding: 1% 1%;
    @media screen and (max-width:768px){
        width: 50%;
        margin: 0 auto;
        padding: 2% 2%;
    }
`
const ImageArticle = styled.img`
    border-radius: 5px;
    transition: ease 0.5s;
    max-width: 100%;
    height: auto;
    &:hover{
        transform: translateY(-10px);
    }
`
const ButtonContainer = styled.div`
    width: 30%;
    padding-top: 10vh;
    padding-bottom: 10vh;
    margin: 0 auto;
    @media screen and (max-width:768px){
        width: 70%;
    }
`
const FourthContent = styled.div`
    width: 90%;
    display:flex;
    flex-direction: column;
    justify-content:center;
    margin: 0 auto;
`
const Accessibility = styled.div`
    width: 90%;
    display:flex;
    flex-direction: column;
    justify-content:center;
    margin: 0 auto;
    padding-bottom: 5vh;
    @media screen and (max-width:768px){
        margin-top: 4vh;
    }
`
const DeviceContainer = styled.section`
    display:flex;
    @media screen and (max-width:768px){
        flex-wrap: wrap;
        margin-top: 4vh;
    }
`
const Device = styled.article`
    display:flex;
    flex-direction:column;
    width: 25%;
    position: relative;
    @media screen and (max-width:768px){
        width: 50%;
        margin: 0 auto;
    }
`
const ImgDevice = styled.img`
    max-width: 100%;
    height: auto;
    -webkit-animation:spin 8s linear infinite;
    -moz-animation:spin 8s linear infinite;
    animation:spin 8s linear infinite;
    &:hover{
        animation: none;
    }
`
const TitleThree = styled.h1`
    font-size: 22px;
    text-align:center;
`
const SecondUl = styled.ul`
    text-align:center;
    list-style: none;
    padding: 0;
`
const Footer = styled.footer`
    width: 95%;
    margin: 0 auto;
    display:flex;
    flex-direction: column;
`
const FooterLogoContainer = styled.div`
    text-align:center;
    display:block;
`
const FooterLogo = styled.img`
    width: 5%;
    padding-bottom: 2vh;
    @media screen and (max-width:768px){
        width: 30%;
    }
`
const FooterSocial = styled.div`
    line-height: 2;
`
const Select = styled.select`
    border:none;
    background-color: transparent;
    color: #999;
    &:hover{
        color: #fff;
        text-decoration: underline;
        cursor:pointer;
    }
`
const Link = styled.a`
    font-size: 12px;
    cursor: pointer;
    padding: 8px 12px;
    text-decoration: none;
    color: hsla(0,0%,75.3%,.8);
    &:hover{
        color:#fff;
    }
`
const FooterCopyright = styled.div`
    padding-top: 2vh;
    padding-bottom: 5vh;
`

export default Login;