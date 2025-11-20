/// <reference types="vite-plugin-svgr/client" />
import LogoKAI from "../assets/logo-KAI.svg?react";
import IconTrain from "../assets/icon-train.svg?react";
import styled from "styled-components";
import { STYLE } from "../../constant";
import CodeStamp from "../shared/CodeStamp";

interface HeaderPanelProps {
  routeCode: string;
  routeName: string;
  routeColor: string;
}

export default function HeaderPanel({
  routeCode,
  routeName,
  routeColor,
}: HeaderPanelProps) {
  return (
    <MainHeader className="font-book" $borderColor={routeColor}>
      <Brand />
      <IconTrain width={20.83} height={29.16} />
      <Content>
        <CodeStamp size="small" color={routeColor}>
          <span>{routeCode}</span>
        </CodeStamp>
        <Title>LRT {routeName} Line</Title>
      </Content>
    </MainHeader>
  );
}

const MainHeader = styled.header<{
  $borderColor: string;
}>`
  display: flex;
  align-items: center;
  column-gap: 14px;
  padding: 14px;

  border-bottom: 6px solid ${(p) => p.$borderColor || STYLE.color.darkblue};

  * {
    flex-shrink: 0;
  }
`;

const Brand = styled(LogoKAI)`
  width: 48px;
  height: 20px;
`;

const Content = styled.article`
  display: flex;
  align-items: center;
  column-gap: 10px;
`;

const Title = styled.h1`
  font-size: ${STYLE.fontSize.sm};
  font-weight: 600;
  line-height: 28px;

  color: ${STYLE.color.darkblue};
`;
