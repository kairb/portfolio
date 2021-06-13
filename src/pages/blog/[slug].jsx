import { useRouter } from 'next/router';

const BlogPost = () => {
  const router = useRouter();
  const { slug } = router.query;
  return <div>blog post {slug}</div>;
};
