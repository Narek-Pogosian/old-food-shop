type Props = {
  progress: number; // 0-100%
};

const ProgressBar = ({ progress }: Props) => {
  return (
    <div className="w-full h-2 rounded-full bg-accent">
      <div
        className="h-2 rounded-full bg-amber-500"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
