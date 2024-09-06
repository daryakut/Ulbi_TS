import React, { FC, useState } from "react";

// interface Props {
//   width: string;
//   height: string;
//   children: React.ReactNode;
// }

// const Card = ({ height, width, children }: Props) => {
//   return (
//     <div style={{ width, height, border: "1px solid gray" }}>
//       Card component
//       {children}
//     </div>
//   );
// };

export enum CardVariant {
  outlined = "outlined",
  primary = "primary",
}

interface Props {
  width?: string;
  height?: string;
  variant: CardVariant;
  children?: React.ReactNode;
  onClick: (num: number) => void;
}

const Card: FC<Props> = ({ height, width, variant, onClick, children }) => {
  const [state, setState] = useState(0);
  return (
    <div
      style={{
        width,
        height,
        border: variant === CardVariant.outlined ? "1px solid gray" : "none",
        background: variant === CardVariant.primary ? "lightgray" : "",
      }}
      onClick={()=>onClick(state)}
    >
      {children}
    </div>
  );
};

export default Card;
