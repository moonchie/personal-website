import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Container from "../components/container";
import userStyles from "../styles/about-css-modules.module.css";

const User = props => (
    <div className={userStyles.user}>
        <img src={props.avatar} className={userStyles.avatar} alt="" />
        <div className={userStyles.description}>
            <h2 className={userStyles.username}>{props.username}</h2>
            <p className={userStyles.excerpt}>{props.excerpt}</p>
        </div>
    </div>
)

const IndexPage = () => <Layout>
    <SEO title="Home"/>
    <div style={{ margin: `3rem auto`, maxWidth: 600 }}>
        <h1>Hi! I'm building a fake Gatsby site as part of a tutorial!</h1>
        <p>
            What do I like to do? Lots of course but definitely enjoy building
            websites.
        </p>
    </div>
    <div style={{maxWidth: `300px`, marginBottom: `1.45rem`}}>
        <Image/>
    </div>
    <div>
        <Link to="/page-2/">Go to page 2</Link>
        <Link to="/contact/">Contact me</Link>
        <Link to="/about/">About me</Link>
    </div>

    {/*Component-scoped CSS*/}
    <Container>
        <h1>About CSS Modules</h1>
        <p>CSS Modules are cool</p>
        <User>
            <User
                username="Jane Doe"
                avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
                excerpt="I'm Jane Doe. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
            />
        </User>
        <User>
            <User
                username="Bob Smith"
                avatar="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
                excerpt="I'm Bob Smith, a vertically aligned type of guy. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
            />
        </User>
    </Container>

</Layout>



export default IndexPage
