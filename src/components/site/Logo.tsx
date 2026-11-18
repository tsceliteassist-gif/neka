export const LOGO_SRC = "/pail-institute-logo.png";

export function Logo({ size = 48 }: { size?: number }) {
  return (
    <img
      src={LOGO_SRC}
      alt="Pregnancy and Infant Loss Institute logo"
      width={size}
      height={size}
      className="shrink-0 rounded-full object-contain"
    />
  );
}
