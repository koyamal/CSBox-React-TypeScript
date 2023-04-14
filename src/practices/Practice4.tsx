export const Practice4 = () => {
  const calTotalFee = (num: number) => {
    const total = num * 1.1;
    console.log(total);
  };
  const onClickPractice = () => calTotalFee(1000);
  return (
    <div>
      <p>Practice4: Edit tsconfig</p>
      <button onClick={onClickPractice}>Practice4</button>
    </div>
  );
};
