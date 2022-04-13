import '../styles/globals.css'
import getClasses from './api/getClasses';

const app = ({ Component, pageProps, classes }) => {
  return <Component {...pageProps} classes={classes} />
}

app.getInitialProps = async () => {
  const classes = await getClasses();
  return { classes };
};

export default app
