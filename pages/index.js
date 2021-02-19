import React from 'react';
import AppLayout from './../src/AppLayout';
import Post from './../src/Post';
import Grid from '@material-ui/core/Grid';
import Link from 'next/link'

export default function Index({ posts }) {
  return (
    <AppLayout>
    <Grid container spacing={2}>
      {
        posts && posts.length ?
        posts.map((p) => {
          return (
            <Link href={`/post/${p.id}`} key={p.id}>
              <Grid item xs={3} style={{cursor: 'pointer'}}>
                  <Post 
                    title={p.title}
                    description={p.description}
                  />
              </Grid>
            </Link>
          )
        }) : ''
      }
      </Grid>
    </AppLayout>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch(`https://nextjs-sample-qzi9ph0p3.vercel.app/api/post`)
  const posts = await res.json()
  return {
    props: {
      posts,
    },
  }
}

