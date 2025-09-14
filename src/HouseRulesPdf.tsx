
export default function HouseRules() {
  return (
    <div className="flex flex-col gap-8 p-2 md:p-8 slide-in-from-right text-lg relative z-negative">
      <iframe
        src="/Airbnb-HOUSE-RULE.pdf#toolbar=0&navpanes=0&scrollbar=0"
        width="100%"
        height="100%"
        className="border rounded-lg shadow h-dvh-90"
        title="House Rules"
      ></iframe>
    </div>
  );
}
