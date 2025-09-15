"use client";
import { createPostApi } from "@/api/posts/post.services.api";
import { ButtonKit } from "@/components/kit/button";
import { InputKit } from "@/components/kit/input";
import { CreatePostReq } from "@/types";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreatePostPage() {
  const [values, setValues] = useState<CreatePostReq>({
    title: "",
    body: "",
    userId: 1,
    tags: [],
    reactions: {
      likes: 0,
      dislikes: 0,
    },
    views: 0,
  });

  const router = useRouter();

  const inputOnChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const textareaOnChangeHandler = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const tagsOnChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedTags = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setValues({ ...values, tags: selectedTags });
  };

  //   const submitHandler = async(e) => {
  //     e.preventDefault();
  //     console.log("data is: ", values);
  //     await createPostApi(values) ;
  //     router.push('/posts')

  //   };

  const mutation = useMutation({
    mutationFn: createPostApi,
    onSuccess: () => {
      router.push("/posts");
    },
    onError: (error) => {
      console.error("error is:", error);
    },
  });

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // try {
    //   await createPostApi(values);
    //   router.push("/posts");
    // } catch (error) {
    //   console.error("Error creating post:", error);
    // }

    e.preventDefault();
    mutation.mutate(values);
  };

  return (
    <div className=" flex justify-center items-center">
      <form onSubmit={submitHandler}>
        <InputKit
          name="title"
          value={values.title}
          label="Title"
          onChange={inputOnChangeHandler}
        />
        <textarea
          className="border"
          name="body"
          cols={30}
          rows={5}
          value={values.body}
          onChange={textareaOnChangeHandler}
        />
        <div>
          <label>
            Pick some fruits:
            <select
              name="tags"
              value={values.tags}
              onChange={tagsOnChangeHandler}
            >
              <option value="apple">Apple</option>
              <option value="banana">Banana</option>
              <option value="orange">Orange</option>
            </select>
          </label>
        </div>

        <ButtonKit content="SUBMIT" type="submit" />
      </form>
    </div>
  );
}
