import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getPost } from "../redux/modules/postSlice";

const Main = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  console.log("posts ---> ", posts);

  useEffect(() => {
    dispatch(__getPost());
  }, [dispatch]);

  return <div>메인 페이지</div>;
};

export default Main;
