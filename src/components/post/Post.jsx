import "./post.css";

function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.pexels.com/photos/9770723/pexels-photo-9770723.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      />

      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Product</span>
          <span className="postCat">Music</span>
        </div>
        <span className="postTitle">Lorem Ibusum</span>
        <hr />

        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
        officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
        fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
        atque, exercitationem quibusdam, reiciendis odio laboriosam?
      </p>
    </div>
  );
}

export default Post;
