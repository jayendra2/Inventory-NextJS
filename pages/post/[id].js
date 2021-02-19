import React from 'react';
import AppLayout from './../../src/AppLayout';
import Post from './../../src/Post';
import Grid from '@material-ui/core/Grid';

export default function PostDetails({ post }) {
  return (
    <AppLayout>
    <Grid container spacing={2}>
        <Grid item xs={12}>
            <Post 
                title={post?.title || ""}
                description={post?.description || ""}
            />
        </Grid>
      </Grid>
    </AppLayout>
  );
}

export async function getServerSideProps(context) {
    const res = await fetch(`https://nextjs-sample-qzi9ph0p3.vercel.app/api/post/${context.query.id}`)
    const post = await res.json()
  
    return {
      props: {
        post: post,
      },
    }
  }
