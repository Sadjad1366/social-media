import { useMutation } from "@tanstack/react-query";
import { createPost } from "../../api/posts/post-api";
import type { CreatePostReq } from "../../api/posts/type";
import { useState, type FormEvent } from "react";
import Select from "react-select";

type TagOption = { value: string; label: string };

const TAG_OPTIONS: TagOption[] = [
  { value: "history", label: "history" },
  { value: "romantic", label: "romantic" },
  { value: "war", label: "war" },
];

const CreatePostPage = () => {
  const [values, setValues] = useState<CreatePostReq>({
    title: "",
    body: "",
    tags: [],
    userId: 5,
  });

  const mutation = useMutation({
    mutationFn: (payload: CreatePostReq) => createPost(payload),
    onSuccess: (data) => {
      setValues({ title: "", body: "", tags: [], userId: 5 });
      console.log('data is:', data);
      
    },
  });

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const textAreaHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const tagsChangeHandler = (opts: readonly TagOption[] | null) => {
    const tags = (opts ?? []).map((o) => o.value);
    setValues((prev) => ({ ...prev, tags }));
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    mutation.mutate(values);
  };

  const selectValue: TagOption[] = TAG_OPTIONS.filter((o) =>
    values.tags.includes(o.value)
  );

  const isDisabled =
    mutation.isPending || !values.title.trim() || !values.body.trim();

  return (
    <div className="min-h-screen flex justify-center items-center p-4">
      <form
        onSubmit={onSubmit}
        className="w-full max-w-[500px] flex flex-col gap-3"
      >
        <h1 className="text-2xl font-bold">Create Post</h1>

        <label htmlFor="title">title:</label>
        <input
          id="title"
          name="title"
          value={values.title}
          onChange={inputHandler}
          className="bg-slate-200 p-2 rounded"
          placeholder="Post title"
        />

        <label htmlFor="body">body:</label>
        <textarea
          id="body"
          name="body"
          cols={5}
          rows={10}
          value={values.body}
          onChange={textAreaHandler}
          className="bg-slate-200 p-2 rounded"
          placeholder="Write your post..."
        />

        <label htmlFor="tags">tags:</label>
        <Select
          inputId="tags"
          name="tags"
          isMulti
          options={TAG_OPTIONS}
          value={selectValue}
          onChange={tagsChangeHandler}
          className="basic-multi-select"
          classNamePrefix="select"
        />

        {mutation.isError && (
          <p className="text-red-600 text-sm">
            {(mutation.error as Error)?.message || "Submit failed"}
          </p>
        )}

        <button
          className="bg-blue-500 hover:bg-blue-600 disabled:bg-blue-300 text-white rounded-2xl p-2"
          type="submit"
          disabled={isDisabled}
        >
          {mutation.isPending ? "Submitting..." : "CREATE"}
        </button>
      </form>
    </div>
  );
};
export default CreatePostPage;
