import CategoryCards from "./CategoryCards";
export default function SpendCategory() {
  const categories = [
    {
      label: "娱乐",
      amount: 55,
    },
    {
      label: "日用品",
      amount: 5555,
    },
    {
      label: "预算",
      amount: 600000,
    },
  ];
  return <CategoryCards categories={categories} />;
}
