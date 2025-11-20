/// <reference types="vite-plugin-svgr/client" />
import type { CSSProperties } from "react";
import styled, { css } from "styled-components";
import CodeStamp from "./shared/CodeStamp";
import HeaderPanel from "./shared/HeaderPanel";
import IconTrain from "./assets/icon-train.svg?react";
import { OBJECT_SIZE, STYLE, TRANSLATION } from "../constant";
import type { Locale } from "../types/global-types";
import type { WelcomeScene } from "../types/scene-types";
import { useInterval } from "../hooks/useInterval";
import { useRef } from "react";

interface WelcomeScreenProps {
  transitionDelayInSeconds?: number;
  scene: WelcomeScene;
  language: Locale;
  routeCode: string;
  routeName: string;
  routeColor: string;
  destinationCode: string;
  destinationName: string;
  onToggle?: (stateNames: string[]) => void;
}

export default function WelcomeScreen({
  transitionDelayInSeconds = 5,
  scene,
  language,
  routeCode,
  routeName,
  routeColor,
  destinationCode,
  destinationName,
  onToggle,
}: WelcomeScreenProps) {
  const hasChangedLanguageRef = useRef<boolean>(false);
  useInterval(() => {
    if (hasChangedLanguageRef.current) {
      hasChangedLanguageRef.current = false;
      if (onToggle) onToggle(["scene", "language"]);
      return;
    }
    hasChangedLanguageRef.current = true;
    if (onToggle) onToggle(["language"]);
  }, transitionDelayInSeconds * 1_000);

  return (
    <>
      <HeaderPanel
        routeCode={routeCode}
        routeName={routeName}
        routeColor={routeColor}
      />
      <MainWrapper>
        <ContentBox $visible={scene === "start"}>
          <StackedTexts $alignment="end">
            <ConstrainedFadingText
              $shown={language === "ID"}
              $maxWidth={"222px"}
              aria-hidden={language !== "ID"}
            >
              {TRANSLATION.ID.welcome}
            </ConstrainedFadingText>
            <ConstrainedFadingText
              $emphasized
              $shown={language === "EN"}
              $maxWidth={"184px"}
              aria-hidden={language !== "EN"}
            >
              {TRANSLATION.EN.welcome}
            </ConstrainedFadingText>
          </StackedTexts>
          <ObjectWrapper>
            <IconTrain
              width={
                (OBJECT_SIZE.iconTrain[0] / OBJECT_SIZE.iconTrain[1]) *
                STYLE.stampSize.large.height
              }
              height={STYLE.stampSize.large.height}
            />
            <CodeStamp size="large" color={routeColor}>
              <Number>{routeCode}</Number>
            </CodeStamp>
          </ObjectWrapper>
          <Title>{routeName} Line</Title>
        </ContentBox>
        <ContentBox $secondary $visible={scene === "destination"}>
          <StackedTexts $alignment="end">
            <ConstrainedFadingText
              $shown={language === "ID"}
              $maxWidth={"128px"}
              aria-hidden={language !== "ID"}
            >
              {TRANSLATION.ID.bound_for}
            </ConstrainedFadingText>
            <ConstrainedFadingText
              $emphasized
              $shown={language === "EN"}
              $maxWidth={"138px"}
              aria-hidden={language !== "EN"}
            >
              {TRANSLATION.EN.bound_for}
            </ConstrainedFadingText>
          </StackedTexts>
          <ObjectWrapper>
            <CodeStamp size="larger" color={routeColor}>
              <NumberSmaller>{routeCode}</NumberSmaller>
              <Number>{destinationCode}</Number>
            </CodeStamp>
          </ObjectWrapper>
          <TitleBigger>{destinationName}</TitleBigger>
        </ContentBox>
      </MainWrapper>
    </>
  );
}

const MainWrapper = styled.main`
  position: relative;

  padding-block: 46px;
`;

const ConstrainedFadingText = styled.span<{
  $shown: boolean;
  $emphasized?: boolean;
  $maxWidth?: string;
}>`
  max-width: ${(p) => p.$maxWidth || "fit-content"};

  ${(p) =>
    p.$emphasized &&
    css`
      font-weight: 300;
      font-style: italic;
      line-height: 1.25;
    `}

  ${(p) =>
    p.$shown
      ? css`
          opacity: 1;
          visibility: visible;
        `
      : css`
          opacity: 0;
          visibility: hidden;
        `}
  transition: opacity 1000ms ease-out, visibility 1000ms ease-out;
`;

const StackedTexts = styled.p<{
  $alignment?: CSSProperties["textAlign"];
}>`
  position: relative;

  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 100%;

  font-size: ${STYLE.fontSize.md};
  line-height: 0.96;
  text-align: ${(p) => p.$alignment || "start"};

  * {
    position: absolute;
    top: 50%;

    width: 100%;

    transform: translate3d(0, -50%, 0);
  }

  *:first-child {
    position: static;

    transform: none;
  }
`;

const ObjectWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 20px;
`;

const Number = styled.strong`
  font-size: ${STYLE.fontSize.md};
`;

const NumberSmaller = styled(Number)`
  font-size: ${STYLE.fontSize.base};
`;

const Title = styled.h2`
  font-size: ${STYLE.fontSize.xxl};
  line-height: 1;
`;

const TitleBigger = styled(Title)`
  font-size: ${STYLE.fontSize["3xl"]};
`;

const ContentBox = styled.article<{
  $visible?: boolean;
  $secondary?: boolean;
}>`
  display: ${(p) => (p.$visible ? "grid" : "none")};
  align-items: center;
  grid-template-columns: ${(p) =>
    p.$secondary ? "340px 88px 1fr" : "340px 168px 1fr"};
  width: 100%;
  min-width: 992px;
  min-height: 100px;

  ${StackedTexts} {
    justify-self: end;

    margin-right: 36px;
  }

  ${Title} {
    margin-left: 26px;
  }
`;
