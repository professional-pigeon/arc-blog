'use client';
import React, { useEffect, useState } from 'react';
import PageHero from "@/components/PageHero";
import { blogPosts } from '@/constants/dummyData';

export default function ReviewPage({ params }) {
  const post = blogPosts.find((obj) => obj.id == params.id)

  return (
    <div>
      <PageHero />
      <div className='page'>
        <a href='/blog'>&#8592; Back to All Posts</a>
        <h1>{post.title}</h1>
        <p>{post.review}</p>
      </div>
    </div>
  );
}
