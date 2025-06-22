import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";
import { FiEdit3, FiTrash2 } from "react-icons/fi";
import notify from "../utils/alert";

export default function Post() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();
  const userData = useSelector((state) => state.userData);

  const isAuthor = post && userData ? post.userId === userData.$id : false;

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        if (post) setPost(post);
        else navigate("/");
      });
    } else navigate("/");
  }, [slug, navigate]);

  const deletePost = async () => {
    const status = await appwriteService.deletePost(post.$id);
    if (status) {
      appwriteService.deleteFile(post.featuredImage);
      notify.success('Post Deleted Successfully')
      navigate("/");
    }
  };

  return post ? (
    <section className="py-10">
      <Container>
        <div className="w-full bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200">

          {/* Post Image */}
          <div className="relative aspect-video md:aspect-[3/1.5] w-full overflow-hidden rounded-xl bg-fuchsia-950/10">
            <img
                src={appwriteService.getFileDownload(post.featuredImage)}
                alt={post.title}
                className="w-full h-full object-cover object-top transition-opacity duration-300"
                onError={(e) => {
                e.target.style.display = "none";
                }}
            />

            {/* Edit & Delete buttons */}
            {isAuthor && (
                <div className="absolute top-4 right-4 flex gap-3 z-10 bg-white/80 backdrop-blur-sm rounded-full px-3 py-1 shadow-md">
                    <Link to={`/edit-post/${post.$id}`}>
                    <button className="text-green-600 hover:text-green-700 text-2xl p-1.5 transition">
                        <FiEdit3 />
                    </button>
                    </Link>
                    <button
                    onClick={deletePost}
                    className="text-red-600 hover:text-red-700 text-2xl p-1.5 transition"
                    >
                    <FiTrash2 />
                    </button>
                </div>
                )}
          </div>

          {/* Post Title */}
          <div className="p-6">
            <h1 className="text-3xl font-bold text-fuchsia-950 mb-4">{post.title}</h1>

            {/* Post Content */}
            <div className="prose prose-p:leading-relaxed prose-h2:text-fuchsia-800 max-w-none text-black prose-img:rounded-md">
              {parse(post.content)}
            </div>
          </div>
        </div>
      </Container>
    </section>
  ) : null;
}
