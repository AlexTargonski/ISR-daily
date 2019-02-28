import Head from "next/head";

export default ({ post }) => (
  <>
    <div className="wrapper">
      <img src={post.photo} alt={post.title} />
      <div>
        <h1>{post.title}</h1>
        <p>{post.date}</p>
        <p>{post.desc}</p>
      </div>
      <style jsx>{`
        img {
          width : 100%;
        }

        .wrapper {
          width          : 100%;
          display        : flex;
          flex-direction : column;
          margin-top     : 12px;
          height         : 100%;
        }
      `}
    </style>
    </div>
  </>
)
