export default function DateTime({ dateTimeString }) {
  // Constants
  const convertedDate = dateTimeString.split("T")[0];
  const convertedTime = dateTimeString.split("T")[1].substring(0, 5);

  return (
    <p>
      Estimated arrival: {convertedDate} at {convertedTime}
    </p>
  );
}
