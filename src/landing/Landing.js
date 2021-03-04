import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';
import post1 from './blog-post.1.md';
import post2 from './blog-post.2.md';
import post3 from './blog-post.3.md';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const sections = [
  { title: "Software Development", url: "/category/software-dev" },
  { title: "Customer Service", url: "/category/customer-support" },
  { title: "Design", url: "/category/design"},
  { title: "Marketing", url: "/category/marketing" },
  { title: "Sales", url: "/category/sales" },
  { title: "Product", url: "/category/product" },
  { title: "Business", url: "/category/business" },
  { title: "Data", url: "/category/data" },
  { title: "DevOps", url: "/category/devops" },
  { title: "Finance", url: "/category/finance-legal" },
];

const mainFeaturedPost = {
  title: "Want to find your dream job?",
  description: " 1,611  jobs from 996 companies..",
  imageText: 'main image description',
  linkText: 'Continue reading…',
};

const featuredPosts = [
  {
    title: "Career Transition: 5 Important Resume Tips",
    date: "Nov 12",
    description:
      "To best sell yourself to any employer, a strong, relevant resume is key. Luckily, you have a few different options. ",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8cmVzdW1lfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    imageText: "Image Text",
  },
  {
    title: "Interviewing Authentically",
    date: "Nov 11",
    description:
      "The goal of the interview is to showcase your accomplishments while developing a relationship with the hiring manager.",
    image:
      "https://images.unsplash.com/photo-1459499362902-55a20553e082?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8am9iJTIwaW50ZXJ2aWV3fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    imageText: "Image Text",
  },
];


const posts = [post1, post2, post3];

const sidebar = {
  title: 'About',
  description:
    'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
  archives: [
    { title: 'March 2020', url: '#' },
    { title: 'February 2020', url: '#' },
    { title: 'January 2020', url: '#' },
    { title: 'November 1999', url: '#' },
    { title: 'October 1999', url: '#' },
    { title: 'September 1999', url: '#' },
    { title: 'August 1999', url: '#' },
    { title: 'July 1999', url: '#' },
    { title: 'June 1999', url: '#' },
    { title: 'May 1999', url: '#' },
    { title: 'April 1999', url: '#' },
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};

export default function Landing() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Blog" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} className={classes.mainGrid}>
            <Main title="From the firehose" posts={posts} />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
    </React.Fragment>
  );
}
