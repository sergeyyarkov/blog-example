import Head from 'next/head'
import Nav from './Nav'

const Layout = props => {
    return(
        <>
        <Head>
            <title>{props.titlePage}</title>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Staatliches" />
            <link rel="stylesheet" href="/static/css/uikit.min.css" />
            <script src="/static/js/uikit.min.js" />
        </Head>
        <Nav />
        {props.children}
        </>
    )
}

export default Layout