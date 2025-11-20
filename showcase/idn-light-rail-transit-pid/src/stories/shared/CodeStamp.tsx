import type { ReactNode } from "react";
import styled from "styled-components";
import { STYLE } from "../../constant";

interface CodeStampProps {
  size: "small" | "large" | "larger";
  color?: string;
  children: ReactNode;
}

const sizes = {
  small: {
    "--width": `${STYLE.stampSize.small.width}px`,
    "--height": `${STYLE.stampSize.small.height}px`,
    "--font-size": STYLE.fontSize.xs,
    "--font-weight": 600,
    "--line-height": "20px",
    "--border-width": `${STYLE.stampSize.small.border}px`,
  },
  large: {
    "--width": `${STYLE.stampSize.large.width}px`,
    "--height": `${STYLE.stampSize.large.height}px`,
    "--font-size": STYLE.fontSize.lg,
    "--font-weight": 600,
    "--line-height": `${
      STYLE.stampSize.large.height - STYLE.stampSize.large.border * 2
    }px`,
    "--border-width": `${STYLE.stampSize.large.border}px`,
  },
  larger: {
    "--width": `${STYLE.stampSize.larger.width}px`,
    "--height": `${STYLE.stampSize.larger.height}px`,
    "--font-size": STYLE.fontSize.base,
    "--font-weight": 600,
    "--line-height": 1.1,
    "--border-width": `${STYLE.stampSize.larger.border}px`,
  },
};

export default function CodeStamp({
  size,
  color = STYLE.color.primary,
  children,
}: CodeStampProps) {
  return (
    <Wrapper style={sizes[size] as React.CSSProperties} $color={color}>
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.div<{
  $color: string;
}>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: var(--width);
  height: var(--height);

  font-size: var(--font-size);
  font-weight: var(--font-weight);
  text-align: center;
  line-height: var(--line-height);

  border-radius: 50%;
  border: var(--border-width) solid ${(p) => p.$color || STYLE.color.blue};
`;
