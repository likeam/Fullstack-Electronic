interface ItemProps {
  amount?: number;
}

const FormattedPrice = ({ amount }: ItemProps) => {
  const formattedAmount = new Number(amount).toLocaleString("en-US", {
    style: "currency",
    currency: "PKR",
    minimumFractionDigits: 2,
  });

  return <span>{formattedAmount}</span>;
};

export default FormattedPrice;
