import React from "react";
import DashboardHeading from "../modules/dashboard/DashboardHeading";
import { useForm } from "react-hook-form";
import { Radio } from "../components/checkbox";
import { Dropdown } from "../components/dropdown";
const AddNewPost = () => {
  const { control, watch, setValue } = useForm({
    mode: "onChange",
    defaultValues: {
      status: "",
      category: "",
    },
  });
  const watchStatus = watch("status");
  const watchCategory = watch("category");
  return (
    <div>
      <DashboardHeading>Add Post</DashboardHeading>
      <form className="my-5">
        <div className="flex justify-between">
          <div className="w-4/5">
            <label htmlFor="post-title" className="block text-lg font-semibold">
              Title
            </label>
            <input
              type="text"
              id="post-title"
              placeholder="Enter post title"
              className="Auth-input w-11/12"
              control={control}
            />
          </div>
          <div className="w-4/5">
            <label htmlFor="post-slug" className="block text-lg font-semibold">
              Slug
            </label>
            <input
              type="text"
              id="post-slug"
              placeholder="Enter post slug"
              className="Auth-input w-11/12"
              control={control}
            />
          </div>
        </div>

        <div className="mt-5 flex justify-between">
          <div className="w-4/5">
            <label
              htmlFor="post-status"
              className="block text-lg font-semibold mb-5"
            >
              Status
            </label>
            <div className="flex gap-x-5">
              <Radio
                name="status"
                control={control}
                value="approved"
                checked={watchStatus === "approved"}
                onClick={() => setValue("status", "approved")}
              >
                Approved
              </Radio>
              <Radio
                name="status"
                control={control}
                checked={watchStatus === "pending"}
                onClick={() => setValue("status", "pending")}
                value="pending"
              >
                Pending
              </Radio>
              <Radio
                name="status"
                control={control}
                checked={watchStatus === "reject"}
                onClick={() => setValue("status", "reject")}
                value="reject"
              >
                Rejected
              </Radio>
            </div>
          </div>
          <div className="w-4/5">
            <label htmlFor="post-title" className="block text-lg font-semibold">
              Author
            </label>
            <input
              type="text"
              id="post-author"
              placeholder="Find the author"
              className="Auth-input w-11/12"
            />
          </div>
        </div>

        <div className="w-[46%] my-5">
          <label htmlFor="post-title" className="block text-lg font-semibold">
            Category
          </label>
          <Dropdown>
            <Dropdown.Option>Knowledge</Dropdown.Option>
            <Dropdown.Option>Blockchain</Dropdown.Option>
            <Dropdown.Option>Setup</Dropdown.Option>
            <Dropdown.Option>Nature</Dropdown.Option>
            <Dropdown.Option>Developer</Dropdown.Option>
          </Dropdown>
        </div>
        <button
          type="submit"
          className="px-5 py-4 bg-primary rounded-lg text-white hover:opacity-50"
        >
          Add Post
        </button>
      </form>
    </div>
  );
};
export default AddNewPost;
