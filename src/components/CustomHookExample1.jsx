import useFetch from "../hooks/useFetch";

const CustomHookExample1 = () => {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts",
    {}
  );

  if (loading) {
    return <h3>Loading...</h3>;
  }

  return (
    <div>
      {data.map((post) => (
        <div key={post.id}>
        <h4>{post.title}</h4>
        <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default CustomHookExample1;
