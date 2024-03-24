import { selectCurrentUser } from "@/redux/features/auth/authSlice";
import { useGetSingleDonorQuery } from "@/redux/features/donor/donorApi";
import { useAppSelector } from "@/redux/hooks";
import { FieldValues, useForm } from "react-hook-form";
// import { toast } from "sonner";
import { useEffect, useState } from "react";
import CommentCard from "./CommentCard";
import { Ban, Send } from "lucide-react";
import {
  useGetCommentQuery,
  usePostCommentMutation,
} from "@/redux/features/comment/commentApi";
import { toast } from "sonner";
import { TCommentCard } from "@/types";
import Spninner from "../ui/Spninner";

const Comments = () => {
  const [image, setImage] = useState("");
  const user = useAppSelector(selectCurrentUser);

  const { data: donorData, isFetching: donnorFetching } =
    useGetSingleDonorQuery(user?.email);
  const { data: CommentData, isFetching } = useGetCommentQuery(undefined, {
    skip: donnorFetching,
  });
  const [postComment] = usePostCommentMutation();

  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    if (donorData) {
      setImage(
        donorData?.data?.image ||
          "https://i.ibb.co/NL7144F/blank-profile-picture-973460-1280.png"
      );
    }
  }, [donorData]);

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Posting....");
    const commentData = {
      image: image,
      name: user?.name.toLowerCase(),
      email: user?.email,
      comment: data.comment,
    };
    try {
      await postComment(commentData).unwrap();

      toast.success("Comment Successfully", {
        id: toastId,
        duration: 1000,
      });

      reset();
    } catch (err) {
      toast.error("Comment Unsuccessfully", {
        id: toastId,
        duration: 1000,
      });
    }
  };
  if (isFetching || donnorFetching) {
    return (
      <div className="h-fit">
        <Spninner />
      </div>
    );
  }
  return (
    <div>
      <h1 className="text-xl md:text-2xl text-primary dark:text-white font-bold">
        Comments :
      </h1>
      <p className="w-28 h-1 rounded-xl bg-secondary mb-4"></p>
      <div className=" bg-slate-200 dark:bg-zinc-800 p-4 my-10">
        {CommentData?.data?.map((comment: TCommentCard) => (
          <CommentCard key={comment._id} comment={comment} />
        ))}
      </div>
      <div>
        {user ? (
          ""
        ) : (
          <div className="text-secondary font-bold my-5">
            For leave a comment, you must login first
          </div>
        )}
        <form
          className="flex items-center w-full"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="">
            <label className="flex items-center text-primary dark:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-captions text-secondary"
              >
                <rect width="18" height="14" x="3" y="5" rx="2" ry="2" />
                <path d="M7 15h4M15 15h2M7 11h2M13 11h4" />
              </svg>
              <span> Your Comment : </span>
            </label>
            <input
              type="text"
              {...register("comment")}
              name="comment"
              placeholder="Enter Your Comment"
              required
              className="text-black border focus:border-secondary focus:ring-secondary p-2 outline-none w-[260px] sm:w-[500px] md:w-[700px] rounded pe-16"
            />
          </div>

          <div className="mt-6 ml-[-50px]">
            {user ? (
              <button className="w-full border border-primary bg-primary text-white font-bold px-4 py-2 rounded-r dark:bg-secondary dark:border-secondary duration-500 transition-all  flex justify-center items-center gap-1">
                <Send className="text-secondary dark:text-primary" />
              </button>
            ) : (
              <button
                disabled
                className="w-full border border-primary bg-primary cursor-not-allowed text-white font-bold  px-4 py-2 rounded-r dark:bg-secondary dark:border-secondary duration-500 transition-all  flex justify-center items-center gap-1"
              >
                <Ban className="text-secondary dark:text-primary" />
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Comments;
