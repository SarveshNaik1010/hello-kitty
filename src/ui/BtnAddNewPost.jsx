import Button from "./Button";

function BtnAddNewPost({ onClick }) {
  return (
    <Button
      type="primary"
      extraStyles="fixed bottom-[12px] right-[12px] w-fit rounded-full"
      onClick={onClick}
    >
      +
    </Button>
  );
}

export default BtnAddNewPost;
