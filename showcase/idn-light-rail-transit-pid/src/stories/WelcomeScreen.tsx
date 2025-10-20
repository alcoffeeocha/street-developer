interface WelcomeScreenProps {
  language: "ID" | "EN";
  routeCode: string;
  routeName: string;
  destinationCode: string;
  destinationName: string;
}

export default function WelcomeScreen({
  language,
  routeCode,
  routeName,
  destinationCode,
  destinationName,
}: WelcomeScreenProps) {
  return (
    <ul>
      <li>lang {language}</li>
      <li>{routeCode}</li>
      <li>{routeName}</li>
      <li>{destinationCode}</li>
      <li>{destinationName}</li>
    </ul>
  );
}
